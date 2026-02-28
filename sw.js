const cacheName = 'amz-picks-v1';
const assets = [
  './',
  './index.html',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
];

// Kurulum ve Cache'leme
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// Veri Зekme Stratejisi
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});