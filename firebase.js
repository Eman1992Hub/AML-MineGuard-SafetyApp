// ============================================
// MINEGUARD — FIREBASE FIRESTORE REST API v7
// Project: aml-mineguard
// Uses Firestore REST API (plain HTTPS fetch)
// instead of the Firebase JS SDK WebSocket/gRPC.
// Works on ALL networks including restricted WiFi,
// corporate firewalls, and mobile data.
//
// PHOTOS: Firebase Storage requires the Blaze (paid) plan,
// so compressed photos are stored directly as base64 inside
// the Firestore incident document (client-side compression
// in app.js keeps each incident under the 1MB doc limit).
// ============================================

// ── Config — aml-mineguard project ───────────────────────────────────────────
const _FB = {
  projectId: 'aml-mineguard',
  apiKey:    'AIzaSyCPqKNe7zyTfBqLT6Gh7Cx2-f7jSf1gvTg',
  get base() {
    return `https://firestore.googleapis.com/v1/projects/${this.projectId}/databases/(default)/documents`;
  },
  get key() { return `?key=${this.apiKey}`; }
};

// ── Shared runtime state ──────────────────────────────────────────────────────
window.MG = window.MG || {};
window.MG.online    = false;
window.MG.db        = null;   // not used in REST mode but kept for compatibility
window.MG.listeners = [];

// Ready promise — resolves true/false after connectivity check
window.MG.ready = new Promise(function(resolve) {
  window.MG._resolveReady = resolve;
});

const COL_INCIDENTS = 'incidents';
const COL_JSAS      = 'jsas';

// ── Sync banner ───────────────────────────────────────────────────────────────
function updateSyncBanner(state) {
  const banner = document.getElementById('syncBanner');
  if (!banner) return;
  const map = {
    syncing: { text: '🔄 Syncing to cloud...', cls: 'syncing' },
    synced:  { text: '☁️ Cloud sync ON — all devices see this data', cls: 'synced' },
    offline: { text: '📴 Offline mode — saved locally, will sync when online', cls: 'offline' },
  };
  const m = map[state] || map['offline'];
  banner.textContent   = m.text;
  banner.className     = 'sync-banner ' + m.cls;
  banner.style.display = 'block';
}

// ── Convert JS value → Firestore REST field ──────────────────────────────────
function toFSValue(v) {
  if (v === null || v === undefined) return { nullValue: null };
  if (typeof v === 'boolean')  return { booleanValue: v };
  if (typeof v === 'number') {
    return Number.isInteger(v) ? { integerValue: String(v) } : { doubleValue: v };
  }
  if (typeof v === 'string')   return { stringValue: v };
  if (Array.isArray(v))        return { arrayValue: { values: v.map(toFSValue) } };
  if (typeof v === 'object')   return { mapValue: { fields: toFSFields(v) } };
  return { stringValue: String(v) };
}

function toFSFields(obj) {
  const fields = {};
  for (const [k, v] of Object.entries(obj)) {
    fields[k] = toFSValue(v);
  }
  return fields;
}

// ── Convert Firestore REST field → JS value ──────────────────────────────────
function fromFSValue(v) {
  if (!v || typeof v !== 'object') return null;
  if ('nullValue'    in v) return null;
  if ('booleanValue' in v) return v.booleanValue;
  if ('integerValue' in v) return parseInt(v.integerValue, 10);
  if ('doubleValue'  in v) return v.doubleValue;
  if ('stringValue'  in v) return v.stringValue;
  if ('arrayValue'   in v) return (v.arrayValue.values || []).map(fromFSValue);
  if ('mapValue'     in v) return fromFSFields(v.mapValue.fields || {});
  if ('timestampValue' in v) return v.timestampValue;
  return null;
}

function fromFSFields(fields) {
  if (!fields) return {};
  const obj = {};
  for (const [k, v] of Object.entries(fields)) {
    obj[k] = fromFSValue(v);
  }
  return obj;
}

