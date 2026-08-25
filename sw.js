const CACHE="resioftalmo-0.9.1";
const ASSETS=["./","./index.html","./crucigrama.html","./preguntas.html","./que-ves.html","./capas.html","./oct.html","./tratamiento.html","./microcasos.html","./reto.html","./css/resioftalmo.css","./js/common.js","./manifest.json"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
