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
				
			  $('#Tabla').append('<div align="justify"><div style="float:left; width:50%"><h4>Id Pelicula:'+DatosJSON.peli[i].Id+'</h4><div id="RIdPelicula"></div><h4>Nombre:'+DatosJSON.peli[i].Nombre+'</h4><div id="RNombre"></div><h4>Director:'+DatosJSON.peli[i].Director+'</h4><div id="RDirector"></div><h4>Genero:'+DatosJSON.peli[i].Genero+'</h4><div id="RGenero"></div><h4>Duracion:'+DatosJSON.peli[i].Duracion+'</h4><div id="RDuracion"></div></div><div style="float:right; width:50%"><img src="http://192.168.1.177/catalogopeliculas/recursos/fotos/'+DatosJSON.peli[i].Id+'.jpg" class="FotosP"></div></div><strong><hr></strong>');	
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