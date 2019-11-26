/*Primero hay que verificar que el navegador soporta "service worker"*/
if('serviceWorker' in navigator)
	{
		/*Empezamo con una promesa de registro.*/
		navigator.serviceWorker.register('/sw.js')
		.then((reg) => console.log("Service Worker Registrado!", reg))/*Si la promesa es exitosa, se para el parametro "reg" y se imprime el mensaje por consola.*/
		.catch((err) => console.log("Service Worker No Registrado!", err));/*Sino, se para el parametro "err" y se imprime el mensaje por consola.*/
	}