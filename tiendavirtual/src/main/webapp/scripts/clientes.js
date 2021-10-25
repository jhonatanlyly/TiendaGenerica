var getUrl = window.location;
var baseUrl = getUrl.protocol + "//" + getUrl.hostname + ":8080/";
//var baseUrl = getUrl.protocol + "//" + getUrl.hostname + ":8080/tiendavirtual-0.0.1-SNAPSHOT/";

var saveme =  $.ajax({
        type: "POST",
        url: baseUrl+"Clientes/Lista", //ruta de la API consultaremos.
      
		success: function(data) {
        $.each(data, function(i, item) {
        lista = document.getElementById("cuerpoTabla");
        var tr = document.createElement("tr");

		var idtr = document.createAttribute("id"); //<tr id> </tr>
		idtr.value = item.cedula_cliente;
		tr.setAttributeNode(idtr);

        var columna1 = document.createElement("th");
        columna1.innerHTML = item.cedula_cliente;
        var columna2 = document.createElement("th");
        columna2.innerHTML = item.nombre_cliente;
        var columna3 = document.createElement("th");
        columna3.innerHTML = item.direccion_cliente;		
		var columna4 = document.createElement("th");
        columna4.innerHTML = item.telefono_cliente;
		var columna5 = document.createElement("th");
        columna5.innerHTML = item.email_cliente;
		var columna6 = document.createElement("th");
		var button = document.createElement("button");
		
		var idbtn = document.createAttribute("id");
		idbtn.value = item.cedula_cliente;
		button.setAttributeNode(idbtn);
		
		var classbtn = document.createAttribute("class"); 
		classbtn.value = "btn btn-primary btnConsultar";
		button.setAttributeNode(classbtn);
		
		var icon = document.createElement("i");		
		var classicon = document.createAttribute("class");
		classicon.value = "fa fa-search";
		icon.setAttributeNode(classicon);	
		
		var button2 = document.createElement("button");
		var idbtn2 = document.createAttribute("id"); 
		idbtn2.value = item.cedula_cliente;
		button2.setAttributeNode(idbtn2);
		
		var classbtn2 = document.createAttribute("class"); 
		classbtn2.value = "btn btn-danger btnEliminar";
		button2.setAttributeNode(classbtn2);
		
		var icon2 = document.createElement("i");		
		var classicon2 = document.createAttribute("class"); 
		classicon2.value = "fa fa-trash";
		icon2.setAttributeNode(classicon2);

        
        lista.appendChild(tr);
        tr.appendChild(columna1);
        tr.appendChild(columna2);
        tr.appendChild(columna3);
		tr.appendChild(columna4);
		tr.appendChild(columna5);
		tr.appendChild(columna6);		
		columna6.appendChild(button);
		button.appendChild(icon);
		columna6.appendChild(button2);
		button2.appendChild(icon2);		
       
       });
		$("#tablas").DataTable
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
			
        });	
      }
    });


$('table').on('click','.btnConsultar', function(){
	var cedula = $(this).attr('id')
	$.ajax({
		type: "GET",
		url: baseUrl+"Clientes/" + cedula,
		dataType: "json",
		error: function(){
			alert("Error en la petición");
		}		
	}).done(function(data){//Es lo que se genera del ajax, una data en json
	
		document.getElementById('inputCedulaCliente').setAttribute('readonly', true);
		
		document.getElementById("inputCedulaCliente").value = data.cedula_cliente;
		document.getElementById("inputNombre").value = data.nombre_cliente;
		document.getElementById("inputDireccion").value = data.direccion_cliente;
		document.getElementById("inputTelefono").value = data.telefono_cliente;
		document.getElementById("inputCorreo").value = data.email_cliente;
		
	})	
	
})

