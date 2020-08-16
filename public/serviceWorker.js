const CACHE_NAME = 'weatherapp-cache';
const urlsToCache = ['index.html', 'offline.html', '/country'];

const self = this;

// ===== 3 steps to offline with serviceWorker =====

// 1) install the serviceWorker
self.addEventListener('install', async (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then( cache => {
                console.log("the cache is", cache);

                return cache.addAll(urlsToCache);
            })
    )
});

// 2) listen for requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then( () => {
                return fetch(event.request)
                    .catch( () => caches.match('offline.html')) // in case is offline
            })
    )
});

// 3) activate the serviceWorker
self.addEventListener('activate', (event) => {
    const cacheWhiteList = [];
    cacheWhiteList.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then( cacheNames => {
            return Promise.all(
                cacheNames.map( cacheName => {
                    if(!cacheWhiteList.includes(cacheName)){
                        return caches.delete(cacheName);
                    }
                })
            )
        })
    )
});