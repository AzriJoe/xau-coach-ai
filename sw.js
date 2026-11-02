const CACHE='xau-coach-v13';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil((async()=>{const names=await caches.keys();await Promise.all(names.filter(n=>n.startsWith('xau-coach-')&&n!==CACHE).map(n=>caches.delete(n)));await self.clients.claim()})())});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;e.respondWith((async()=>{const cache=await caches.open(CACHE);return await cache.match(e.request)||await fetch(e.request)})())});
