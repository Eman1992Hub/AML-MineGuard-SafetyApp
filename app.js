// ============================================
// MINEGUARD APP — MAIN LOGIC
// v5 — Multilingual + Push Notifications
// ============================================

// ---- SPLASH SCREEN ----
function dismissSplash() {
  try {
    const splash = document.getElementById('splash');
    const app = document.getElementById('app');
    if (splash) { splash.classList.add('fade-out'); setTimeout(() => { splash.style.display = 'none'; }, 500); }
    if (app) app.classList.remove('hidden');
    initApp();
  } catch(e) {
    console.error('Init error:', e);
    const splash = document.getElementById('splash');
    const app = document.getElementById('app');
    if (splash) splash.style.display = 'none';
    if (app) app.classList.remove('hidden');
  }
}

window.addEventListener('load', () => { setTimeout(dismissSplash, 1500); });
setTimeout(dismissSplash, 4000);

// ---- APP INIT ----
function initApp() {
  applyLanguageToDOM();
  renderGlossary();
  renderPPE();
  renderPPEChecklist();
  renderEmergencyContacts();
  renderFirstAid();
  renderLetterFilter();
  setDailyTip();
  updateGlossaryCount();
  checkOnlineStatus();
  setJSADate();
  renderNotificationWidget();
  checkNotificationStatus();
  // Show Firebase sync status
  if (window.MG && window.MG.online) {
    updateSyncBanner('synced');
  } else {
    updateSyncBanner('offline');
  }
}

// ============================================
// LANGUAGE SWITCHING
// ============================================

