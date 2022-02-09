const APP_PREFIX = 'FoodFest-'
const VERSION = 'version_01'
const CACHE_NAME = APP_PREFIX + VERSION
const FILES_TO_CACHE = [
  './index.html',
  './events.html',
  './tickets.html',
  './schedule.html',
  './css/style.css',
  './css/bootstrap.css',
  './css/tickets.css',
  './assets/js/app.bundle.js',
  './assets/js/events.bundle.js',
  './assets/js/tickets.bundle.js',
  './assets/js/schedule.bundle.js'
]

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('installing cache : ' + CACHE_NAME)
      return cache.addAll(FILES_TO_CACHE)
    })
  )
})
