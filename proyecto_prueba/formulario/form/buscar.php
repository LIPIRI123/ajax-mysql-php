<?php
	$cnmysql = mysqli_connect("localhost","root","","pru");
	
	$user=$_POST['usuario'];
	$listarr="select * from usuario where usuario='".$user."'";
	$resultado = $cnmysql->query($listarr);
	$num_filas = mysqli_num_rows($resultado);
	if($num_filas>0){
		echo "ok";
	}else{
		echo "no";
	}



?>