function applyLanguageToDOM() {
  // Offline badge
  checkOnlineStatus();

  // Nav labels
  const navMap = {
    'nav-home': 'navHome',
    'nav-glossary': 'navGlossary',
    'nav-ppe': 'navPPE',
    'nav-jsa': 'navJSA',
    'nav-report': 'navReport',
    'nav-sos': 'navSOS',
  };
  Object.entries(navMap).forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = t(key);
  });

  // Hero section
  const heroTitle = document.getElementById('heroTitle');
  if (heroTitle) heroTitle.innerHTML = t('heroTitle');
  const heroSub = document.getElementById('heroSub');
  if (heroSub) heroSub.textContent = t('heroSub');

  // Quick access labels
  setTextById('qc-glossary-label', t('navGlossary'));
  setTextById('qc-ppe-label', t('navPPE'));
  setTextById('qc-jsa-label', t('jsaTool'));
  setTextById('qc-jsa-count', t('jsaRisk'));
  setTextById('qc-emergency-label', t('emergency'));
  setTextById('qc-emergency-count', t('tapNow'));

  const quickAccess = document.getElementById('quickAccessTitle');
  if (quickAccess) quickAccess.textContent = t('quickAccess');

  const adminLink = document.getElementById('adminLinkText');
  if (adminLink) adminLink.textContent = t('adminDashboard');

  const tipLabel = document.getElementById('tipLabel');
  if (tipLabel) tipLabel.textContent = t('safetyTipLabel');

  setTextById('statTermsDefined', t('termsDefined'));
  setTextById('statPPEItems', t('ppeItemsLabel'));
  setTextById('statOffline', t('offlineReady'));

  // Glossary tab
  setTextById('glossaryTabTitle', t('glossaryTitle'));
  setTextById('glossaryTabSub', t('glossarySub'));
  const glossarySearch = document.getElementById('glossarySearch');
  if (glossarySearch) glossarySearch.placeholder = t('searchPlaceholder');

  // PPE tab
  setTextById('ppeTabTitle', t('ppeTitle'));
  setTextById('ppeTabSub', t('ppeSub'));

  // JSA tab
  setTextById('jsaTabTitle', t('jsaTitle'));
  setTextById('jsaTabSub', t('jsaSub'));
  setPlaceholder('jsa-worker', t('workerNamePlaceholder'));
  setPlaceholder('jsa-task', t('taskPlaceholder'));
  setPlaceholder('jsa-location', t('locationPlaceholder'));
  setPlaceholder('jsa-supervisor', t('supervisorPlaceholder'));
  setLabelText('label-jsa-worker', t('workerName'));
  setLabelText('label-jsa-task', t('taskDesc'));
  setLabelText('label-jsa-location', t('locationArea'));
  setLabelText('label-jsa-date', t('date'));
  setLabelText('label-jsa-supervisor', t('supervisorName'));
  setTextById('jsaHazardTitle', t('hazardId'));
  setTextById('jsaPPETitle', t('ppeRequired'));
  setTextById('btnAddHazard', t('addHazard'));
  setTextById('btnSaveJSA', t('saveJSA'));
  setTextById('btnClearJSA', t('clearForm'));

  // Incident tab
  setTextById('incTabTitle', t('incidentTitle'));
  setTextById('incTabSub', t('incidentSub'));
  setTextById('incReporterTitle', t('reporterInfo'));
  setLabelText('label-inc-name', t('fullName'));
  setLabelText('label-inc-badge', t('employeeId'));
  setLabelText('label-inc-dept', t('department'));
  setPlaceholder('inc-name', t('fullNamePlaceholder'));
  setPlaceholder('inc-badge', t('employeePlaceholder'));
  setPlaceholder('inc-dept', t('deptPlaceholder'));
  setTextById('incDetailsTitle', t('incidentDetails'));
  setLabelText('label-inc-datetime', t('dateTime'));
  setLabelText('label-inc-location', t('incidentLocation'));
  setLabelText('label-inc-type', t('incidentType'));
  setLabelText('label-inc-severity', t('severity'));
  setPlaceholder('inc-location', t('incidentLocationPlaceholder'));
  updateIncidentTypeOptions();
  updateSeverityButtons();
  setTextById('incWhatTitle', t('whatHappened'));
  setLabelText('label-inc-description', t('describeIncident'));
  setPlaceholder('inc-description', t('describePlaceholder'));
  setLabelText('label-inc-action', t('immediateAction'));
  setPlaceholder('inc-action', t('actionPlaceholder'));
  setTextById('incPhotoTitle', t('photoEvidence'));
  setTextById('incPhotoHint', t('photoHint'));
  setTextById('btnTakePhoto', t('takePhoto'));
  setTextById('labelOpensCamera', t('opensCamera'));
  setTextById('btnChoosePhoto', t('choosePhoto'));
  setTextById('labelFromGallery', t('fromGallery'));
  setTextById('incWitnessTitle', t('witnesses'));
  setPlaceholder('inc-witnesses', t('witnessesPlaceholder'));
  setTextById('btnSubmitIncident', t('submitReport'));
  setTextById('btnClearIncident', t('clearBtn'));

  // Emergency tab
  setTextById('emergencyTabTitle', t('emergencyTitle'));
  setTextById('emergencyTabSub', t('emergencySub'));
  setTextById('emergencyActionsTitle', t('immediateActions'));
  setInnerHTML('emergencyStep1', t('step1'));
  setInnerHTML('emergencyStep2', t('step2'));
  setInnerHTML('emergencyStep3', t('step3'));
  setInnerHTML('emergencyStep4', t('step4'));
  setInnerHTML('emergencyStep5', t('step5'));
  setTextById('emergencyContactsTitle', t('emergencyContacts'));
  setTextById('btnAddContact', t('addSiteContact'));
  setPlaceholder('contactName', t('contactNamePlaceholder'));
  setPlaceholder('contactNumber', t('contactNumberPlaceholder'));
  setTextById('btnSaveContact', t('save'));
  setTextById('btnCancelContact', t('cancel'));
  setTextById('firstAidTitle', t('firstAidGuide'));

  // Notification widget
  setTextById('notifWidgetTitle', t('notifTitle'));
  setTextById('notifWidgetSub', t('notifSub'));
  renderNotificationWidget();
}

