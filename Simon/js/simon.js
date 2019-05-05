var a=document.getElementsByTagName("article");
var bot=[]
for(i=0; i<a.length;i++)
	{
		bot.push(a[i]);
	}
console.log(bot);
var item = bot[Math.floor(Math.random()*bot.length)];//Elemento conseguido al azar del vector bot.
var sec=[]
sec.push(item);
console.log(sec);
//sec.push(bot[0]); Agrega un elemento al vector.
tiempo=setTimeout(function(){ alert("Hello"); }, 3000); //define un tiempo limite.
//clearTimeout(tiempo);//Anula el tiempo de de la funcion setTimeout.