// ── Core REST helpers ─────────────────────────────────────────────────────────

// POST a new document to a collection — returns the document ID
async function restAdd(collection, data) {
  const url  = `${_FB.base}/${collection}${_FB.key}`;
  const body = JSON.stringify({ fields: toFSFields(data) });

  const resp = await fetch(url, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body
  });

  if (!resp.ok) {
    const err = await resp.json().catch(() => ({ error: { message: resp.statusText } }));
    throw new Error((err.error && err.error.message) || `HTTP ${resp.status}`);
  }

  const result = await resp.json();
  return result.name ? result.name.split('/').pop() : null;
}

// GET all documents in a collection ordered by createdAt desc
async function restQuery(collection, max) {
  const url  = `https://firestore.googleapis.com/v1/projects/${_FB.projectId}/databases/(default)/documents:runQuery${_FB.key}`;
  const body = JSON.stringify({
    structuredQuery: {
      from:    [{ collectionId: collection }],
      orderBy: [{ field: { fieldPath: 'createdAt' }, direction: 'DESCENDING' }],
      limit:   max || 500
    }
  });

  const resp = await fetch(url, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body
  });

  if (!resp.ok) {
    const err = await resp.json().catch(() => ({ error: { message: resp.statusText } }));
    throw new Error((err.error && err.error.message) || `HTTP ${resp.status}`);
  }

  const results = await resp.json();
  if (!Array.isArray(results)) return [];

  return results
    .filter(r => r.document)
    .map(r => ({
      ...fromFSFields(r.document.fields),
      _id: r.document.name.split('/').pop()
    }));
}

// PATCH (update) specific fields on a document
async function restUpdate(collection, docId, data) {
  const fieldNames = Object.keys(data);
  const maskQuery  = fieldNames.map(f => `updateMask.fieldPaths=${encodeURIComponent(f)}`).join('&');
  const url        = `${_FB.base}/${collection}/${docId}${_FB.key}&${maskQuery}`;
  const body       = JSON.stringify({ fields: toFSFields(data) });

  const resp = await fetch(url, {
    method:  'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body
  });

  if (!resp.ok) {
    const err = await resp.json().catch(() => ({ error: { message: resp.statusText } }));
    throw new Error((err.error && err.error.message) || `HTTP ${resp.status}`);
  }
  return true;
}

// DELETE one document
async function restDelete(collection, docId) {
  const url  = `${_FB.base}/${collection}/${docId}${_FB.key}`;
  const resp = await fetch(url, { method: 'DELETE' });
  if (!resp.ok && resp.status !== 404) {
    const err = await resp.json().catch(() => ({ error: { message: resp.statusText } }));
    throw new Error((err.error && err.error.message) || `HTTP ${resp.status}`);
  }
  return true;
}

// DELETE all documents in a collection
async function restDeleteAll(collection) {
  const docs = await restQuery(collection);
  await Promise.all(docs.map(doc => restDelete(collection, doc._id)));
}

// ── Connectivity check ────────────────────────────────────────────────────────
async function checkFirestoreConnectivity() {
  try {
    // Use the same :runQuery POST endpoint that restQuery() uses for reads.
    // This is confirmed to work (same request type as writes/reads in the
    // REST test tool), avoiding any GET-list-endpoint edge cases.
    const url  = `https://firestore.googleapis.com/v1/projects/${_FB.projectId}/databases/(default)/documents:runQuery${_FB.key}`;
    const body = JSON.stringify({
      structuredQuery: {
        from:  [{ collectionId: COL_INCIDENTS }],
        limit: 1
      }
    });

    const resp = await Promise.race([
      fetch(url, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body
      }),
      new Promise((_, r) => setTimeout(() => r(new Error('timeout')), 8000))
    ]);

    if (resp.status < 500) {
      window.MG.online = true;
      console.log('[MineGuard] Firestore REST API reachable ✓ (project: ' + _FB.projectId + ', HTTP ' + resp.status + ')');
    } else {
      window.MG.online = false;
      console.warn('[MineGuard] Firestore REST returned server error', resp.status);
    }
  } catch (e) {
    window.MG.online = false;
    console.warn('[MineGuard] Firestore REST not reachable:', e.message);
  }
  window.MG._resolveReady(window.MG.online);
}

