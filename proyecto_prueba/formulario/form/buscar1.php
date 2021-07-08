<?php
	$cnmysql = mysqli_connect("localhost","root","","pru");
	
	$user=$_POST['usuario'];
	$con=$_POST['con'];
	
	$listarr="select * from usuario where usuario='".$user."' and contrasena='".$con."'";
	$resultado = $cnmysql->query($listarr);
	$num_filas = mysqli_num_rows($resultado);
	if($num_filas>0){ç
		$pro=$_GET['procedencia'];ç
		if($pro=='boton'){
			$listarr="insert into usuario(usuario,contrasena)values('".$user."','".$con."')";
			$resultado = $cnmysql->query($listarr);
			
		}
		echo "ok";
	}else{
		echo "no";
	}



?>