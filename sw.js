const nombreCache = "sitio-cache"
const elementos = ["/","/index","/js/accion.js", "/js/app.js", "/css/estilo.css"]

//Instalar el service worker.
self.addEventListener('install', evt =>
	{
		//console.log("Service Worker Registrado.");
		evt.waitUntil(
				caches.open(nombreCache).then((cache)=>{
					console.log("Guardando elementos predefinidos en el cache.");
					cache.addAll(elementos);
					})
				)
	});

//Activar el service worker.
self.addEventListener('activate', evt =>{ console.log("Service Worker Activado." );});

//Eventos Fetch (fetch request o pedido de busqueda).
self.addEventListener('fetch', evt =>{console.log("Evento fetch", evt);});