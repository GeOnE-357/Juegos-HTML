var ini=document.getElementsByTagName("input")[0];
ini.onclick=inicio;
function inicio()
	{
		var a=document.getElementsByTagName("article");
		var bot=[]; //Vector de los botones vacio.
		var sec=[]; //Vector de la secuencia generada por el programa.
		var sec2=[];
		var puntos=0;
		var temp=0;
		var tiempo;
		ban=0;
		for(i=0; i<a.length;i++)
			{
				bot.push(a[i]);//Agregamos los botones al vector.
				a[i].onclick=marcar;//Agrega el evento on click a los articulos.
			}
		menu();
		setTimeout(cargar,1000);

		function cargar()
			{
				var item = bot[Math.floor(Math.random()*bot.length)];//Elemento conseguido al azar del vector bot.
				sec.push(item); //Agregamos el boton elegido al azar en la secuencia.	
				copia();
			}

		function copia()
			{
				for(i=temp; i<sec.length;i++)
					{
						if(sec[i]!=sec2[i])
							{
								sec2.push(sec[i]);//Vector de la secuencia generada por el programa.												
								colorSec(i);
								temp=i;
								break;
							}				
					}	 		
				if(i>=sec.length)
					{
						tiempo=setTimeout(perder, 3000); //Inicia la cuenta del tiempo y si termina, se dispara la funcion perder.			
					}
			}

		function colorSec(pos)
			{
				i=pos;
				if(sec[i].id=="bot1")
					{
						sec[i].style.backgroundColor="rgba(255, 0, 0, 1)";
						sonido("audio/Bot1.mp3");
						tiempoColor=setTimeout(apagarSec,500,i);
					}
				if(sec[i].id=="bot2")
					{
						sec[i].style.backgroundColor="rgba(0, 0, 255, 1)";		
						sonido("audio/Bot2.mp3");
						tiempoColor=setTimeout(apagarSec,500,i);
					}
				if(sec[i].id=="bot3")
					{
						sec[i].style.backgroundColor="rgba(255, 255, 0, 1)";
						sonido("audio/Bot3.mp3");
						tiempoColor=setTimeout(apagarSec,500,i);
						
					}
				if(sec[i].id=="bot4")
					{
						sec[i].style.backgroundColor="rgba(0, 255, 0, 1)";	
						sonido("audio/Bot4.mp3");
						tiempoColor=setTimeout(apagarSec,500,i);
						
					}
			}

		function apagarSec(i)
			{
				if(sec[i].id=="bot1")
					{
						sec[i].style.backgroundColor="";
						clearTimeout(tiempoColor);
						setTimeout(copia,200);
					}
				if(sec[i].id=="bot2")
					{
						sec[i].style.backgroundColor="";		
						clearTimeout(tiempoColor);
						setTimeout(copia,200);
					}
				if(sec[i].id=="bot3")
					{
						sec[i].style.backgroundColor="";
						clearTimeout(tiempoColor);
						setTimeout(copia,200);
					}
				if(sec[i].id=="bot4")
					{
						sec[i].style.backgroundColor="";	
						clearTimeout(tiempoColor);
						setTimeout(copia,200);
					}
			}

		function marcar(event)
			{
				var acc=window.event || event;
				var pos = acc.target || acc.srcElement;
				if(pos.id=="bot1")
					{
						pos.style.backgroundColor="rgba(255, 0, 0, 1)";
						apagarColor=setTimeout(apagarMarc,500,pos);
						sonido("audio/Bot1.mp3");
					}
				if(pos.id=="bot2")
					{
						pos.style.backgroundColor="rgba(0, 0, 255, 1)";
						apagarColor=setTimeout(apagarMarc,500,pos);
						sonido("audio/Bot2.mp3");
					}
				if(pos.id=="bot3")
					{
						pos.style.backgroundColor="rgba(255, 255, 0, 1)";
						apagarColor=setTimeout(apagarMarc,500,pos);
						sonido("audio/Bot3.mp3");
					}
				if(pos.id=="bot4")
					{
						pos.style.backgroundColor="rgba(0, 255, 0, 1)";
						apagarColor=setTimeout(apagarMarc,500,pos);
						sonido("audio/Bot4.mp3");
					}
				ganar(pos);		
			}

		function apagarMarc(pos)
			{
				botPos=pos
				if(botPos.id=="bot1")
					{
						botPos.style.backgroundColor="";
						clearTimeout(apagarColor);
					}
				if(botPos.id=="bot2")
					{
						botPos.style.backgroundColor="";		
						clearTimeout(apagarColor);
					}
				if(botPos.id=="bot3")
					{
						botPos.style.backgroundColor="";
						clearTimeout(apagarColor);
					}
				if(botPos.id=="bot4")
					{
						botPos.style.backgroundColor="";	
						clearTimeout(apagarColor);
					}
			}

		function ganar(p)
			{
				if (sec2[0]==p)
					{
						sec2.shift();
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
						temp=0;
						setTimeout(cargar,1000);
					}
				else
					{
						tiempo=setTimeout(perder, 3000);//Re-inicia la cuenta del tiempo y si termina, se dispara la funcion perder.
					}
			}

		function perder()
			{
				sonido("audio/Perder.mp3")
				ban=1;
				menu();
			}

		function menu()
			{
				var cont=document.getElementsByClassName("contenedor")[0];
				var h2=document.getElementsByTagName("h2")[0];
				if (ban==0) 	 	
					{
						cont.style.display="none";
					}
				if (ban==1)
					{
						cont.style.display="block";
						h2.innerHTML="Tu puntaje: "+puntos;
						ini.value="Reiniciar";
					}
			}
		function sonido(url)
			{
				var sonido = new Audio();
				sonido.src=url;
				sonido.play();
			}
	}