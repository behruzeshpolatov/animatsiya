const staticColorPicker="DevoloperUz";
const assets = [
    "/",
    "/index.html",
    "/js/script.js",
    "/css/style.css"

]
self.addEventListener("install",installEvent=>{
    installEvent.waitUntil(
        caches.open(staticColorPicker).then(cache=>{
            caches.addAll(assets)
        })
    )
})

self.addEventListener("fetch",fetchEvent=>{
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res=>{
            return res||fetch(fetchEvent.event);
            
        })
    )
})
