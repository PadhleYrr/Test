// ═══════════════════════════════════════════════════════════
//  MP GK PORTAL — SERVICE WORKER (v3)
//  Offline-first caching for all core assets
// ═══════════════════════════════════════════════════════════

const CACHE_NAME = 'mpgk-v3';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/auth.js',
  '/updater.js',
  '/data_q.js',
  '/data_notes.js',
  '/data_pyq.js',
  '/data_syllabus.js',
  '/smart_study.js',
  '/maps.html',
  '/icon.png',
  '/upi-qr.png',
  '/version.json',
  '/pyq_2021_paper1.js',
  '/pyq_2021_paper2.js',
  '/pyq_2022_paper1.js',
  '/pyq_2022_paper2.js',
  '/pyq_2023_paper1.js',
  '/pyq_2023_paper2.js',
  '/pyq_2024_paper1.js',
  '/pyq_2024_paper2.js',
];

// ── INSTALL ─────────────────────────────────────────────────
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return Promise.allSettled(
        STATIC_ASSETS.map(url =>
          cache.add(url).catch(err => console.warn('SW: failed to cache', url, err))
        )
      );
    })
  );
});

// ── ACTIVATE ────────────────────────────────────────────────
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// ── FETCH ───────────────────────────────────────────────────
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Skip non-GET, chrome-extension, and Firebase requests
  if (e.request.method !== 'GET') return;
  if (url.protocol === 'chrome-extension:') return;
  if (url.hostname.includes('firebaseio.com') ||
      url.hostname.includes('googleapis.com') ||
      url.hostname.includes('razorpay.com') ||
      url.hostname.includes('checkout.razorpay')) return;

  // CDN assets (Leaflet, fonts) — cache first, network fallback
  if (url.hostname.includes('cdnjs.cloudflare.com') ||
      url.hostname.includes('fonts.googleapis.com') ||
      url.hostname.includes('fonts.gstatic.com') ||
      url.hostname.includes('gstatic.com')) {
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached;
        return fetch(e.request).then(resp => {
          const clone = resp.clone();
          caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
          return resp;
        }).catch(() => cached);
      })
    );
    return;
  }

  // App shell + local assets — cache first, network update background
  e.respondWith(
    caches.match(e.request).then(cached => {
      const networkFetch = fetch(e.request).then(resp => {
        if (resp.ok) {
          const clone = resp.clone();
          caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
        }
        return resp;
      }).catch(() => null);

      return cached || networkFetch;
    })
  );
});

// ── BACKGROUND SYNC ─────────────────────────────────────────
self.addEventListener('sync', e => {
  if (e.tag === 'sync-progress') {
    // Future: sync offline progress to Firestore when back online
    console.log('SW: Background sync triggered');
  }
});
