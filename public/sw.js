// Auto-versioning: This timestamp updates when you deploy/build
// Each deployment gets a unique cache version, forcing PWA updates
const CACHE_VERSION = 'v' + Date.now();
const CACHE_NAME = `a063-cache-${CACHE_VERSION}`;
const RUNTIME_CACHE = `a063-runtime-${CACHE_VERSION}`;

const PRECACHE_ASSETS = [
  '/',
  '/blog',
  '/og-image.png',
  '/offline.html',
  '/dino-game.js',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) =>
        Promise.all(
          keys.map((key) => {
            // Delete old caches that don't match current version
            if (key !== CACHE_NAME && key !== RUNTIME_CACHE) {
              console.log('[SW] Deleting old cache:', key);
              return caches.delete(key);
            }
          })
        )
      )
      .then(() => {
        console.log('[SW] Claiming clients for version:', CACHE_VERSION);
        return self.clients.claim();
      })
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (url.origin !== location.origin) return;

  // Always fetch fresh HTML
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(() => caches.match('/offline.html'))
    );
    return;
  }

  // Cache static assets
  if (
    request.destination === 'script' ||
    request.destination === 'style' ||
    request.destination === 'image' ||
    request.destination === 'font'
  ) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;

        return fetch(request).then((response) => {
          if (response.status === 200) {
            const clone = response.clone();
            caches.open(RUNTIME_CACHE).then((cache) => {
              cache.put(request, clone);
            });
          }
          return response;
        });
      })
    );
  }
});