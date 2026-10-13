const CACHE_NAME = 'skinroutine-v2';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './Icon App.png',
  './Loading Animation.gif'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((ks) =>
      Promise.all(
        ks.map((k) => {
          if (k !== CACHE_NAME) {
            return caches.delete(k);
          }
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const r = e.request;
  if (!r || r.method !== 'GET') return;

  e.respondWith(
    (async () => {
      const c = await caches.open(CACHE_NAME);
      try {
        const fresh = await fetch(r);
        if (fresh && fresh.status === 200 && r.url.startsWith(self.location.origin)) {
          c.put(r, fresh.clone());
        }
        return fresh;
      } catch (err) {
        const cached = await c.match(r);
        return cached || Response.error();
      }
    })()
  );
});
