var getUrl = window.location;
var baseUrl = getUrl.protocol + "//" + getUrl.hostname + ":8080/";
//var baseUrl = getUrl.protocol + "//" + getUrl.hostname + ":8080/tiendavirtual-0.0.1-SNAPSHOT/";

$("#listadoUsuarios").click(function(event){
	
	
	//$('#tabla_usuarios').data.reload();
	
	document.getElementById('tabla_ventas').style.display = "none";
	document.getElementById('tabla_usuarios').style.display = "block";
	document.getElementById('tabla_clientes').style.display = "none";	
	
	
	//document.getElementById("tabla_usuarios").innerHTML = "";
	//document.getElementById('tabla_usuarios').reset();
	
	
	$.ajax({	
		
		
		
		type: "POST",
		url: baseUrl+"Usuarios/Lista", 
      
		success: function(data) {
			
			
	
			titulos = document.getElementById("titulos_usuarios");
			var th = document.createElement("tr")
			
			var colum1 = document.createElement("th");
        	colum1.innerHTML = "CEDULA";
        	var colum2 = document.createElement("th");
        	colum2.innerHTML = "NOMBRE";
        	var colum3 = document.createElement("th");
        	colum3.innerHTML = "CORREO";
			var colum4 = document.createElement("th");
        	colum4.innerHTML = "USUARIO";
			var colum5 = document.createElement("th");
        	colum5.innerHTML = "PASSWORD";  
				
        		titulos.appendChild(th);
        		th.appendChild(colum1);
        		th.appendChild(colum2);
        		th.appendChild(colum3);
				th.appendChild(colum4);	    
				th.appendChild(colum5);
				
			$.each(data, function(i, item) {
        		lista = document.getElementById("cuerpoTabla_usuarios");
       			var tr = document.createElement("tr");	

        		var columna1 = document.createElement("td");
        		columna1.innerHTML = item.cedulaUsuario;
        		var columna2 = document.createElement("td");
        		columna2.innerHTML = item.nombreUsuario;
        		var columna3 = document.createElement("td");
        		columna3.innerHTML = item.emailUsuario;
				var columna4 = document.createElement("td");
        		columna4.innerHTML = item.usuario;
				var columna5 = document.createElement("td");
        		columna5.innerHTML = item.passwordUsuario;		        
				
        		lista.appendChild(tr);
        		tr.appendChild(columna1);
        		tr.appendChild(columna2);
        		tr.appendChild(columna3);
				tr.appendChild(columna4);	    
				tr.appendChild(columna5);
       		});
		
		/*$("#tabla_usuarios").DataTable
        ({	
			"language":{
				"info": 		"Mostrando _START_ a _END_ de _TOTAL_ registros",
				"search": 		"Buscar",
				"lengthMenu": 	"Mostrar _MENU_ registros",
				"paginate": {
        			"first":	"Primero",
        			"last":		"Último",
       				"next":		"Siguiente",
        			"previous":	"Anterior"
    						},
				"infoFiltered":	"(Filtrado de _MAX_ resgistros totales)",
				"emptyTable":	"No hay datos disponibles",
				"infoEmpty":	"Mostrando 0 a 0 de 0 registros",
				"loadingRecords": "Cargando...",
   				"processing":	"Procesando...",
				"zeroRecords":	"Registros no encontrados"
			},					        
			searching: true,
			info: false,
			paginate: false,
			infoEmpty: false
        });	*/

      }
	})
	
	//$('#tabla_usuarios').DataTable().ajax.reload();
});


