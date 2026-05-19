const CACHE = 'skylink-v2';
const ASSETS = [
  '/skylink-mobile-app/',
  '/skylink-mobile-app/index.html',
  '/skylink-mobile-app/styles.css',
  '/skylink-mobile-app/script.js',
  '/skylink-mobile-app/logo-192.png',
  '/skylink-mobile-app/logo-512.png',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
