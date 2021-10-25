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
	<h4 class="text-center" style="font-size:20px">Gestión de Ventas</h4>
	<br>
		<div class="row g-3">
			<div class="col-md-3">        		
        		<input type="number" class="form-control" id="inputCedula" name="inputCedula" placeholder="Cédula">    
        	</div>        	     
        	<div class="col-md-2"> 		        	
        		<input type="button" name="buscarCliente" id="buscarCliente" class="btn btn-primary" value="Buscar">     	
         	</div>         
			<div class="col-md-4">				
        		<input type="text" class="form-control" id="inputCliente" name="inputCliente" placeholder="Cliente" readonly>    
        	</div>        	
        	<div class="col-md-3">        		
        		<input type="number" class="form-control" id="inputConse" name="inputConse" placeholder="Id Venta" readonly>
        	</div> 
        </div>     
        
        
        <br>
        
        <div class="row g-3">
			<div class="col-md-5">        		
        		<label style="text-align:center"><strong>Código de Producto</strong></label>
        	</div>        	     
        	<div class="col-md-3"> 		        	
        		<label><strong>Nombre del Producto</strong></label>     	
         	</div>         
			<div class="col-md-1">				
        		<label><strong>Cantidad</strong></label>    
        	</div>    
        	<div class="col-md-3">        		
        		<label><strong>Total del Producto</strong></label>
        	</div>     	        	
        </div>    
        
		<div class="row g-3">
			<div class="col-md-2">        		
        		<input type="number" class="form-control" id="inputCodProducto1" name="inputCodProducto">    
        	</div>        	     
        	<div class="col-md-2"> 		        	
        		<input type="button" name="buscarProducto" id="buscarProducto1" class="btn btn-primary" style="margin-bottom: 6px" value="Buscar">     	
         	</div>         
			<div class="col-md-4">				
        		<input type="text" class="form-control" id="inputProducto1" name="inputProducto" readonly>    
        	</div>    
        	<div class="col-md-1">        		
        		<input type="number" class="form-control" id="inputCantidad1" name="inputCantidad">
        	</div>     	
        	<div class="col-md-3">        		
        		<input type="number" class="form-control" id="inputValor1" name="inputValor">
        	</div> 
        </div>    
        
        <div class="row g-3">
			<div class="col-md-2">        		
        		<input type="number" class="form-control" id="inputCodProducto2" name="inputCodProducto">    
        	</div>        	     
        	<div class="col-md-2"> 		        	
        		<input type="button" name="buscarProducto" id="buscarProducto2" class="btn btn-primary" style="margin-bottom: 6px" value="Buscar">     	
         	</div>         
			<div class="col-md-4">				
        		<input type="text" class="form-control" id="inputProducto2" name="inputProducto" readonly>    
        	</div>    
        	<div class="col-md-1">        		
        		<input type="number" class="form-control" id="inputCantidad2" name="inputCantidad">
        	</div>     	
        	<div class="col-md-3">        		
        		<input type="number" class="form-control" id="inputValor2" name="inputValor">
        	</div> 
        </div>     
        
        <div class="row g-3">
			<div class="col-md-2">        		
        		<input type="number" class="form-control" id="inputCodProducto3" name="inputCodProducto">    
        	</div>        	     
        	<div class="col-md-2"> 		        	
        		<input type="button" name="buscarProducto" id="buscarProducto3" class="btn btn-primary" style="margin-bottom: 6px" value="Buscar">     	
         	</div>         
			<div class="col-md-4">				
        		<input type="text" class="form-control" id="inputProducto3" name="inputProducto" readonly>    
        	</div>    
        	<div class="col-md-1">        		
        		<input type="number" class="form-control" id="inputCantidad3" name="inputCantidad">
        	</div>     	
        	<div class="col-md-3">        		
        		<input type="number" class="form-control" id="inputValor3" name="inputValor">
        	</div> 
        </div>     
        
        <div class="row g-3">
			<div class="col-md-2">        		
        		<input type="number" class="form-control" id="inputCodProducto4" name="inputCodProducto">    
        	</div>        	     
        	<div class="col-md-2"> 		        	
        		<input type="button" name="buscarProducto" id="buscarProducto4" class="btn btn-primary" style="margin-bottom: 6px" value="Buscar">     	
         	</div>         
			<div class="col-md-4">				
        		<input type="text" class="form-control" id="inputProducto4" name="inputProducto" readonly>    
        	</div>    
        	<div class="col-md-1">        		
        		<input type="number" class="form-control" id="inputCantidad4" name="inputCantidad">
        	</div>     	
        	<div class="col-md-3">        		
        		<input type="number" class="form-control" id="inputValor4" name="inputValor">
        	</div> 
        </div>        
        
        <div class="row g-3">
			<div class="col-md-7">        		
        		<label></label>    
        	</div>			  
        	<div class="col-md-2">        		
        		<label style="margin-top: 6px"><strong>Sub Total Venta</strong></label>
        	</div>     	
        	<div class="col-md-3">        		
        		<input type="number" class="form-control" id="inputSubTotal" name="inputSubTotal" style="margin-top: 6px">
        	</div> 
        </div>     
        
        <div class="row g-3">
			<div class="col-md-7">        		
        		<label></label>    
        	</div>			
        	<div class="col-md-2">        		
        		<label><strong>Total IVA</strong></label>
        	</div>     	
        	<div class="col-md-3">        		
        		<input type="number" class="form-control" id="inputTotalIva" name="inputTotalIva">
        	</div> 
        </div>     
        
        <div class="row g-3">
			<div class="col-md-3">        		
        		<label></label>    
        	</div>        	     
        	<div class="col-md-4"> 		        	
        		<input type="button" name="crear" id="crear" class="btn btn-success" value="Guardar">  
        	<!-- </div>  	
        	<div class="col-md-2">  -->
        		<input type="button" name="limpiar" id="limpiar" class="btn btn-light" value="Limpiar">   	
         	</div>         
			<div class="col-md-2">        		
        		<label><strong>Total con IVA</strong></label>
        	</div>     	
        	<div class="col-md-3">        		
        		<input type="number" class="form-control" id="inputTotal" name="inputTotal">
        	</div> 
        </div>          
        
    </section>
</div>
<br>
    <table class="table" id="tablas" >
		<thead style="font-weight: bold">
			<tr>
				<th>ID VENTA</th>
				<th>CLIENTE</th>
				<th>SUBTOTAL</th>		
				<th>IVA</th>						
				<th>TOTAL</th>
					
			</tr>		
		</thead>
		
		<tbody id="cuerpoTabla">
			
		</tbody>	
	</table>
</div>
	
	<script src="http://code.jquery.com/jquery-1.10.2.js"></script>
    <script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
    <script src="https://cdn.datatables.net/1.10.9/js/jquery.dataTables.min.js"></script>
    <script src="scripts/ventas.js"></script>

</body>
</html>