<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
	<link rel="stylesheet" href="http://cdn.datatables.net/1.10.9/css/jquery.dataTables.min.css" />
    <link rel="stylesheet" href="http://code.jquery.com/ui/1.11.4/themes/flick/jquery-ui.css">    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
	<link rel="stylesheet" type="text/css" href="css/formularios.css">
	
	
<title>Tienda Virtual</title>
</head>
<body>

<div id="menu">
<div id="container">
	<h2>Tienda Genérica</h2>
	<ul>
        <li><a href="usuarios.jsp">Usuarios</a></li>
        <li><a href="clientes.jsp">Clientes</a></li>
        <li><a href="proveedores.jsp">Proveedores</a></li>
        <li><a href="productos.jsp">Productos</a></li>
        <li><a href="ventas.jsp">Ventas</a></li>
        <li><a href="reportes.jsp">Reportes</a></li>
        <li><a href="index.jsp">Cerrar Sesión</a></li>
    </ul>
</div>
</div>
	<br>
<div class="container">
<div>
	
	<div class="abs-center">
	<br>
	<h4 style="font-size:20px">Gestión de Reportes</h4>
	<br>
		<input type="button" name="listadoUsuarios" id="listadoUsuarios" class="col-sm-3 btn btn-primary" style="margin-bottom:6px" value="Listado de Usuarios">
		<input type="button" name="listadoClientes" id="listadoClientes" class="col-sm-3 btn btn-primary" style="margin-bottom:6px" value="Listado de Clientes">       
        <input type="button" name="listadoVentas" id="listadoVentas" class="col-sm-3 btn btn-primary" style="margin-bottom:6px" value="Ventas por Cliente">
	</div>    
</div>
<br>
<div style="width:800px; margin:0 auto;">
 	<table class="table_reportes" id="tabla_usuarios" style="display:none; width:100%">
		<thead style="font-weight: bold" id="titulos_usuarios">		
				
		</thead> 
		
		<tbody id="cuerpoTabla_usuarios">
			
		</tbody>	
	</table>
</div>

<div style="width:800px; margin:0 auto;">
	<table class="table_reportes" id="tabla_clientes" style="display:none; width:100%">
		<thead style="font-weight: bold" id="titulos_clientes">		
			<tr>
				
			</tr>		
		</thead>
		
		<tbody id="cuerpoTabla_clientes">
			
		</tbody>	
	</table>
</div>

<div style="width:800px; margin:0 auto;">
	<table class="table_reportes" id="tabla_ventas" style="display:none; width:100%">
		<thead style="font-weight: bold" id="titulos_ventas">		
			<tr>
				
			</tr>		
		</thead>
		
		<tbody id="cuerpoTabla_ventas">
			
		</tbody>	
	</table>
</div>	
</div>	
	<script src="http://code.jquery.com/jquery-1.10.2.js"></script>
    <script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
    <script src="https://cdn.datatables.net/1.10.9/js/jquery.dataTables.min.js"></script>    
    <script src="scripts/reporte.js"></script>
</body>
</html>