$("#crear").click(function(){
	var cedulaCliente = $("#inputCedulaCliente").val();
	var nombreCliente = $("#inputNombre").val();
	var direccionCliente = $("#inputDireccion").val();
	var telefonoCliente = $("#inputTelefono").val();
	var correoCliente = $("#inputCorreo").val();
	
	if (document.getElementById("inputCedulaCliente").value.length ==0
		||document.getElementById("inputNombre").value.length ==0
		||document.getElementById("inputDireccion").value.length ==0
		||document.getElementById("inputTelefono").value.length ==0
		||document.getElementById("inputCorreo").value.length ==0
	){

		alert("Error...Campos Vacios");
		if (document.getElementById("inputCedulaCliente").value.length ==0){
		document.getElementById("inputCedulaCliente").style.borderColor = "red";	
		}
		if (document.getElementById("inputNombre").value.length ==0){
		document.getElementById("inputNombre").style.borderColor = "red";	
		}
		if (document.getElementById("inputDireccion").value.length ==0){
		document.getElementById("inputDireccion").style.borderColor = "red";	
		}
		if (document.getElementById("inputTelefono").value.length ==0){
		document.getElementById("inputTelefono").style.borderColor = "red";	
		}
		if (document.getElementById("inputCorreo").value.length ==0){
		document.getElementById("inputCorreo").style.borderColor = "red";	
		}
		
		
	}
		
		else{	
			
		$.post(baseUrl+"Clientes/createCliente",{cedula_cliente: cedulaCliente, nombre_cliente: nombreCliente, 
			direccion_cliente: direccionCliente, telefono_cliente: telefonoCliente, email_cliente: correoCliente}).done(function(data){
			alert("El cliente fue creado correctamente");
			location.reload();				
		})	
		}					
});		


$('table').on('click','.btnEliminar', function(){
	var cedula = $(this).attr('id')
	$.ajax({
		type: "DELETE",
		url: baseUrl+"Clientes/" + cedula,
		contentType: "application/json",
		success: function(){
			alert("El cliente fue borrado correctamente");		
			location.reload();
		}	
	})	
})

$("#actualizar").click(function(){
	var cedulaCliente = $("#inputCedulaCliente").val();
	var nombreCliente = $("#inputNombre").val();
	var direccionCliente = $("#inputDireccion").val();
	var telefonoCliente = $("#inputTelefono").val();
	var correoCliente = $("#inputCorreo").val();
	
	if (document.getElementById("inputCedulaCliente").value.length ==0
		||document.getElementById("inputNombre").value.length ==0
		||document.getElementById("inputDireccion").value.length ==0
		||document.getElementById("inputTelefono").value.length ==0
		||document.getElementById("inputCorreo").value.length ==0
	){

		alert("Error...Campos Vacios");
		if (document.getElementById("inputCedulaCliente").value.length ==0){
		document.getElementById("inputCedulaCliente").style.borderColor = "red";	
		}
		if (document.getElementById("inputNombre").value.length ==0){
		document.getElementById("inputNombre").style.borderColor = "red";	
		}
		if (document.getElementById("inputDireccion").value.length ==0){
		document.getElementById("inputDireccion").style.borderColor = "red";	
		}
		if (document.getElementById("inputTelefono").value.length ==0){
		document.getElementById("inputTelefono").style.borderColor = "red";	
		}
		if (document.getElementById("inputCorreo").value.length ==0){
		document.getElementById("inputCorreo").style.borderColor = "red";	
		}
		
		
	}
		
		else{	
			
		$.post(baseUrl+"Clientes/updateCliente",{cedula_cliente: cedulaCliente, nombre_cliente: nombreCliente, 
			direccion_cliente: direccionCliente, telefono_cliente: telefonoCliente, email_cliente: correoCliente}).done(function(data){
		alert("El cliente fue actualizado correctamente");
		location.reload();				
		})			
		}			
});		

$("#limpiar").click(function(){
	
	$("#inputCedulaCliente").removeAttr("readonly");
	document.getElementById("inputCedulaCliente").value = "";	
	document.getElementById("inputNombre").value = "";
	document.getElementById("inputDireccion").value = "";
	document.getElementById("inputTelefono").value = "";
	document.getElementById("inputCorreo").value = "";	
});
