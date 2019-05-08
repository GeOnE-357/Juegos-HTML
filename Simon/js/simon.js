var a=document.getElementsByTagName("article");
var bot=[] //Vector de los botones vacio.
var secuencia=[] //Vector de la secuencia generada por el programa.
var secuencia2=[] //Vector de la secuencia generada por el programa.
for(i=0; i<a.length;i++)
	{
		bot.push(a[i]);//Agregamos los botones al vector.
		a[i].onclick=marcar;//Agrega el evento on click a los articulos.		
	}



function secuencia()
	{
		var item = bot[Math.floor(Math.random()*bot.length)];//Elemento conseguido al azar del vector bot.
		secuencia.push(item); //Agregamos el boton elegido al azar en la secuencia.	
	}

tiempo=setTimeout(ganar, 3000);
function marcar(event)
	{
		var acc=window.event || event;
		var pos = acc.target || acc.srcElement;
		var p=document.getElementById(pos.id);
		ganar(p);		
	}

function ganar(p)
	{
		if (secuencia2[0]==p)
			{
				alert("Click correcto.");
				secuencia.pop(0);
				console.log(secuencia);
				clearTimeout(tiempo);
			}
		else
			{
				alert("Perdiste.");
				clearTimeout(tiempo);
			}
	}
//tiempo=setTimeout(function(){ alert("Hello"); }, 3000); //define un tiempo limite.
//clearTimeout(tiempo);//Anula el tiempo de de la funcion setTimeout.