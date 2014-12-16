function BuscarPorNombre(Quien)
{
	alert('funcion');
	datos="Nombre="+Quien;
	$.ajax({
		type: "POST",
		url: "http://192.168.1.177/catalogo%20peliculas/consultanombre.php",
		data: datos
	}).done(function(msg){
		alert(msg);
		var DatosJSON=JSON.parse(msg);
		if (DatosJSON.datos==1)
		{
			alert('datos');
			$('#Resultados').empty();
			for (var i=0; i<DatosJSON.pelis.length;i++)
			{
			  $('#Resultados').append('<div style="float:left; width:50%"><h4>Nombre:'+DatosJSON.pelis[i].Nombre+'</h4><div id="RNombre"></div><h4>Director:'+DatosJSON.pelis[i].Director+'</h4><div id="RDirector"></div><h4>Genero:'+DatosJSON.pelis[i].Genero+'</h4><div id="RGenero"></div></div><div style="float:right; width:50%"><img src="http://192.168.1.177/catalogo peliculas/recursos/fotos/'+DatosJSON.pelis[i].Id+'.jpg"></div>');	
			}
		}
if (DatosJSON.datos==0)
		{
			alert('No hay Peliculas que Mostrar con ese Nombre');
		}		
		
		$('#Nom').trigger('pagecreate');
	});
}



$(document).ready(function(e) {
	document.addEventListener("deviceready",function(){
		
  $('#BNombre').tap(function(){
	  alert($('#buscar').text());
    BuscarPorNombre($('#buscar').text());
	alert('afuera');
  });
 },false); //deviceready
 
}); //document ready 