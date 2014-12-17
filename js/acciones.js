function BuscarPorNombre(Quien)
{
	
	datos = "Nombre="+Quien;
	$.ajax({
		type: "POST",
		url: "http://192.168.1.177/catalogopeliculas/consultanombre.php",
		data: datos
	}).done(function(msg){
		alert(msg);
		var DatosJSON=JSON.parse(msg);
		if (DatosJSON.datos==1)
		{
			
			$('#Resultados').empty();
			for (var i=0; i<DatosJSON.peli.length;i++)
			{
				
			  $('#Resultados').append('<div style="float:left; width:50%"><h4>Nombre:'+DatosJSON.peli[i].Nombre+'</h4><div id="RNombre"></div><h4>Director:'+DatosJSON.peli[i].Director+'</h4><div id="RDirector"></div><h4>Genero:'+DatosJSON.peli[i].Genero+'</h4><div id="RGenero"></div></div><div style="float:right; width:50%"><img src="http://192.168.1.177/catalogopeliculas/recursos/fotos/'+DatosJSON.peli[i].Id+'.jpg" class="FotosP"></div>');	
			}
			$('.FotosP').width($('#Resultados').width()*.2);
			$('#Nom').trigger('pagecreate');
		}
if (DatosJSON.datos==0)
		{
			alert('No hay Peliculas que Mostrar con ese Nombre');
		}		
		
		
	});
}



function Listado(Quien)
{
	datos = "Nombre="+Quien;
	$.ajax({
		type: "POST",
		url: "http://192.168.1.177/catalogopeliculas/consultalistado.php",
		data: datos
	}).done(function(msg){
		alert(msg);
		var DatosJSON=JSON.parse(msg);
		if (DatosJSON.datos==1)
		{
			
			$('#Tabla').empty();
			for (var i=0; i<DatosJSON.peli.length;i++)
			{
				
			  $('#Tabla').append('<div align="justify" style="clear:both"><div style="float:left; width:50%"><h4>Id Pelicula:</h4><div id="RIdPelicula">'+DatosJSON.peli[i].Id+'</div><h4>Nombre:</h4><div id="RNombre">'+DatosJSON.peli[i].Nombre+'</div><h4>Director:</h4><div id="RDirector">'+DatosJSON.peli[i].Director+'</div><h4>Genero:</h4><div id="RGenero">'+DatosJSON.peli[i].Genero+'</div><h4>Duracion:</h4><div id="RDuracion">'+DatosJSON.peli[i].Duracion+'minutos</div></div><div style="float:left; width:50%"><img style="width:100%" src="http://192.168.1.177/catalogopeliculas/recursos/fotos/'+DatosJSON.peli[i].Id+'.jpg" class="FotosP"></div><strong><hr></strong></div>');	
			}
			$('.FotosP').width($('#Tabla').width()*.2);
			$('#Nom').trigger('pagecreate');
		}
if (DatosJSON.datos==0)
		{
			alert('No hay Peliculas que Mostrar');
		}		
		
		
	});
}



$(document).ready(function(e) {
	document.addEventListener("deviceready",function(){
		
  $('#BNombre').tap(function(){
	  
    BuscarPorNombre($('#buscar').val());
  });
  
  $('#ListadoP').tap(function(){
	 
    Listado();
	$.mobile.changePage('#Lis');
  });
  
  
 },false); //deviceready
 
}); //document ready 