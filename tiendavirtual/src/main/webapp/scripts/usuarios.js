var getUrl = window.location;
var baseUrl = getUrl.protocol + "//" + getUrl.hostname + ":8080/";
//var baseUrl = getUrl.protocol + "//" + getUrl.hostname + ":8080/tiendavirtual-0.0.1-SNAPSHOT/";

var saveme =  $.ajax({
	type: "POST",
	url: baseUrl+"Usuarios/Lista", 
      
	success: function(data) {
			
	
	$.each(data, function(i, item) {
        lista = document.getElementById("cuerpoTabla");
        var tr = document.createElement("tr");

		var idtr = document.createAttribute("id"); 
		idtr.value = item.cedulaUsuario;
		tr.setAttributeNode(idtr);

        var columna1 = document.createElement("th");
        columna1.innerHTML = item.cedulaUsuario;
        var columna2 = document.createElement("th");
        columna2.innerHTML = item.nombreUsuario;
        var columna3 = document.createElement("th");
        columna3.innerHTML = item.emailUsuario;		
		var columna4 = document.createElement("th");
        columna4.innerHTML = item.usuario;
		var columna5 = document.createElement("th");
		var button = document.createElement("button");
		
		var idbtn = document.createAttribute("id");
		idbtn.value = item.cedulaUsuario;
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
		idbtn2.value = item.cedulaUsuario;
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
		columna5.appendChild(button);
		button.appendChild(icon);
		columna5.appendChild(button2);
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

$("#crear").click(function(event){
	var cedulaUser = $("#inputCedula").val();
	var correoUser = $("#inputCorreo").val();
	var nombreUser = $("#inputNombre").val();
	var passwordUser = $("#inputPassword").val();
	var usuarioUser = $("#inputUsuario").val();
	
	var usuarioJson = {
		cedulaUsuario: cedulaUser, 
		emailUsuario: correoUser, 
		nombreUsuario: nombreUser,
		passwordUsuario: passwordUser,
		usuario: usuarioUser		
	}
	
	if (document.getElementById("inputCedula").value.length ==0
		||document.getElementById("inputCedula").value.length ==0
		||document.getElementById("inputCorreo").value.length ==0
		||document.getElementById("inputNombre").value.length ==0
		||document.getElementById("inputPassword").value.length ==0
		||document.getElementById("inputUsuario").value.length ==0
	){
		alert("Error...Campos Vacios");
		if (document.getElementById("inputCedula").value.length ==0){
		document.getElementById("inputCedula").style.borderColor = "red";	
		}
		if (document.getElementById("inputCorreo").value.length ==0){
		document.getElementById("inputCorreo").style.borderColor = "red";	
		}
		if (document.getElementById("inputNombre").value.length ==0){
		document.getElementById("inputNombre").style.borderColor = "red";	
		}
		if (document.getElementById("inputPassword").value.length ==0){
		document.getElementById("inputPassword").style.borderColor = "red";	
		}
		if (document.getElementById("inputUsuario").value.length ==0){
		document.getElementById("inputUsuario").style.borderColor = "red";	
		}
		
		
	}
	
		else{
	$.ajax({
		type: "POST",
		data: JSON.stringify(usuarioJson), // Permite convertir el string usuarioJson a objeto json
		url: baseUrl+"Usuarios/",
		contentType: "application/json",
		success: function(){
			alert("El cliente fue creado correctamente");		
			location.reload();
		}	
	})	
	}					
});		

/*$("#crear").click(function(){
	var cedulaUser = $("#inputCedula").val();
	var correoUser = $("#inputCorreo").val();
	var nombreUser = $("#inputNombre").val();
	var passwordUser = $("#inputPassword").val();
	var usuarioUser = $("#inputUsuario").val();
			
	$.post(baseUrl+"Usuarios/createUser",{cedulaUsuario: cedulaUser, emailUsuario: correoUser, 
			nombreUsuario: nombreUser, passwordUsuario: passwordUser, usuario: usuarioUser}).done(function(data){
		alert("El usuario fue creado correctamente");
		location.reload();				
		})						
});	*/	

$('table').on('click','.btnConsultar', function(){
	var cedula = $(this).attr('id')
	$.ajax({
		type: "GET",
		url: baseUrl+"Usuarios/" + cedula,
		dataType: "json",
		error: function(){
			alert("Error en la petición");
		}		
	}).done(function(data){
		
		document.getElementById('inputCedula').setAttribute('readonly', true);
	
		document.getElementById("inputCedula").value = data.cedulaUsuario;
		document.getElementById("inputCorreo").value = data.emailUsuario;
		document.getElementById("inputNombre").value = data.nombreUsuario;
		document.getElementById("inputPassword").value = data.passwordUsuario;
		document.getElementById("inputUsuario").value = data.usuario;
		
	})	
	
})

$('table').on('click','.btnEliminar', function(){
	var cedula = $(this).attr('id')
	$.ajax({
		type: "DELETE",
		url: baseUrl+"Usuarios/" + cedula,
		contentType: "application/json",
		success: function(){
			alert("El cliente fue borrado correctamente");		
			location.reload();
		}	
	})	
})


$("#actualizar").click(function(){
	var cedulaUser = $("#inputCedula").val();
	var correoUser = $("#inputCorreo").val();
	var nombreUser = $("#inputNombre").val();
	var passwordUser = $("#inputPassword").val();
	var usuarioUser = $("#inputUsuario").val();
	
	if (document.getElementById("inputCedula").value.length ==0
		||document.getElementById("inputCedula").value.length ==0
		||document.getElementById("inputCorreo").value.length ==0
		||document.getElementById("inputNombre").value.length ==0
		||document.getElementById("inputPassword").value.length ==0
		||document.getElementById("inputUsuario").value.length ==0
	){
		alert("Error...Campos Vacios");
		if (document.getElementById("inputCedula").value.length ==0){
		document.getElementById("inputCedula").style.borderColor = "red";	
		}
		if (document.getElementById("inputCorreo").value.length ==0){
		document.getElementById("inputCorreo").style.borderColor = "red";	
		}
		if (document.getElementById("inputNombre").value.length ==0){
		document.getElementById("inputNombre").style.borderColor = "red";	
		}
		if (document.getElementById("inputPassword").value.length ==0){
		document.getElementById("inputPassword").style.borderColor = "red";	
		}
		if (document.getElementById("inputUsuario").value.length ==0){
		document.getElementById("inputUsuario").style.borderColor = "red";	
		}
		
		
	}
	
		else{
	$.post(baseUrl+"Usuarios/updateUser",{cedulaUsuario: cedulaUser, emailUsuario: correoUser, 
			nombreUsuario: nombreUser, passwordUsuario: passwordUser, usuario: usuarioUser}).done(function(data){
		alert("El usuario fue actualizado correctamente");
		location.reload();				
		})	
		}					
});	

$("#limpiar").click(function(){
	
	$("#inputCedula").removeAttr("readonly");
	document.getElementById("inputCedula").value = "";	
	document.getElementById("inputCorreo").value = "";
	document.getElementById("inputNombre").value = "";
	document.getElementById("inputPassword").value = "";
	document.getElementById("inputUsuario").value = "";	
});