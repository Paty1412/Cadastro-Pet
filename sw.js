self.addEventListener('install', event => {
    console.log('[Service Worker] Instalado');
    event.waitUntil(
      caches.open('petshop-v1').then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/manifest.json',
          '/style.css',
          '/script.js',
          '/icons/icon-192.png',
          '/icons/icon-512.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(resposta => {
        return resposta || fetch(event.request);
      })
    );
  });
  