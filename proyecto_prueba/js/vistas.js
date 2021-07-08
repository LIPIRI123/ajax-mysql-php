
function problemas(){
	var parametros = {};

	$.ajax({

		data: parametros,
		url: "preguntas.php",
		type: "POST",
		beforeSend: function(){
			$("#contenido").html();
		},
		success: function(vista){
			$("#contenido").empty();
			$("#contenido").html(vista);
		}

	});
}


function concursos(){
	var parametros = {};

	$.ajax({

		data: parametros,
		url: "principal.php",
		type: "POST",
		beforeSend: function(){
			$("#contenido").html();
		},
		success: function(vista){
			$("#contenido").empty();
			$("#contenido").html(vista);
		}

	});
}

function verlista(){
	var parametros = {};

	$.ajax({

		data: parametros,
		url: "visualisar.php",
		type: "POST",
		beforeSend: function(){
			$("#contenido").html();
		},
		success: function(vista){
			$("#contenido").empty();
			$("#contenido").html(vista);
		}

	});
}


function ingresolibro(){
	var parametros = {};

	$.ajax({

		data: parametros,
		url: "ingresolibro/libro.php",
		type: "POST",
		beforeSend: function(){
			$("#contenido").html();
		},
		success: function(vista){
			$("#contenido").html(vista);
		}

	});
}

function subirlibros(){
	var parametros = {};

	$.ajax({

		data: parametros,
		url: "ingresolibro/opciones.php",
		type: "POST",
		beforeSend: function(){
			$("#contenido").html();
		},
		success: function(vista){
			$("#contenido").html(vista);
		}

	});
}





//funciones de llamar lista de libros e inestigaciones

	
function vlibrouniversidad(){
	var parametros = {};

	$.ajax({

		data: parametros,
		url: "listarlibros/librouniversida.php",
		type: "POST",
		beforeSend: function(){
			$("#contenido").html();
		},
		success: function(vista){
			$("#contenido").html(vista);
		}

	});
}

function vinvuniver(){
	var parametros = {};

	$.ajax({

		data: parametros,
		url: "listarlibros/libros.php",
		type: "POST",
		beforeSend: function(){
			$("#contenido").html();
		},
		success: function(vista){
			$("#contenido").html(vista);
		}

	});
}
function vinvcol(){
	var parametros = {};

	$.ajax({

		data: parametros,
		url: "listarlibros/libros.php",
		type: "POST",
		beforeSend: function(){
			$("#contenido").html();
		},
		success: function(vista){
			$("#contenido").html(vista);
		}

	});
}