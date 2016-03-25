<?php
# FileName="Connection_php_mysql.htm"
# Type="MYSQL"
# HTTP="true"
$hostname_conexion = "localhost";
$database_conexion = "uruapan2_root";
$username_conexion = "uruapan2_ero";
$password_conexion = "sqRZ;dag@T22";
$conexion = mysql_pconnect($hostname_conexion, $username_conexion, $password_conexion) or trigger_error(mysql_error(),E_USER_ERROR);
$PRECIO_POR_PALABRA = 3;
$IVA_GLOBAL = 0.16;
?>