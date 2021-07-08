
<!DOCTYPE html>
<html>
<head>
    <title>uno</title>

		

 		<link href="../../bootstrap/css/bootstrap.min.css" rel="stylesheet">
     	<script src="jquery-3.5.1.min.js"></script>
     	<script src="../../js/ajax.js/ajax_usuario.js"></script>
 	
</head>
<body>
	
  <div class="container">
	<div class="modal-dialog text-center panel panel-primary">
	
		<div class="panel-heading text-center">
			<h2 style="text-align:center;color: white; font-family: serif;">LOGIN</h2>
		</div>
				<br>
				<!--disabled-- nos sib=rbe para bloquear y solo mostrar no enviar por post-->
				<div class="panel-body">
						<form method="POST">
							
							<br>
							<abbr title="Usuario">
								<input class="form-control" style="color:black" type="text"  id="usuario" name ="usuario" placeholder="Usuario" onkeyup="enviar()" >
							</abbr>
							<br>
							<abbr title="Contraseña">
								<input class="form-control" style="color:black" type="text"  id="contrasena" name ="contrasena" placeholder="contraseña"onkeyup="contrasenas('contrasena');"><br>
		         			</abbr>


							<input class="btn btn-primary"  type="button" id="submit" value="Ingresar" onclick="contrasenas('boton')">
							<br>
							<!--<a href="../index.php">Cancelar</a>
							<div id='ErrorUsuario'><strong>Error!</strong>Usuario No Encontrado</div>
							-->		
							
						</form>
				</div>
<br>
			

		<div class="mt-3" id="respuesta_usuario">
						
		</div>

	</div>

		  <div class="row">
		    <div class="col-xs-12">
		    
		        <hr/>
		        <footer class="text-center well">
		          <p>Desarrollado web by Limbert Lipiri</p>       

		        </footer>
		    </div>
		  </div>
		  
 

 		<link href="../../bootstrap/css/bootstrap.min.css" rel="stylesheet">
     	<script src="jquery-3.5.1.min.js"></script>
     	<script src="../../js/ajax.js/ajax_usuario.js"></script>
  </div>
</body>
</html>