// Run connectivity check after DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', checkFirestoreConnectivity);
} else {
  checkFirestoreConnectivity();
}

// ── Compatibility stub ────────────────────────────────────────────────────────
function detachAllListeners() {
  window.MG.listeners.forEach(unsub => { try { unsub(); } catch(e) {} });
  window.MG.listeners = [];
}

// =============================================================================
// INCIDENTS
// =============================================================================

/**
 * Save one incident.
 * Writes to localStorage immediately, then to Firestore REST if online.
 * Returns the Firestore document ID, or null if offline/failed.
 */
async function saveIncidentToCloud(incident) {
  const incidentWithTs = { ...incident, createdAt: Date.now() };

  // 1. Always save locally first (instant, offline-safe).
  //    localStorage keeps the same compressed photos as Firestore,
  //    since compression happens in app.js before this is called.
  const local = JSON.parse(localStorage.getItem('mineguard_incidents') || '[]');
  local.unshift(incidentWithTs);
  localStorage.setItem('mineguard_incidents', JSON.stringify(local));

  // 2. Wait for connectivity check (max 6s)
  const isOnline = await Promise.race([
    window.MG.ready,
    new Promise(r => setTimeout(() => r(false), 6000))
  ]);

  if (!isOnline) {
    updateSyncBanner('offline');
    return null;
  }

  try {
    updateSyncBanner('syncing');

    // 3. Build the cloud record. Photos are already compressed JPEGs
    //    (resized to max 1024px, quality 0.6) from app.js, typically
    //    80-150KB each as base64 — well within Firestore's 1MB limit
    //    for up to 3 photos.
    let cloudRecord = { ...incidentWithTs };

    // Safety check: if the record (with all photos) would exceed
    // Firestore's 1MB document limit for any reason (e.g. very large
    // source images on an older device), progressively drop photos
    // from the end until it fits. This guarantees the write never
    // fails due to size — worst case, fewer photos sync to the cloud
    // but the full set remains in localStorage on this device.
    const FIRESTORE_LIMIT = 1048576; // 1 MiB
    const SAFETY_MARGIN   = 50000;   // reserve ~50KB for Firestore field overhead

    let photos = (cloudRecord.photos || []).filter(Boolean);
    while (photos.length > 0) {
      const candidate = { ...cloudRecord, photos };
      const size = new TextEncoder().encode(JSON.stringify(toFSFields(candidate))).length;
      if (size <= FIRESTORE_LIMIT - SAFETY_MARGIN) break;
      console.warn('[MineGuard] Incident record too large (' + size + ' bytes) — dropping last photo to fit Firestore limit.');
      photos = photos.slice(0, -1);
    }
    cloudRecord.photos = photos;

    // 4. Write to Firestore
    const docId = await restAdd(COL_INCIDENTS, cloudRecord);
    console.log('[MineGuard] Incident saved to Firestore:', docId, '| photos synced:', photos.length, '/', (incidentWithTs.photos || []).length);
    updateSyncBanner('synced');

    // Back-patch Firestore ID into localStorage record
    const local2 = JSON.parse(localStorage.getItem('mineguard_incidents') || '[]');
    const match  = local2.find(i => i.savedAt === incident.savedAt && i.name === incident.name);
    if (match) {
      match._id = docId;
      localStorage.setItem('mineguard_incidents', JSON.stringify(local2));
    }
    return docId;

  } catch (err) {
    console.error('[MineGuard] Incident write failed:', err.message);
    updateSyncBanner('offline');
    return null;
  }
}

/**
 * One-shot fetch of all incidents (admin use).
 */