function setTextById(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}
function setInnerHTML(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}
function setPlaceholder(id, text) {
  const el = document.getElementById(id);
  if (el) el.placeholder = text;
}
function setLabelText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function updateIncidentTypeOptions() {
  const sel = document.getElementById('inc-type');
  if (!sel) return;
  const opts = [
    ['', t('selectType')],
    ['near_miss', t('nearMiss')],
    ['hazard', t('hazardObs')],
    ['injury', t('injury')],
    ['property', t('property')],
    ['environmental', t('environmental')],
    ['security', t('security')],
    ['fire', t('fire')],
  ];
  const cur = sel.value;
  sel.innerHTML = opts.map(([v, label]) =>
    `<option value="${v}"${cur===v?' selected':''}>${label}</option>`
  ).join('');
}

function updateSeverityButtons() {
  const btns = [
    ['low', t('sevLow')],
    ['medium', t('sevMedium')],
    ['high', t('sevHigh')],
    ['critical', t('sevCritical')],
  ];
  btns.forEach(([sev, label]) => {
    const btn = document.querySelector(`.sev-btn[data-sev="${sev}"]`);
    if (btn) btn.textContent = label;
  });
}

function switchLanguage(lang) {
  setLanguage(lang);
  // Update toggle button states
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  // Re-render all dynamic content
  applyLanguageToDOM();
  renderGlossary(document.getElementById('glossarySearch')?.value || '');
  renderLetterFilter();
  renderPPE();
  renderPPEChecklist();
  renderEmergencyContacts();
  renderFirstAid();
  setDailyTip();
  updateGlossaryCount();
  renderSavedJSAs();
  renderPastIncidents();
  renderNotificationWidget();
}

// ---- TABS ----
function showTab(tabId, btn) {
  document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + tabId).classList.add('active');
  if (btn) btn.classList.add('active');
  document.querySelector('.main-content').scrollTop = 0;
}

// ---- ONLINE STATUS ----
function checkOnlineStatus() {
  const badge = document.getElementById('offlineBadge');
  if (!badge) return;
  function update() {
    if (navigator.onLine) {
      badge.textContent = t('onlineLabel');
      badge.classList.add('online');
    } else {
      badge.textContent = t('offlineLabel');
      badge.classList.remove('online');
    }
  }
  update();
  window.addEventListener('online', update);
  window.addEventListener('offline', update);
}

// ---- DAILY TIP ----
function setDailyTip() {
  const tips = getSafetyTips();
  const day = new Date().getDay();
  const tip = tips[day % tips.length];
  const el = document.getElementById('dailyTip');
  if (el) el.textContent = tip;
}

// ---- GLOSSARY ----
let activeFilter = 'ALL';

function getGlossarySource() {
  return window.currentLang === 'fr' ? window.GLOSSARY_TERMS_FR : GLOSSARY_TERMS;
}

function renderGlossary(filter = '') {
  const list = document.getElementById('glossaryList');
  const lower = filter.toLowerCase();
  const source = getGlossarySource();

  let filtered = source.filter(item => {
    const matchText = item.term.toLowerCase().includes(lower) ||
                      item.definition.toLowerCase().includes(lower) ||
                      item.short.toLowerCase().includes(lower);
    const matchLetter = activeFilter === 'ALL' || item.term[0].toUpperCase() === activeFilter;
    return matchText && matchLetter;
  });

  filtered.sort((a, b) => a.term.localeCompare(b.term));

  if (filtered.length === 0) {
    list.innerHTML = `<div style="text-align:center;padding:40px;color:var(--text-muted);">${t('noTermsFound')} "${filter}"</div>`;
    return;
  }

  list.innerHTML = filtered.map((item, i) => `
    <div class="glossary-item" id="gitem-${i}">
      <div class="glossary-term" onclick="toggleGlossary('gitem-${i}')">
        <div class="term-left">
          <div class="term-letter">${item.term[0].toUpperCase()}</div>
          <div>
            <div class="term-name">${item.term}</div>
            <div class="term-short">${item.short}</div>
          </div>
        </div>
        <span class="term-arrow">▼</span>
      </div>
      <div class="glossary-def">
        <div class="def-text">${item.definition}</div>
        <span class="def-category">${item.category}</span>
      </div>
    </div>
  `).join('');
}

