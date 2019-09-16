function principal()
	{
		var ban=0;
		var sim;
		var emp=0;
		var art=document.getElementsByTagName("article");
		var input=document.getElementsByTagName("input")[0];
		input.onclick=menu;
		for(i=0; i<art.length; i++)
			{
				art[i].firstChild.onclick=marcar;
			}

		function marcar(e)
			{
				/*Funcion que pone la marca de "O" o "X".*/
				var a=window.event || e;
				var pos = a.target || a.srcElement;
				var p=document.getElementById(pos.id);
				if(p.innerHTML=="")
					{
					if(ban==0)
						{

							p.innerHTML="X"
							p.className="X";
							ban=1;
							emp++;
							ganar();	
						}
					else
						{
							p.innerHTML="O"
							p.className="O";
							ban=0;
							emp++;
							ganar();	
						}
					}
			}

		function ganar()
			{
				var fila=document.getElementsByTagName("p");
				/*Gana la primer linea horizontal.*/
				if(fila[0].innerHTML==fila[1].innerHTML && fila[1].innerHTML==fila[2].innerHTML)
					{
						/*Valida que la victoria no sea por campos vacios.*/
						if(fila[0].innerHTML!="" && fila[1].innerHTML!="" && fila[2].innerHTML!="")
							{
								fila[0].parentNode.style.backgroundColor="rgba(255,255,255,0.75)";
								fila[1].parentNode.style.backgroundColor="rgba(255,255,255,0.75)";
								fila[2].parentNode.style.backgroundColor="rgba(255,255,255,0.75)";
								ban=3;
								sim=fila[0];
								menu();		
							}
					}
				else
					{
						if(emp==9)
							{
								ban=4;
								menu();
							}
					}
				/*Gana la segunda linea horizontal.*/
				if(fila[3].innerHTML==fila[4].innerHTML && fila[4].innerHTML==fila[5].innerHTML)
					{
						/*Valida que la victoria no sea por campos vacios.*/
						if(fila[3].innerHTML!="" && fila[4].innerHTML!="" && fila[5].innerHTML!="")
							{
								fila[3].parentNode.style.backgroundColor="rgba(255,255,255,0.75)";
								fila[4].parentNode.style.backgroundColor="rgba(255,255,255,0.75)";
								fila[5].parentNode.style.backgroundColor="rgba(255,255,255,0.75)";
								ban=3;
								sim=fila[3];
								menu();		
							}
					}
				else
					{
						if(emp==9)
							{
								ban=4;
								menu();
							}
					}
				/*Gana la tercer linea horizontal.*/
				if(fila[6].innerHTML==fila[7].innerHTML && fila[7].innerHTML==fila[8].innerHTML)
					{
						/*Valida que la victoria no sea por campos vacios.*/
						if(fila[6].innerHTML!="" && fila[7].innerHTML!="" && fila[8].innerHTML!="")
							{
								fila[6].parentNode.style.backgroundColor="rgba(255,255,255,0.75)";
								fila[7].parentNode.style.backgroundColor="rgba(255,255,255,0.75)";
								fila[8].parentNode.style.backgroundColor="rgba(255,255,255,0.75)";
								ban=3;
								sim=fila[6];
								menu();		
							}
					}
				else
					{
						if(emp==9)
							{
								ban=4;
								menu();
							}
					}
				/*Gana la primer linea vertical.*/
				if(fila[0].innerHTML==fila[3].innerHTML && fila[3].innerHTML==fila[6].innerHTML)
					{
						/*Valida que la victoria no sea por campos vacios.*/
						if(fila[0].innerHTML!="" && fila[3].innerHTML!="" && fila[6].innerHTML!="")
							{
								fila[0].parentNode.style.backgroundColor="rgba(255,255,255,0.75)";
								fila[3].parentNode.style.backgroundColor="rgba(255,255,255,0.75)";
								fila[6].parentNode.style.backgroundColor="rgba(255,255,255,0.75)";
								ban=3;
								sim=fila[0];
								menu();		
							}
					}
				else
					{
						if(emp==9)
							{
								ban=4;
								menu();
							}
					}
				/*Gana la segunda linea vertical.*/
				if(fila[1].innerHTML==fila[4].innerHTML && fila[4].innerHTML==fila[7].innerHTML)
					{
						/*Valida que la victoria no sea por campos vacios.*/
						if(fila[1].innerHTML!="" && fila[4].innerHTML!="" && fila[7].innerHTML!="")
							{
								fila[1].parentNode.style.backgroundColor="rgba(255,255,255,0.75)";
								fila[4].parentNode.style.backgroundColor="rgba(255,255,255,0.75)";
								fila[7].parentNode.style.backgroundColor="rgba(255,255,255,0.75)";
								ban=3;
								sim=fila[1];
								menu();		
							}
					}
				else
					{
						if(emp==9)
							{
								ban=4;
								menu();
							}
					}
				/*Gana la tercer linea vertical.*/
				if(fila[2].innerHTML==fila[5].innerHTML && fila[5].innerHTML==fila[8].innerHTML)
					{
						/*Valida que la victoria no sea por campos vacios.*/
						if(fila[2].innerHTML!="" && fila[5].innerHTML!="" && fila[8].innerHTML!="")
							{
								fila[2].parentNode.style.backgroundColor="rgba(255,255,255,0.75)";
								fila[5].parentNode.style.backgroundColor="rgba(255,255,255,0.75)";
								fila[8].parentNode.style.backgroundColor="rgba(255,255,255,0.75)";
								ban=3;
								sim=fila[2];
								menu();		
							}
					}
				else
					{
						if(emp==9)
							{
								ban=4;
								menu();
							}
					}
				/*Gana la primer linea diagonal.*/
				if(fila[0].innerHTML==fila[4].innerHTML && fila[4].innerHTML==fila[8].innerHTML)
					{
						/*Valida que la victoria no sea por campos vacios.*/
						if(fila[0].innerHTML!="" && fila[4].innerHTML!="" && fila[8].innerHTML!="")
							{
								fila[0].parentNode.style.backgroundColor="rgba(255,255,255,0.75)";
								fila[4].parentNode.style.backgroundColor="rgba(255,255,255,0.75)";
								fila[8].parentNode.style.backgroundColor="rgba(255,255,255,0.75)";
								ban=3;
								sim=fila[0];
								menu();		
							}
					}
				else
					{
						if(emp==9)
							{
								ban=4;
								menu();
							}
					}
				/*Gana la segunda linea diagonal.*/
				if(fila[2].innerHTML==fila[4].innerHTML && fila[4].innerHTML==fila[6].innerHTML)
					{
						/*Valida que la victoria no sea por campos vacios.*/
						if(fila[2].innerHTML!="" && fila[4].innerHTML!="" && fila[6].innerHTML!="")
							{
								fila[2].parentNode.style.backgroundColor="rgba(255,255,255,0.75)";
								fila[4].parentNode.style.backgroundColor="rgba(255,255,255,0.75)";
								fila[6].parentNode.style.backgroundColor="rgba(255,255,255,0.75)";
								ban=3;
								sim=fila[2];
								menu();		
							}
					}
				else
					{
						if(emp==9)
							{
								ban=4;
								menu();
							}
					}
			}

		function menu()
			{
				var cont=document.getElementsByClassName("contenedor")[0];
				var h2=document.getElementsByTagName("h2")[0];
				if (ban==0) 	 	
					{
						cont.style.display="none";
					}
				if (ban==3)
					{
						cont.style.display="grid";
						h2.innerHTML="Gano "+sim.innerHTML+"!"; 	
						ban=0;
						var input=document.getElementsByTagName("input")[0];
						input.onclick=limpiar;
					}
				if(ban==4)
					{
						cont.style.display="grid";
						h2.innerHTML="Empate!"; 	
						ban=0;
						emp=0;
						var input=document.getElementsByTagName("input")[0];
						input.onclick=limpiar;	
					}
			}

		function limpiar()
			{
				var fila=document.getElementsByTagName("p");
				for(i=0;i<fila.length;i++)
							{
								fila[i].innerHTML="";
								fila[i].className="";
								fila[i].parentNode.style.backgroundColor="";
							}
				var cont=document.getElementsByClassName("contenedor")[0];
				cont.style.display="none";
				principal();
			}
	}

window.addEventListener("load", principal, false);