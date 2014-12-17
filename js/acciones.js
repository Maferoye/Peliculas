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
				
			  $('#Resultados').append('<div align="justify" style="clear:both"><div style="float:left; width:50%"><h4>Nombre:</h4><div id="RNombre">'+DatosJSON.peli[i].Nombre+'</div><h4>Director:</h4><div id="RDirector">'+DatosJSON.peli[i].Director+'</div><h4>Genero:</h4><div id="RGenero">'+DatosJSON.peli[i].Genero+'</div></div><div style="float:left; width:50%"><img src="http://192.168.1.177/catalogopeliculas/recursos/fotos/'+DatosJSON.peli[i].Id+'.jpg" class="FotosP"></div></div>');	
			}
			$('.FotosP').width($('#Resultados').width()*0.2);
			$('#Nom').trigger('pagecreate');
		}
if (DatosJSON.datos==0)
		{
			alert('No hay Peliculas que Mostrar con ese Nombre');
		}		
		
		
	});
}



function Listado()
{
	
	$.ajax({
		type: "POST",
		url: "http://192.168.1.177/catalogopeliculas/consultalistado.php",
		
	}).done(function(msg){
		alert(msg);
		var DatosJSON=JSON.parse(msg);
		if (DatosJSON.datos==1)
		{
			
			$('#Tabla').empty();
			for (var i=0; i<DatosJSON.peli.length;i++)
			{
				
			  $('#Tabla').append('<img src="http://192.168.1.177/catalogopeliculas/recursos/fotos/'+DatosJSON.peli[i].Id+'.jpg" class="FotosP">' + DatosJSON.peli[i].Id);	
			}
			$('.FotosP').width($('#Tabla').width()*0.2);
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