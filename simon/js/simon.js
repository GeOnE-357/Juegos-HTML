var ini=document.getElementsByTagName("input")[0];
ini.onclick=inicio;//Agrega la funcion iniciar al boton de inicio.
function inicio()
	{
		var a=document.getElementsByTagName("article");
		var bot=[]; //Vector de los botones vacio.
		var sec=[]; //Vector de la secuencia generada por el programa.
		var sec2=[]; //Vector donde se copia la secuencia, para que el usuario valla eliminando los elementos y se de por terminada dicha secuencia y pueda agregar otro elemento a la secuencia "sec".
		var puntos=0; //Puntaje del usuario.
		var temp=0; //Variable para el control del vector sec2[].
		var tiempo;
		ban=0;
		for(i=0; i<a.length;i++)
			{
				bot.push(a[i]);//Agregamos los botones al vector.
				a[i].onclick=marcar;//Agrega el evento on click a los articulos.
			}
		menu(); //Dispara la funcion menu().
		setTimeout(cargar,1000); //Dispara la funcion cargar despues de un segundo.

		function cargar()
			{
				var item = bot[Math.floor(Math.random()*bot.length)];//Elemento conseguido al azar del vector bot.
				sec.push(item); //Agregamos el boton elegido al azar en la secuencia.	
				copia(); //Dispara la funcion copia
			}

		function copia()
			{
				for(i=temp; i<sec.length;i++)
					{
						if(sec[i]!=sec2[i])
							{
								sec2.push(sec[i]);//Se navega el Vector sec y si su valor es diferente al de la secuencia generada por el programa.												
								colorSec(i); //Dispara la funcion para que encienda el color del boton.
								temp=i; //se guarda el valor de i en la variable temp, asi, se saltea si los elementos en dicha posicion son iguales en ambos vectores.
								break; //Sale de este ciclo.
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
						sec[i].style.backgroundColor="rgba(255, 0, 0, 1)"; //Cambia el color del boton.
						sonido("audio/Bot1.mp3"); //Reproduce el audio definido entre parentesis.
					}
				if(sec[i].id=="bot2")
					{
						sec[i].style.backgroundColor="rgba(0, 0, 255, 1)";		
						sonido("audio/Bot2.mp3");
					}
				if(sec[i].id=="bot3")
					{
						sec[i].style.backgroundColor="rgba(255, 255, 0, 1)";
						sonido("audio/Bot3.mp3");
					}
				if(sec[i].id=="bot4")
					{
						sec[i].style.backgroundColor="rgba(0, 255, 0, 1)";	
						sonido("audio/Bot4.mp3");
					}
				tiempoColor=setTimeout(apagarSec,500,i); //Dispara la funcion apagarSec despues de medio segundo.
			}

		function apagarSec(i)
			{
				sec[i].style.backgroundColor=""; //Cambia el color del boton a nada, y este toma por consecuencia el definido en el css.
				clearTimeout(tiempoColor); //Sale del bucle de tiempo, sino, seguiria sucediendo.
				tiempoSec=setTimeout(copia,200); //Dispara la funcion copia despes de 1/5 de segundo.
			}

		function marcar(event)
			{
				var acc=window.event || event; //Se guarda el evento o el evento de la ventana.
				var pos = acc.target || acc.srcElement; // Se guarda el objetivo del evento, o la el elemento fuente del evento.
				if(pos.id=="bot1")
					{
						sonido("audio/Bot1.mp3");
						pos.style.backgroundColor="rgba(255, 0, 0, 1)";
					}
				if(pos.id=="bot2")
					{
						sonido("audio/Bot2.mp3");
						pos.style.backgroundColor="rgba(0, 0, 255, 1)";
					}
				if(pos.id=="bot3")
					{
						sonido("audio/Bot3.mp3");
						pos.style.backgroundColor="rgba(255, 255, 0, 1)";
					}
				if(pos.id=="bot4")
					{
						sonido("audio/Bot4.mp3");
						pos.style.backgroundColor="rgba(0, 255, 0, 1)";
					}
				apagarColor=setTimeout(apagarMarc,500,pos); //Dispara la funcion apagarMarc despues de medio segundo.
				ganar(pos); //Dispara la funcion ganar.
			}

		function apagarMarc(pos)
			{
				botPos=pos
				botPos.style.backgroundColor="";
				clearTimeout(apagarColor);
			}

		function ganar(p)
			{
				if (sec2[0]==p)
					{
						sec2.shift(); //Elimina el primer elemento del vector.
						clearTimeout(tiempo);//Anula el tiempo de de la funcion setTimeout.
						controlGanar();//Funcion para ver si la secuencia fue terminada o se debe terminar.
					}
				else
					{
						clearTimeout(tiempo);//Anula el tiempo de de la funcion setTimeout.
						perder(); //Dispara la funcion perder.
					}
			}

		function controlGanar()
			{
				if(sec2.length==0)
					{
						puntos=puntos+1; //Aumenta el conteo de puntos del usuario.
						temp=0; //La variable temp, vuelve a 0 para que el control del verctor sec2.
						tiempoCargar=setTimeout(cargar,1000); //Dispara la funcion cargar despues de 1 segundo.
					}
				else
					{
						tiempo=setTimeout(perder, 3000);//Re-inicia la cuenta del tiempo y si termina, se dispara la funcion perder.
					}
			}

		function perder()
			{
				sonido("audio/Perder.mp3")
				ban=1; //Cambia el valor de vandera para cambiar el mensaje de menu.
				menu(); //Dispara la funcion menu.
				for(i=0;i<4;i++)
					{
						if(bot[i].style.backgroundColor!="")
							{
								apagarMarc(bot[i]); //Apaga los botones que quedaron encendidos. 
							}
					}
				if(tiempo){clearTimeout(tiempo);}; //Cancela las acciones con cuenta regresiva.
				if(sec.length>1){clearTimeout(tiempoColor);};
				if(sec.length>1){clearTimeout(tiempoSec);};
				if(sec.length>1){clearTimeout(tiempoCargar);};
			}

		function menu()
			{
				var cont=document.getElementsByClassName("contenedor")[0];
				var h2=document.getElementsByTagName("h2")[0];
				if (ban==0) 	 	
					{
						cont.style.display="none"; //Cambia el estilo del contenedor a invisible.
					}
				if (ban==1)
					{
						cont.style.display="grid"; //Cambia el estilo del contenedor a visible.
						h2.innerHTML="Tu puntaje: "+puntos; //Muestra el puntaje en el titulo del contenedor.
						ini.value="Reiniciar"; //Asigna al boton una nueva palabra dentro.
					}
			}
		function sonido(url)
			{
				var sonido = new Audio(); //Crea un nuevo objeto audio.
				sonido.src=url; //Le define la url enviada, para poder definir que audio es el que se reproduce.
				sonido.play(); //Se reproduce dicho sonido.
			}
	}