function toggleGlossary(id) {
  document.getElementById(id).classList.toggle('open');
}

function filterGlossary(value) {
  activeFilter = 'ALL';
  document.querySelectorAll('.letter-btn').forEach(b => b.classList.remove('active'));
  const allBtn = document.querySelector('.letter-btn[data-letter="ALL"]');
  if (allBtn) allBtn.classList.add('active');
  renderGlossary(value);
}

function renderLetterFilter() {
  const source = getGlossarySource();
  const letters = ['ALL', ...new Set(source.map(t => t.term[0].toUpperCase()).sort())];
  const container = document.getElementById('letterFilter');
  container.innerHTML = letters.map(l => `
    <button class="letter-btn ${l === activeFilter ? 'active' : ''}" data-letter="${l}" onclick="filterByLetter('${l}', this)">${l}</button>
  `).join('');
}

function filterByLetter(letter, btn) {
  activeFilter = letter;
  document.querySelectorAll('.letter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const search = document.getElementById('glossarySearch');
  if (search) search.value = '';
  renderGlossary('');
}

function updateGlossaryCount() {
  const count = getGlossarySource().length;
  const glossaryCount = document.getElementById('glossaryCount');
  if (glossaryCount) glossaryCount.textContent = `${count} ${t('glossaryCount')}`;
  const glossaryStat = document.getElementById('glossaryStat');
  if (glossaryStat) glossaryStat.textContent = count;
}

// ---- PPE ----
function renderPPE() {
  const list = document.getElementById('ppeList');
  const items = getPPEItems();
  list.innerHTML = items.map(item => `
    <div class="ppe-card">
      <div class="ppe-emoji">${item.emoji}</div>
      <div class="ppe-info">
        <div class="ppe-name">${item.name}</div>
        <div class="ppe-desc">${item.description}</div>
        <div class="ppe-when">📍 ${item.when}</div>
        <span class="ppe-mandatory ${item.mandatory === 'always' ? 'always' : 'task'}">
          ${item.mandatory === 'always' ? t('alwaysRequired') : t('taskSpecific')}
        </span>
      </div>
    </div>
  `).join('');
}

function renderPPEChecklist() {
  const container = document.getElementById('ppeChecklist');
  const items = getPPEItems();
  container.innerHTML = items.map((item, i) => `
    <div class="ppe-check-item" id="pcheck-${i}" onclick="togglePPECheck('pcheck-${i}')">
      <input type="checkbox" />
      <span>${item.emoji} ${item.name.split(' ')[0]}</span>
    </div>
  `).join('');
}

function togglePPECheck(id) {
  const el = document.getElementById(id);
  el.classList.toggle('checked');
  el.querySelector('input').checked = el.classList.contains('checked');
}

// ---- JSA ----
function setJSADate() {
  const today = new Date().toISOString().split('T')[0];
  const el = document.getElementById('jsa-date');
  if (el) el.value = today;
}

function addHazardRow() {
  const container = document.getElementById('hazardRows');
  const row = document.createElement('div');
  row.className = 'hazard-row';
  row.innerHTML = `
    <input type="text" placeholder="${t('hazardPlaceholder')}" class="hazard-input" />
    <select class="risk-select">
      <option value="">${t('riskLevel')}</option>
      <option value="low">${t('riskLow')}</option>
      <option value="medium">${t('riskMedium')}</option>
      <option value="high">${t('riskHigh')}</option>
      <option value="critical">${t('riskCritical')}</option>
    </select>
    <input type="text" placeholder="${t('controlMeasure')}" class="control-input" />
    <button onclick="this.parentElement.remove()" style="background:rgba(230,57,70,0.1);color:var(--accent-red);border:1px solid rgba(230,57,70,0.2);border-radius:6px;padding:6px 12px;cursor:pointer;font-size:13px;">${t('removeBtn')}</button>
  `;
  container.appendChild(row);
}

async function submitJSA() {
  const worker = document.getElementById('jsa-worker').value.trim();
  const task = document.getElementById('jsa-task').value.trim();
  const location = document.getElementById('jsa-location').value.trim();
  if (!worker || !task || !location) {
    alert(t('fillRequired').replace('Name, Location, Incident Type, and Description', 'Worker Name, Task, and Location'));
    return;
  }
  const hazards = [];
  document.querySelectorAll('.hazard-row').forEach(row => {
    const hazard = row.querySelector('.hazard-input').value.trim();
    const risk = row.querySelector('.risk-select').value;
    const control = row.querySelector('.control-input').value.trim();
    if (hazard) hazards.push({ hazard, risk, control });
  });
  const ppeSelected = [...document.querySelectorAll('.ppe-check-item.checked')]
    .map(el => el.querySelector('span').textContent.trim());
  const jsa = {
    worker, task, location,
    date: document.getElementById('jsa-date').value,
    supervisor: document.getElementById('jsa-supervisor').value.trim(),
    hazards, ppeSelected,
    savedAt: new Date().toLocaleString(),
    lang: window.currentLang
  };
  // Save to Firebase + localStorage fallback
  await saveJSAToCloud(jsa);
  const confirmEl = document.getElementById('jsaConfirm');
  if (confirmEl) {
    confirmEl.textContent = t('jsaSaved');
    confirmEl.classList.remove('hidden');
    setTimeout(() => confirmEl.classList.add('hidden'), 3000);
  }
  clearJSAForm();
  renderSavedJSAs();
}

// Internal form reset — no confirm dialog (called after successful save)
function clearJSAForm() {
  document.getElementById('jsa-worker').value = '';
  document.getElementById('jsa-task').value = '';
  document.getElementById('jsa-location').value = '';
  document.getElementById('jsa-supervisor').value = '';
  setJSADate();
  document.getElementById('hazardRows').innerHTML = `
    <div class="hazard-row">
      <input type="text" placeholder="${t('hazardPlaceholder')}" class="hazard-input" />
      <select class="risk-select">
        <option value="">${t('riskLevel')}</option>
        <option value="low">${t('riskLow')}</option>
        <option value="medium">${t('riskMedium')}</option>
        <option value="high">${t('riskHigh')}</option>
        <option value="critical">${t('riskCritical')}</option>
      </select>
      <input type="text" placeholder="${t('controlMeasure')}" class="control-input" />
    </div>
  `;
  document.querySelectorAll('.ppe-check-item.checked').forEach(el => {
    el.classList.remove('checked');
    el.querySelector('input').checked = false;
  });
}

// Manual clear — asks confirmation (triggered by "Clear Form" button)
function clearJSA() {
  if (!window.confirm(t('clearJSAConfirm'))) return;
  clearJSAForm();
}

function renderSavedJSAs() {
  const saved = JSON.parse(localStorage.getItem('mineguard_jsas') || '[]');
  const container = document.getElementById('savedJSAs');
  if (saved.length === 0) { container.innerHTML = ''; return; }

  const riskColors = { low: '#2ec4b6', medium: '#ff8c00', high: '#e63946', critical: '#ff4444' };
  const riskLabels = { low: '🟢', medium: '🟡', high: '🔴', critical: '⛔' };

  container.innerHTML = `
    <h3 style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:var(--text-secondary);letter-spacing:2px;text-transform:uppercase;margin-bottom:12px;padding:0 0 8px;border-bottom:1px solid var(--border);">${t('savedJSAsTitle')}</h3>
    ${saved.map(j => `
      <div class="saved-jsa-card">
        <div class="saved-jsa-title">${j.task}</div>
        <div class="saved-jsa-meta">👷 ${j.worker} · 📍 ${j.location} · 📅 ${j.date}</div>
        ${j.hazards && j.hazards.length ? `
          <div style="margin-top:10px;display:flex;flex-direction:column;gap:6px;">
            ${j.hazards.map(h => `
              <div style="background:var(--bg-card2);border:1px solid var(--border);border-radius:8px;padding:8px 10px;">
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;">
                  <span style="font-size:12px;font-weight:700;color:var(--text-primary);">⚠️ ${h.hazard}</span>
                  ${h.risk ? `<span style="font-size:11px;font-weight:700;color:${riskColors[h.risk] || 'var(--text-muted)'};">${riskLabels[h.risk] || ''} ${h.risk.toUpperCase()}</span>` : ''}
                </div>
                ${h.control ? `<div style="font-size:11px;color:var(--accent-green);">🛡 ${h.control}</div>` : ''}
              </div>
            `).join('')}
          </div>
        ` : ''}
        ${j.ppeSelected && j.ppeSelected.length ? `<div style="margin-top:8px;font-size:11px;color:var(--text-muted);">🦺 ${j.ppeSelected.join(' · ')}</div>` : ''}
      </div>
    `).join('')}
  `;
}

// ---- EMERGENCY ----
function renderEmergencyContacts() {
  const stored = JSON.parse(localStorage.getItem('mineguard_contacts') || '[]');
  const base = getEmergencyContacts();
  const all = [...base, ...stored];
  const container = document.getElementById('emergencyContacts');
  container.innerHTML = all.map(c => `
    <div class="contact-card">
      <div class="contact-info">
        <div class="contact-name">${c.name}</div>
        <div class="contact-num">${c.number}</div>
      </div>
      <a class="contact-call" href="tel:${c.number.replace(/\D/g, '')}">📞 ${window.currentLang === 'fr' ? 'Appeler' : 'Call'}</a>
    </div>
  `).join('');
}

function showAddContact() { document.getElementById('addContactForm').classList.remove('hidden'); }
function hideAddContact() {
  document.getElementById('addContactForm').classList.add('hidden');
  document.getElementById('contactName').value = '';
  document.getElementById('contactNumber').value = '';
}
function saveContact() {
  const name = document.getElementById('contactName').value.trim();
  const number = document.getElementById('contactNumber').value.trim();
  if (!name || !number) { alert(t('enterBothFields')); return; }
  const saved = JSON.parse(localStorage.getItem('mineguard_contacts') || '[]');
  saved.push({ name, number });
  localStorage.setItem('mineguard_contacts', JSON.stringify(saved));
  hideAddContact();
  renderEmergencyContacts();
}

// ---- FIRST AID ----
function renderFirstAid() {
  const list = document.getElementById('firstAidList');
  const guides = getFirstAidGuides();
  list.innerHTML = guides.map((guide, i) => `
    <div class="first-aid-card" id="fa-${i}">
      <div class="fa-header" onclick="toggleFA('fa-${i}')">
        <div class="fa-title">${guide.emoji} ${guide.title}</div>
        <span class="fa-arrow">▼</span>
      </div>
      <div class="fa-steps">
        <ol>${guide.steps.map(s => `<li>${s}</li>`).join('')}</ol>
      </div>
    </div>
  `).join('');
}

function toggleFA(id) { document.getElementById(id).classList.toggle('open'); }

// ============================================
// PUSH NOTIFICATIONS MODULE
// ============================================

let notificationTimer = null;

function renderNotificationWidget() {
  const widget = document.getElementById('notifWidget');
  if (!widget) return;

  if (!('Notification' in window)) {
    widget.innerHTML = `
      <div class="notif-widget notif-unsupported">
        <div class="notif-icon">🔔</div>
        <div class="notif-info">
          <div class="notif-title">${t('notifTitle')}</div>
          <div class="notif-sub" style="color:var(--text-muted);">Not supported in this browser</div>
        </div>
      </div>`;
    return;
  }

  const perm = Notification.permission;
  const isEnabled = perm === 'granted' && localStorage.getItem('mg_notif_enabled') === 'true';

  widget.innerHTML = `
    <div class="notif-widget ${isEnabled ? 'notif-on' : ''}">
      <div class="notif-icon">${isEnabled ? '🔔' : '🔕'}</div>
      <div class="notif-info">
        <div class="notif-title">${t('notifTitle')}</div>
        <div class="notif-sub">${t('notifSub')}</div>
      </div>
      <div class="notif-action">
        ${perm === 'denied'
          ? `<span class="notif-status blocked">${t('notifBlocked')}</span>`
          : isEnabled
            ? `<button class="notif-toggle on" onclick="disableNotifications()">${t('notifEnabled')}</button>`
            : `<button class="notif-toggle off" onclick="enableNotifications()">${t('enableNotif')}</button>`
        }
      </div>
    </div>`;
}

async function enableNotifications() {
  if (!('Notification' in window)) return;
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      localStorage.setItem('mg_notif_enabled', 'true');
      scheduleNotifications();
      // Fire a test notification immediately
      sendSafetyTipNotification(true);
    }
    renderNotificationWidget();
  } catch(e) {
    console.error('Notification error:', e);
  }
}

