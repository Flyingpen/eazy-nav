/* Eazy Nav Service Worker
 * 策略：
 *  - 同源静态资源：stale-while-revalidate（先缓存后更新）
 *  - 跨域 CDN 资源：network-first（失败时回退缓存）
 *  - 书签数据 bookmarks.html：network-first，保证内容及时更新
 */
const CACHE_NAME = 'eazy-nav-v2';

const PRECACHE_URLS = [
  './',
  './index.html',
  './bookmarks.html',
  './config.json',
  './manifest.json',
  './icons/icon.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  const isSameOrigin = url.origin === self.location.origin;
  const isBookmarks = isSameOrigin && url.pathname.endsWith('/bookmarks.html');

  if (isSameOrigin && !isBookmarks) {
    // 同源静态资源：先返回缓存，后台更新
    event.respondWith(
      caches.match(request).then((cached) => {
        const network = fetch(request)
          .then((response) => {
            if (response && response.ok) {
              const clone = response.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
            }
            return response;
          })
          .catch(() => cached);
        return cached || network;
      })
    );
  } else {
    // 跨域 CDN / 书签数据：网络优先，失败回退缓存
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => caches.match(request))
    );
  }
});