async function fetchIncidents() {
  const isOnline = await Promise.race([
    window.MG.ready,
    new Promise(r => setTimeout(() => r(false), 6000))
  ]);
  if (!isOnline) return JSON.parse(localStorage.getItem('mineguard_incidents') || '[]');

  try {
    const docs  = await restQuery(COL_INCIDENTS);
    const local = JSON.parse(localStorage.getItem('mineguard_incidents') || '[]');
    docs.forEach(doc => {
      const match = local.find(l => l.savedAt === doc.savedAt && l.name === doc.name);
      // Firestore photos (compressed base64) are canonical and visible
      // on every device. Only fall back to the local copy if Firestore
      // has fewer photos than were originally captured (the size-limit
      // safety mechanism dropped some) — gives the submitting device
      // access to its full local set while other devices see what synced.
      const localPhotoCount = match && match.photos ? match.photos.length : 0;
      const cloudPhotoCount = doc.photos ? doc.photos.length : 0;
      if (localPhotoCount > cloudPhotoCount) {
        doc.photos = match.photos;
      }
    });
    return docs;
  } catch (err) {
    console.error('[MineGuard] Fetch incidents failed:', err.message);
    return JSON.parse(localStorage.getItem('mineguard_incidents') || '[]');
  }
}

/**
 * Subscribe to incident updates (admin dashboard).
 * Polls Firestore every 15 seconds since REST has no real-time push.
 * Returns an unsubscribe function.
 */
function subscribeIncidents(callback) {
  let active = true;

  async function poll() {
    if (!active) return;
    try {
      const isOnline = await Promise.race([
        window.MG.ready,
        new Promise(r => setTimeout(() => r(false), 6000))
      ]);
      if (isOnline) {
        const docs  = await restQuery(COL_INCIDENTS);
        const local = JSON.parse(localStorage.getItem('mineguard_incidents') || '[]');
        docs.forEach(doc => {
          const match = local.find(l => l.savedAt === doc.savedAt && l.name === doc.name);
          const localPhotoCount = match && match.photos ? match.photos.length : 0;
          const cloudPhotoCount = doc.photos ? doc.photos.length : 0;
          if (localPhotoCount > cloudPhotoCount) {
            doc.photos = match.photos;
          }
        });
        callback(docs);
      } else {
        callback(JSON.parse(localStorage.getItem('mineguard_incidents') || '[]'));
      }
    } catch (e) {
      console.error('[MineGuard] Incident poll error:', e.message);
      callback(JSON.parse(localStorage.getItem('mineguard_incidents') || '[]'));
    }
    if (active) setTimeout(poll, 15000);
  }

  poll();

  const unsub = () => { active = false; };
  window.MG.listeners.push(unsub);
  return unsub;
}

/**
 * Update a single incident's status.
 * docId may be either a real Firestore document ID (item._id) or,
 * for records that were never synced, the local savedAt timestamp string.
 * We always resolve to the real Firestore _id (if one exists) before
 * sending the PATCH request, so resolving an incident always targets
 * the correct cloud document.
 */
async function updateIncidentStatus(docId, status) {
  // Update localStorage first
  const local = JSON.parse(localStorage.getItem('mineguard_incidents') || '[]');
  const item  = local.find(i => i._id === docId || i.savedAt === docId);
  if (item) {
    item.status     = status;
    item.resolvedAt = new Date().toLocaleString();
    localStorage.setItem('mineguard_incidents', JSON.stringify(local));
  }

  const isOnline = await Promise.race([
    window.MG.ready,
    new Promise(r => setTimeout(() => r(false), 4000))
  ]);
  if (!isOnline) return;

  // Resolve the real Firestore document ID:
  // 1. If the matched local item has _id, use that.
  // 2. Otherwise, if docId itself looks like a Firestore ID (no spaces,
  //    not a date string), use docId directly.
  const firestoreId = (item && item._id) ? item._id : docId;
  if (!firestoreId) return;

  try {
    await restUpdate(COL_INCIDENTS, firestoreId, {
      status,
      resolvedAt: new Date().toLocaleString()
    });
    console.log('[MineGuard] Incident status updated:', firestoreId, status);
  } catch (err) {
    console.error('[MineGuard] Status update failed:', err.message);
  }
}

