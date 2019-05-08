var a=document.getElementsByTagName("article");
var bot=[]; //Vector de los botones vacio.
var sec=[]; //Vector de la secuencia generada por el programa.
var sec2=[];
var puntos=0;
var tiempo;
for(i=0; i<a.length;i++)
	{
		bot.push(a[i]);//Agregamos los botones al vector.
		a[i].onclick=marcar;//Agrega el evento on click a los articulos.		
	}

function inicio()
	{
		var item = bot[Math.floor(Math.random()*bot.length)];//Elemento conseguido al azar del vector bot.
		sec.push(item); //Agregamos el boton elegido al azar en la secuencia.	
		copia();
	}

function copia()
	{
		for(i=0; i<sec.length;i++)
			{
				sec2.push(sec[i]);//Vector de la secuencia generada por el programa.					
			}
		for(i=0; i<sec.length;i++)
			{
				if(sec[i].id=="bot1")
					{
						console.log("Rojo");
						sec[i].style.backgroundColor="rgba(255, 0, 0, 1)"
						tiempoColor=setInterval(apagar,500,i);
					}
				if(sec[i].id=="bot2")
					{
						console.log("Azul");
						sec[i].style.backgroundColor="rgba(0, 0, 255, 1)";		
						tiempoColor=setInterval(apagar,500,i);
					}
				if(sec[i].id=="bot3")
					{
						console.log("Amarillo");
						sec[i].style.backgroundColor="rgba(255, 255, 0, 1)";
						tiempoColor=setInterval(apagar,500,i);
					}
				if(sec[i].id=="bot4")
					{
						console.log("Verder");
						sec[i].style.backgroundColor="rgba(0, 255, 0, 1)";	
						tiempoColor=setInterval(apagar,500,i);
					}
			}
		console.log(sec2); 		
		tiempo=setTimeout(perder, 3000); //Inicia la cuenta del tiempo y si termina, se dispara la funcion perder.
	}

function apagar(i)
	{
		if(sec[i].id=="bot1")
			{
				sec[i].style.backgroundColor="rgba(255, 0, 0, 0.4)";
				clearTimeout(tiempoColor);
			}
		if(sec[i].id=="bot2")
			{
				sec[i].style.backgroundColor="rgba(0, 0, 255, 0.4)";		
				clearTimeout(tiempoColor);
			}
		if(sec[i].id=="bot3")
			{
				sec[i].style.backgroundColor="rgba(255, 255, 0, 0.4)";
				clearTimeout(tiempoColor);
			}
		if(sec[i].id=="bot4")
			{
				sec[i].style.backgroundColor="rgba(0, 255, 0, 0.4)";	
				clearTimeout(tiempoColor);
			}
	}

function marcar(event)
	{
		var acc=window.event || event;
		var pos = acc.target || acc.srcElement;
		var p=document.getElementById(pos.id);
		ganar(p);		
	}

function ganar(p)
	{
		if (sec2[0]==p)
			{
				sec2.shift();
				console.log(sec2);
				clearTimeout(tiempo);//Anula el tiempo de de la funcion setTimeout.
				controlGanar();//Funcion para ver si la secuencia fue terminada o se debe terminar.
			}
		else
			{
				perder();
				clearTimeout(tiempo);//Anula el tiempo de de la funcion setTimeout.
			}
	}

function controlGanar()
	{
		if(sec2.length==0)
			{
				puntos=puntos+1;
				inicio();
			}
		else
			{
				tiempo=setTimeout(perder, 3000);//Re-inicia la cuenta del tiempo y si termina, se dispara la funcion perder.
			}
	}

function perder()
	{
		alert("Perdiste");
		console.log(puntos);
	}