$("#listadoClientes").click(function(event){
	//location.reload();
	document.getElementById('tabla_ventas').style.display = "none";
	document.getElementById('tabla_usuarios').style.display = "none";
	document.getElementById('tabla_clientes').style.display = "block";
	
	$.ajax({	
		type: "POST",
		url: baseUrl+"Clientes/Lista", 
      
		success: function(data) {
				
	
			titulos = document.getElementById("titulos_clientes");
			var th = document.createElement("tr")
			
			var colum1 = document.createElement("th");
        	colum1.innerHTML = "CEDULA";
        	var colum2 = document.createElement("th");
        	colum2.innerHTML = "NOMBRE";
        	var colum3 = document.createElement("th");
        	colum3.innerHTML = "DIRECCION";
			var colum4 = document.createElement("th");
        	colum4.innerHTML = "TELEFONO";
			var colum5 = document.createElement("th");
        	colum5.innerHTML = "CORREO";  
				
        		titulos.appendChild(th);
        		th.appendChild(colum1);
        		th.appendChild(colum2);
        		th.appendChild(colum3);
				th.appendChild(colum4);	    
				th.appendChild(colum5);
				
			$.each(data, function(i, item) {
        		lista = document.getElementById("cuerpoTabla_clientes");
       			var tr = document.createElement("tr");	

        		var columna1 = document.createElement("td");
        		columna1.innerHTML = item.cedula_cliente;
        		var columna2 = document.createElement("td");
        		columna2.innerHTML = item.nombre_cliente;
        		var columna3 = document.createElement("td");
        		columna3.innerHTML = item.direccion_cliente;
				var columna4 = document.createElement("td");
        		columna4.innerHTML = item.telefono_cliente;
				var columna5 = document.createElement("td");
        		columna5.innerHTML = item.email_cliente;		        
				
        		lista.appendChild(tr);
        		tr.appendChild(columna1);
        		tr.appendChild(columna2);
        		tr.appendChild(columna3);
				tr.appendChild(columna4);	    
				tr.appendChild(columna5);
       		});
		
		/*$("#tabla_clientes").DataTable
        ({	
			"language":{
				"info": 		"Mostrando _START_ a _END_ de _TOTAL_ registros",
				"search": 		"Buscar",
				"lengthMenu": 	"Mostrar _MENU_ registros",
				"paginate": {
        			"first":	"Primero",
        			"last":		"Último",
       				"next":		"Siguiente",
        			"previous":	"Anterior"
    						},
				"infoFiltered":	"(Filtrado de _MAX_ resgistros totales)",
				"emptyTable":	"No hay datos disponibles",
				"infoEmpty":	"Mostrando 0 a 0 de 0 registros",
				"loadingRecords": "Cargando...",
   				"processing":	"Procesando...",
				"zeroRecords":	"Registros no encontrados"
			},					        
			searching: true
			
        });	*/	
      }
	})
});

$("#listadoVentas").click(function(event){
	
	document.getElementById('tabla_ventas').style.display = "block";
	document.getElementById('tabla_usuarios').style.display = "none";
	document.getElementById('tabla_clientes').style.display = "none";	
	
	$.ajax({	
		type: "POST",
		url: baseUrl+"Ventas/Lista", 
      
		success: function(data) {
				
	
			titulos = document.getElementById("titulos_ventas");
			var th = document.createElement("tr")
			
			var colum1 = document.createElement("th");
        	colum1.innerHTML = "CEDULA";
        	var colum2 = document.createElement("th");
        	colum2.innerHTML = "NOMBRE CLIENTE";
        	var colum3 = document.createElement("th");
        	colum3.innerHTML = "VALOR TOTAL";			
				
        		titulos.appendChild(th);
        		th.appendChild(colum1);
        		th.appendChild(colum2);
        		th.appendChild(colum3);				
				
			$.each(data, function(i, item) {
        		lista = document.getElementById("cuerpoTabla_ventas");
       			var tr = document.createElement("tr");	

        		var columna1 = document.createElement("td");
        		columna1.innerHTML = item.cedula_cliente;
        		var columna2 = document.createElement("td");
        		columna2.innerHTML = item.nombre_cliente;
        		var columna3 = document.createElement("td");
        		columna3.innerHTML = item.total_venta;		        
				
        		lista.appendChild(tr);
        		tr.appendChild(columna1);
        		tr.appendChild(columna2);
        		tr.appendChild(columna3);
       		});
		
		/*$("#tabla_ventas").DataTable
        ({	
			"language":{
				"info": 		"Mostrando _START_ a _END_ de _TOTAL_ registros",
				"search": 		"Buscar",
				"lengthMenu": 	"Mostrar _MENU_ registros",
				"paginate": {
        			"first":	"Primero",
        			"last":		"Último",
       				"next":		"Siguiente",
        			"previous":	"Anterior"
    						},
				"infoFiltered":	"(Filtrado de _MAX_ resgistros totales)",
				"emptyTable":	"No hay datos disponibles",
				"infoEmpty":	"Mostrando 0 a 0 de 0 registros",
				"loadingRecords": "Cargando...",
   				"processing":	"Procesando...",
				"zeroRecords":	"Registros no encontrados"
			},					        
			searching: true,
			info: false,
			paginate: false,
			infoEmpty: false
			
        });	*/	
      }
	})
});