function disableNotifications() {
  localStorage.setItem('mg_notif_enabled', 'false');
  if (notificationTimer) { clearTimeout(notificationTimer); notificationTimer = null; }
  renderNotificationWidget();
}

function checkNotificationStatus() {
  if (!('Notification' in window)) return;
  if (Notification.permission === 'granted' && localStorage.getItem('mg_notif_enabled') === 'true') {
    scheduleNotifications();
  }
}

function scheduleNotifications() {
  if (notificationTimer) clearTimeout(notificationTimer);
  const now = new Date();
  const next7am = new Date(now);
  next7am.setHours(7, 0, 0, 0);
  if (next7am <= now) next7am.setDate(next7am.getDate() + 1);
  const msUntil7am = next7am - now;
  notificationTimer = setTimeout(() => {
    sendSafetyTipNotification(false);
    // Re-schedule for the next day
    notificationTimer = setInterval(() => sendSafetyTipNotification(false), 24 * 60 * 60 * 1000);
  }, msUntil7am);
}

function sendSafetyTipNotification(isTest) {
  if (!('Notification' in window) || Notification.permission !== 'granted') return;
  if (localStorage.getItem('mg_notif_enabled') !== 'true') return;
  const tips = getSafetyTips();
  const tip = tips[new Date().getDay() % tips.length];
  const title = isTest
    ? (window.currentLang === 'fr' ? '✅ Notifications activées !' : '✅ Notifications enabled!')
    : t('notifDailyTitle');
  const body = isTest
    ? (window.currentLang === 'fr' ? 'Vous recevrez des conseils de sécurité quotidiens à 7h00.' : 'You will receive daily safety tips at 7:00 AM.')
    : tip;
  try {
    new Notification(title, {
      body,
      icon: 'icons/icon-192.png',
      badge: 'icons/icon-192.png',
      tag: 'mineguard-safety-tip',
      renotify: true,
    });
  } catch(e) {
    console.warn('Notification failed:', e);
  }
}

