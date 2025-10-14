self.addEventListener('install', () => {
  console.log('Service Worker instalado (sem cache)');
});

self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});