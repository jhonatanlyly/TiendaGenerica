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

<div class="container">
<div class="mb-3">

	<section class="formulario">  	
	<h4 class="text-center" style="font-size:20px">Gestión de Proveedores</h4>
	<br>
		<div class="mb-3 row">
        	<label class="col-sm-2 col-form-label">NIT</label>
        	<div class="col-sm-4">
        		<input type="text" class="form-control" id="inputNit" name="inputNit">  
        	</div>        
        	<label class="col-sm-2 col-form-label">Teléfono</label>
        		<div class="col-sm-4">
        			<input type="text" class="form-control" id="inputTelefono" name="inputTelefono">    
        		</div> 
        </div>
        <div class="mb-3 row">
        	<label class="col-sm-2 col-form-label">Nombre Proveedor</label>
        		<div class="col-sm-4">
        			<input type="text" class="form-control" id="inputNombre" name="inputNombre">
        		</div> 
        	<label class="col-sm-2 col-form-label">Ciudad</label>
        		<div class="col-sm-4">
        			<input type="text" class="form-control" id="inputCiudad" name="inputCiudad">
        		</div>        		
        </div>           	     
        <div class="mb-3 row">
        	<label class="col-sm-2 col-form-label">Dirección</label>
        		<div class="col-sm-4">
        			<input type="text" class="form-control" id="inputDireccion" name="inputDireccion">    
        		</div>      		        	
        	<input type="button" name="crear" id="crear" class="col-sm-1 btn btn-success" value="Crear">
        	<input type="button" name="actualizar" id="actualizar" class="col-sm-1 btn btn-secondary" style="margin-left:10px" value="Editar">
        	<input type="button" name="limpiar" id="limpiar" class="col-sm-1 btn btn-light" style="margin-left:10px" value="Limpiar">
        </div>
    </section>
</div>
    
    <table id="tablas" class="table">
		<thead style="font-weight: bold">
			<tr>
				<th>NIT</th>
				<th>CIUDAD</th>
				<th>DIRECCION</th>
				<th>NOMBRE</th>
				<th>TELEFONO</th>					
				<th>OPCIONES</th>
			</tr>		
		</thead>
		
		<tbody id="cuerpoTabla">
			
		</tbody>
	
	
	</table>
</div>
	<script src="http://code.jquery.com/jquery-1.10.2.js"></script>
    <script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
    <script src="https://cdn.datatables.net/1.10.9/js/jquery.dataTables.min.js"></script>
    <script src="scripts/proveedores.js"></script>

</body>
</html>