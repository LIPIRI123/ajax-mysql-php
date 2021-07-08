var glo=null;
function enviar(){

	var  usuario=document.getElementById('usuario').value;
	
	var res=validar_texto_numero('usuario');

	if(res=="vacio"){
		validar_texto_numero('usuario');
		glo="vacio";
	}else{
		var datos=new  FormData();
		datos.append('usuario',usuario);

	
					$.ajax({
							type: "POST", //type of submit
							cache: false, //important or else you might get wrong data returned to you
							url: "buscar.php", //destination
							datatype: "html", //expected data format from process.php
						    data: datos, //target your form's data and serialize for a POST
							contentType:false,
							 processData:false,
							success: function(re){
								
								if(re=='ok'){
									$("#usuario").html('<style> #usuario{border-color:green}</style>');
									$("#respuesta_usuario").html('<div role=\"alert\"class=\"alert alert-success\">Usuario existe</div>');
									glo="ok";
								}else if(re=='no'){
									$("#usuario").html('<style> #usuario{border-color:red}</style>');
									$("#respuesta_usuario").html('<div role=\"alert\"class=\"alert alert-danger\">Usuario no encontrado</div>');
									glo="no";
								}
							}	
					});
				}
}


function contrasenas(valor){
	var dato=valor;

	var  usuario=document.getElementById('usuario').value;
	var contrasena=document.getElementById('contrasena').value;
	

	var res=validar_texto_numero('usuario');
	if(glo=="vacio"){
		validar_texto_numero('usuario');		
	}else if(glo=="no"){
		$("#usuario").html('<style> #usuario{border-color:red}</style>');
		$("#respuesta_usuario").html('<div role=\"alert\"class=\"alert alert-danger\">Usuario no encontrado o no registrado</div>');
	}else{

	var res=validar_texto_numero('contrasena');

	if(res=="vacio"){
		validar_texto_numero('contrasena');
	}else{
		var datos=new  FormData();
		datos.append('usuario',usuario);
		datos.append('con',contrasena);

	
					$.ajax({
							type: "POST", //type of submit
							cache: false, //important or else you might get wrong data returned to you
							url: "buscar1.php?procedencia="+valor, //destination
							datatype: "html", //expected data format from process.php
						    data: datos, //target your form's data and serialize for a POST
							contentType:false,
							 processData:false,
							success: function(re){
								if(valor=="boton"&&re=="ok"){
										
										alert("Correcto");
								
								}else{
									if(re=='ok'){
										$("#contrasena").html('<style> #contrasena{border-color:green}</style>');
										$("#respuesta_usuario").html('<div role=\"alert\"class=\"alert alert-success\">Contrasena Correcto</div>');
									}else if(re=='no'){
										$("#contrasena").html('<style> #contrasena{border-color:red}</style>');
										$("#respuesta_usuario").html('<div role=\"alert\"class=\"alert alert-danger\">esta contrasena no es de este usuario</div>');
									}
							}

							}	
					});
				}
			}
}
function validar_texto_numero(id){
	var datoo=document.getElementById(id).value;
	
	if(datoo==""){

		$("#"+id).html('<style> #'+id+'{border-color:#10EFDD}</style>');
		$("#respuesta_usuario").html('<style> #respuesta_usuario{background-color:#94EFDD}</style><style>#respuesta_usuario{color:blue}</style><div role=\"alert\" class=\"alert\">Llene el campo '+id+'</div>');
						
		return "vacio";
	}
}


function validar_contrasena(id){

	if(id=='contrasena'){
		var datoo=document.getElementById(id).value;
		var valor="contraseña";
	
	}else{
		var datoo=document.getElementById(id).value;
		var valor=id;

	
	}
	
		if(datoo!=""){
			var tama=datoo.length;

				var cont=para_contrasena_mescla_de_todo(datoo);
				if(tama==cont){
					$("#"+id).html('<style> #'+id+'{border-color:green}</style>');
					$("#respuesta_usuario").html('<div role=\"alert\"class=\"alert alert-success\">Correcto en campo '+valor+'</div>');
					return "Correcto";
				}else{
					$("#"+id).html('<style> #'+id+'{border-color:red}</style>');
					$("#respuesta_usuario").html('<div class=\"alert alert-danger\" role=\"alert\">campo incorrecto '+valor+'</div>');
					return "mal";	


				}

		}else{
			$("#"+id).html('<style> #'+id+'{border-color:#10EFDD}</style>');
			$("#respuesta_usuario").html('<style> #respuesta_usuario{background-color:#94EFDD}</style><style>#respuesta_usuario{color:blue}</style><div role=\"alert\" class=\"alert\">Llene el campo '+valor+'</div>');
						

		}
}

function validacion_especiales(datoo){
						//0uno@23
						//
						//1 2 3 4  
						var tama=datoo.length;
						//7
						var contador=0;

						 for(var i=0;i<tama;i++)
						 {	
						 	var numero_string=parseInt(datoo.charCodeAt(i));

						 		if(numero_string>=10&&numero_string<=47||numero_string>=58&&numero_string<=64||numero_string>=123&&numero_string<=255||numero_string>=91&&numero_string<=96){
						 			break;
						 		}else{
						 			contador=contador+1;
						 		}
						 }
						 return contador;

}


function para_contrasena_mescla_de_todo(datoo){
	var tama=datoo.length;
					var contador=0;

					
									 for(var i=0;i<tama;i++)
									 {	
									 	var numero_string=parseInt(datoo.charCodeAt(i));

									 		if(numero_string>=10&&numero_string<=32||numero_string>=128&&numero_string<=255){
									 			break;
									 		}else{
									 			contador=contador+1;
									 		}
									 }
									 return contador;
}