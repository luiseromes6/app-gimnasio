self.addEventListener('install', function(event) {
  console.log('Service Worker instalado');
});

self.addEventListener('fetch', function(event) {
  // Esto permite usar la PWA aunque haya problemas de conexión
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