// ---- SERVICE WORKER REGISTRATION ----
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('[MineGuard] SW registered, scope:', reg.scope))
      .catch(err => console.log('[MineGuard] SW failed:', err));
  });
}

// ---- LOAD SAVED DATA ON START ----
window.addEventListener('load', () => {
  setTimeout(() => { renderSavedJSAs(); renderPastIncidents(); }, 2200);
});

// ============================================
// INCIDENT REPORTING MODULE
// ============================================

let incidentPhotos = [];

function setIncidentDateTime() {
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
  const el = document.getElementById('inc-datetime');
  if (el) el.value = local;
}

function setSeverity(level, btn) {
  document.querySelectorAll('.sev-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  document.getElementById('inc-severity').value = level;
}

function handlePhotos(input) {
  const newFiles = Array.from(input.files);
  const remaining = 3 - incidentPhotos.length;
  const filesToAdd = newFiles.slice(0, remaining);
  filesToAdd.forEach(file => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (incidentPhotos.length >= 3) return;
      incidentPhotos.push(e.target.result);
      renderPhotoPreviews();
    };
    reader.readAsDataURL(file);
  });
  input.value = '';
}

function renderPhotoPreviews() {
  const preview = document.getElementById('photoPreviewRow');
  const countEl = document.getElementById('photoCount');
  preview.innerHTML = incidentPhotos.map((src, i) => `
    <div class="preview-thumb">
      <img src="${src}" alt="Photo ${i+1}" />
      <button class="remove-photo" onclick="removePhoto(${i})">✕</button>
    </div>
  `).join('');
  if (countEl) {
    countEl.textContent = incidentPhotos.length > 0
      ? `📷 ${incidentPhotos.length}/3 ${t('photoAttached')}`
      : '';
  }
}

