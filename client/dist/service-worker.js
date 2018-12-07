const cacheName = 'pwa-timeshark-v1';
const staticAssets = [
  './',
  './index.html',
  './style.css',
  './timeshark512px.png'
];

self.addEventListener('install', async event => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets).then(() => self.skipWaiting()); 
});

self.addEventListener("activate",  async event => 
  event.waitUntil(self.clients.claim())
);

self.addEventListener('fetch', async event =>{
  const req = event.request;
  if (/.*(json)$/.test(req.url)) {
    event.respondWith(networkFirst(req));
  } else {
    event.respondWith(cacheFirst(req));
  }
});

async function cacheFirst(req) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(req);
  return cachedResponse || networkFirst(req);
};

async function networkFirst(req) {
  const cache = await caches.open(cacheName);
  try {
    const fresh = await fetch(req);
    cache.put(req, fresh.clone());
    return fresh;
  } catch (e) {
    const cachedResponse = await cache.match(req);
    return cachedResponse;
  }
};