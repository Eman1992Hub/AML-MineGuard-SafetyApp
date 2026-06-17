// ============================================
// MINEGUARD SERVICE WORKER v7
// Uses relative paths — works on ANY hosting
// including GitHub Pages subfolders
// ============================================

const CACHE_NAME = 'mineguard-v8';

// Use relative paths — these work regardless
// of what subfolder the app is deployed in
const ASSETS_TO_CACHE = [
  './index.html',
  './admin.html',
  './style.css',
  './app.js',
  './data.js',
  './lang.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/aml-logo.jpg',
  './firebase.js',
];

// ---- INSTALL ----
self.addEventListener('install', event => {
  console.log('[MineGuard SW v8] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Add files one by one so one failure doesn't break everything
      return Promise.allSettled(
        ASSETS_TO_CACHE.map(url =>
          cache.add(url).catch(err => console.warn('[SW] Could not cache:', url, err))
        )
      );
    }).then(() => {
      console.log('[MineGuard SW v8] All assets cached');
    })
  );
  // Take over immediately without waiting
  self.skipWaiting();
});

// ---- ACTIVATE ----
self.addEventListener('activate', event => {
  console.log('[MineGuard SW v8] Activating...');
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => {
            console.log('[MineGuard SW v8] Deleting old cache:', name);
            return caches.delete(name);
          })
      )
    )
  );
  self.clients.claim();
});

// ---- FETCH ----
self.addEventListener('fetch', event => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  // Skip chrome-extension and non-http requests
  if (!event.request.url.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      // Return cached version if available
      if (cachedResponse) {
        return cachedResponse;
      }

      // Otherwise fetch from network
      return fetch(event.request).then(networkResponse => {
        // Cache valid responses for future use
        if (networkResponse && networkResponse.status === 200 && networkResponse.type !== 'opaque') {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Network failed — serve fallback for page navigations
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
        // For other requests just fail gracefully
        return new Response('Offline', { status: 503 });
      });
    })
  );
});