function removePhoto(idx) {
  incidentPhotos.splice(idx, 1);
  renderPhotoPreviews();
}

async function submitIncident() {
  const name = document.getElementById('inc-name').value.trim();
  const location = document.getElementById('inc-location').value.trim();
  const type = document.getElementById('inc-type').value;
  const description = document.getElementById('inc-description').value.trim();
  if (!name || !location || !type || !description) {
    alert(t('fillRequired'));
    return;
  }
  const incident = {
    name,
    badge: document.getElementById('inc-badge').value.trim(),
    dept: document.getElementById('inc-dept').value.trim(),
    datetime: document.getElementById('inc-datetime').value,
    location, type,
    severity: document.getElementById('inc-severity').value || 'low',
    description,
    action: document.getElementById('inc-action').value.trim(),
    witnesses: document.getElementById('inc-witnesses').value.trim(),
    photos: incidentPhotos.filter(Boolean),
    status: 'open',
    savedAt: new Date().toLocaleString(),
    lang: window.currentLang
  };
  // Save to Firebase + localStorage fallback
  await saveIncidentToCloud(incident);
  const confirmEl = document.getElementById('incidentConfirm');
  if (confirmEl) {
    confirmEl.textContent = t('incidentSaved');
    confirmEl.classList.remove('hidden');
    setTimeout(() => confirmEl.classList.add('hidden'), 3500);
  }
  clearIncident();
  renderPastIncidents();
}