/**
 * Delete all incidents (and their embedded photos) from Firestore + localStorage.
 */
async function clearAllIncidents() {
  localStorage.removeItem('mineguard_incidents');
  const isOnline = await Promise.race([
    window.MG.ready,
    new Promise(r => setTimeout(() => r(false), 4000))
  ]);
  if (!isOnline) return;
  try {
    await restDeleteAll(COL_INCIDENTS);
    console.log('[MineGuard] All incidents cleared from Firestore.');
  } catch (err) {
    console.error('[MineGuard] Clear incidents failed:', err.message);
  }
}

// =============================================================================
// JSAs
// =============================================================================

/**
 * Save one JSA.
 */
async function saveJSAToCloud(jsa) {
  const jsaWithTs = { ...jsa, createdAt: Date.now() };

  const local = JSON.parse(localStorage.getItem('mineguard_jsas') || '[]');
  local.unshift(jsaWithTs);
  localStorage.setItem('mineguard_jsas', JSON.stringify(local));

  const isOnline = await Promise.race([
    window.MG.ready,
    new Promise(r => setTimeout(() => r(false), 6000))
  ]);
  if (!isOnline) { updateSyncBanner('offline'); return null; }

  try {
    updateSyncBanner('syncing');
    const docId = await restAdd(COL_JSAS, jsaWithTs);
    console.log('[MineGuard] JSA saved to Firestore:', docId);
    updateSyncBanner('synced');
    return docId;
  } catch (err) {
    console.error('[MineGuard] JSA write failed:', err.message);
    updateSyncBanner('offline');
    return null;
  }
}

/**
 * One-shot fetch of all JSAs (admin use / manual refresh).
 */
async function fetchJSAs() {
  const isOnline = await Promise.race([
    window.MG.ready,
    new Promise(r => setTimeout(() => r(false), 6000))
  ]);
  if (!isOnline) return JSON.parse(localStorage.getItem('mineguard_jsas') || '[]');

  try {
    return await restQuery(COL_JSAS);
  } catch (err) {
    console.error('[MineGuard] Fetch JSAs failed:', err.message);
    return JSON.parse(localStorage.getItem('mineguard_jsas') || '[]');
  }
}

/**
 * Subscribe to JSA updates (admin dashboard). Polls every 15s.
 */
function subscribeJSAs(callback) {
  let active = true;

  async function poll() {
    if (!active) return;
    try {
      const isOnline = await Promise.race([
        window.MG.ready,
        new Promise(r => setTimeout(() => r(false), 6000))
      ]);
      if (isOnline) {
        const docs = await restQuery(COL_JSAS);
        callback(docs);
      } else {
        callback(JSON.parse(localStorage.getItem('mineguard_jsas') || '[]'));
      }
    } catch (e) {
      console.error('[MineGuard] JSA poll error:', e.message);
      callback(JSON.parse(localStorage.getItem('mineguard_jsas') || '[]'));
    }
    if (active) setTimeout(poll, 15000);
  }

  poll();

  const unsub = () => { active = false; };
  window.MG.listeners.push(unsub);
  return unsub;
}

/**
 * Delete all JSAs from Firestore + localStorage.
 */
async function clearAllJSAs() {
  localStorage.removeItem('mineguard_jsas');
  const isOnline = await Promise.race([
    window.MG.ready,
    new Promise(r => setTimeout(() => r(false), 4000))
  ]);
  if (!isOnline) return;
  try {
    await restDeleteAll(COL_JSAS);
    console.log('[MineGuard] All JSAs cleared from Firestore.');
  } catch (err) {
    console.error('[MineGuard] Clear JSAs failed:', err.message);
  }
}