function clearIncident() {
  ['inc-name','inc-badge','inc-dept','inc-location','inc-description','inc-action','inc-witnesses'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  document.getElementById('inc-type').value = '';
  document.getElementById('inc-severity').value = '';
  document.querySelectorAll('.sev-btn').forEach(b => b.classList.remove('selected'));
  document.getElementById('photoPreviewRow').innerHTML = '';
  const pi1 = document.getElementById('photoCamera');
  const pi2 = document.getElementById('photoGallery');
  if (pi1) pi1.value = '';
  if (pi2) pi2.value = '';
  incidentPhotos = [];
  setIncidentDateTime();
}

function renderPastIncidents() {
  const saved = JSON.parse(localStorage.getItem('mineguard_incidents') || '[]');
  const container = document.getElementById('pastIncidents');
  if (!container) return;
  if (!saved.length) { container.innerHTML = ''; return; }
  const typeMap = {
    near_miss: t('nearMiss'), hazard: t('hazardObs'), injury: t('injury'),
    property: t('property'), environmental: t('environmental'),
    fire: t('fire'), security: t('security')
  };
  container.innerHTML = `
    <h3 style="font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:var(--text-secondary);letter-spacing:2px;text-transform:uppercase;margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid var(--border);">${t('myReports')}</h3>
    ${saved.slice(0,10).map(inc => `
      <div class="saved-jsa-card">
        <div class="saved-jsa-title">${typeMap[inc.type] || inc.type}</div>
        <div class="saved-jsa-meta">📍 ${inc.location} · 🔴 ${(inc.severity||'low').toUpperCase()} · 🕒 ${inc.savedAt}</div>
        <div style="font-size:12px;color:var(--text-muted);margin-top:4px;">${inc.description.substring(0,80)}${inc.description.length>80?'...':''}</div>
        ${inc.photos && inc.photos.length ? `<div style="margin-top:6px;font-size:11px;color:var(--accent-green);">📷 ${inc.photos.length} ${t('photoAttached')}</div>` : ''}
      </div>
    `).join('')}
  `;
}

// Hook into initApp
const _origInit = initApp;
window.initApp = function() {
  _origInit();
  setIncidentDateTime();
  renderPastIncidents();
};
