var getUrl = window.location;
var baseUrl = getUrl.protocol + "//" + getUrl.hostname + ":8080/";
//var baseUrl = getUrl.protocol + "//" + getUrl.hostname + ":8080/tiendavirtual-0.0.1-SNAPSHOT/";

var saveme =  $.ajax({
	type: "POST",
	url: baseUrl+"Ventas/ListaVen", 
     
	success: function(data) {
			
	
	$.each(data, function(i, item) {
        lista = document.getElementById("cuerpoTabla");
        var tr = document.createElement("tr");		

		var idtr = document.createAttribute("id"); 
		idtr.value = item.codigo_venta;
		tr.setAttributeNode(idtr);
		
        var columna1 = document.createElement("th");
        columna1.innerHTML = item.codigo_venta;
		var columna2 = document.createElement("th");
    	columna2.innerHTML = item.cedula_cliente;		
		var columna3 = document.createElement("th");
        columna3.innerHTML = item.valor_venta;		
        var columna4 = document.createElement("th");
        columna4.innerHTML = item.ivaventa;
        var columna5 = document.createElement("th");
        columna5.innerHTML = item.total_venta;				
		/*var columna6 = document.createElement("th");
		
		var button = document.createElement("button");
		var idbtn = document.createAttribute("id");
		idbtn.value = item.codigo_venta;
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
		icon2.setAttributeNode(classicon2);*/
		
		      
        lista.appendChild(tr);
        tr.appendChild(columna1);
        tr.appendChild(columna2);
        tr.appendChild(columna3);		
		tr.appendChild(columna4);
		tr.appendChild(columna5);
		/*tr.appendChild(columna6);		
		columna6.appendChild(button);
		button.appendChild(icon);
		columna6.appendChild(button2);
		button2.appendChild(icon2);	*/			
       
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
	//var codigoVenta = $("#inputConse").val();
	var ivaVenta = $("#inputTotalIva").val();
	var totalVenta = $("#inputTotal").val();
	var valorVenta = $("#inputSubTotal").val();
	var cedulaCliente = $("#inputCedula").val();	
	
	var ventaJson = {
		//codigo_venta: codigoVenta,
		ivaventa: ivaVenta, 
		total_venta: totalVenta, 
		valor_venta: valorVenta,
		cedula_usuario: 5,
		cedula_cliente: cedulaCliente
				
	}
	$.ajax({
		type: "POST",
		data: JSON.stringify(ventaJson), // Permite convertir el string usuarioJson a objeto json
		url: baseUrl+"Ventas/",
		contentType: "application/json",
		success: function(){
			alert("La venta fue creada correctamente");		
			location.reload();
		}	
	})
	
	//crearDetalVenta();							
});		

function crearDetalVenta(){
	
	var cantidadProducto1 = $("#inputCantidad1").val();
	var cantidadProducto2 = $("#inputCantidad2").val();
	var cantidadProducto3 = $("#inputCantidad3").val();
	var cantidadProducto4 = $("#inputCantidad4").val();
	
	var codigoProducto1 = $("#inputCodProducto1").val();
	var codigoProducto2 = $("#inputCodProducto2").val();
	var codigoProducto3 = $("#inputCodProducto3").val();
	var codigoProducto4 = $("#inputCodProducto4").val();
	
	var codigoVenta = $("#inputConse").val();
	
	//var valorVenta = $("#inputSubTotal").val();
	//var cedulaCliente = $("#inputCedula").val();

	var codigoDetalleVenta1 = codigoVenta + codigoProducto1;
	var codigoDetalleVenta2 = codigoVenta + codigoProducto2;
	var codigoDetalleVenta3 = codigoVenta + codigoProducto3;
	var codigoDetalleVenta4 = codigoVenta + codigoProducto4;
	
	var valorVentaProducto = 0;
	var valorIvaProducto = 0;
	var valorVentaTotalProducto = 0;
	
	var ventaJson = {
		codigo_venta: codigoVenta,
		ivaventa: ivaVenta, 
		total_venta: totalVenta, 
		valor_venta: valorVenta,
		cedula_usuario: 5,
		cedula_cliente: cedulaCliente
				
	}
	$.ajax({
		type: "POST",
		data: JSON.stringify(ventaJson), // Permite convertir el string usuarioJson a objeto json
		url: baseUrl+"Ventas/Detalle/",
		contentType: "application/json",
		success: function(){
			alert("La venta fue creada correctamente");		
			location.reload();
		}	
	})							
}

$('table').on('click','.btnConsultar', function(){
	var cod_venta = $(this).attr('id')
	$.ajax({
		type: "GET",
		url: baseUrl+"Ventas/Venta/" + cod_venta,
		dataType: "json",
		error: function(){
			alert("Error en la petición");
		}		
	}).done(function(data){
				
		document.getElementById("inputConse").value = data.codigo_venta;		
		document.getElementById("inputCedula").value = data.cedula_cliente;	
		document.getElementById("inputSubTotal").value = data.valor_venta;		
		document.getElementById("inputTotalIva").value = data.ivaventa;
		document.getElementById("inputTotal").value = data.total_venta;		
			
	})	
})


$("#buscarCliente").click(function(event){
	var cedula = $("#inputCedula").val();
	$.ajax({
		type: "GET",
		url: baseUrl+"Ventas/" + cedula,
		dataType: "json",
		error: function(){
			alert("Error en la petición");
		}		
	}).done(function(data){		
		document.getElementById("inputCliente").value = data.nombre_cliente;
		//document.getElementById('inputCliente').setAttribute('readonly', true);
	})	
	
});

$("#buscarProducto1").click(function(event){
	var cod_producto = $("#inputCodProducto1").val();
	$.ajax({
		type: "GET",
		url: baseUrl+"Ventas/Producto/" + cod_producto,
		dataType: "json",
		error: function(){
			alert("Error en la petición");
		}		
	}).done(function(data){		
		
		document.getElementById("inputProducto1").value = data.nombre_producto;
		//document.getElementById('inputProducto1').setAttribute('readonly', true);
	})	
	
});

$("#buscarProducto2").click(function(event){
	var cod_producto = $("#inputCodProducto2").val();
	$.ajax({
		type: "GET",
		url: baseUrl+"Ventas/Producto/" + cod_producto,
		dataType: "json",
		error: function(){
			alert("Error en la petición");
		}		
	}).done(function(data){		
		document.getElementById("inputProducto2").value = data.nombre_producto;
		//document.getElementById('inputProducto2').setAttribute('readonly', true);
	})	
	
});

$("#buscarProducto3").click(function(event){
	var cod_producto = $("#inputCodProducto3").val();
	$.ajax({
		type: "GET",
		url: baseUrl+"Ventas/Producto/" + cod_producto,
		dataType: "json",
		error: function(){
			alert("Error en la petición");
		}		
	}).done(function(data){		
		document.getElementById("inputProducto3").value = data.nombre_producto;
		//document.getElementById('inputProducto3').setAttribute('readonly', true);
	})	
	
});

$("#buscarProducto4").click(function(event){
	var cod_producto = $("#inputCodProducto4").val();
	$.ajax({
		type: "GET",
		url: baseUrl+"Ventas/Producto/" + cod_producto,
		dataType: "json",
		error: function(){
			alert("Error en la petición");
		}		
	}).done(function(data){		
		document.getElementById("inputProducto4").value = data.nombre_producto;
		//document.getElementById('inputProducto4').setAttribute('readonly', true);
	})	
	
});

$("#inputCantidad1").change(function(event){
	var cod_producto = $("#inputCodProducto1").val();
	var cantidad = $("#inputCantidad1").val();
	var subtotal_ant = 0;
	
	$.ajax({
		type: "GET",
		url: baseUrl+"Ventas/Total/" + cod_producto,
		dataType: "json",
		error: function(){
			alert("Error en la petición");
		}		
	}).done(function(data){		
		var total = data.precio_compra*cantidad;		
		var subtotal = parseFloat(subtotal_ant) + parseFloat(total);
		var iva = parseFloat(subtotal)*0.19;
		var total_factura = parseFloat(subtotal) + parseFloat(iva);
		
		document.getElementById("inputValor1").value = total;
		document.getElementById('inputValor1').setAttribute('readonly', true);
		document.getElementById("inputSubTotal").value = subtotal;
		document.getElementById('inputSubTotal').setAttribute('readonly', true);
		document.getElementById("inputTotalIva").value = iva;
		document.getElementById('inputTotalIva').setAttribute('readonly', true);
		document.getElementById("inputTotal").value = total_factura;
		document.getElementById('inputTotal').setAttribute('readonly', true);
	})		
});

$("#inputCantidad2").change(function(event){
	var cod_producto = $("#inputCodProducto2").val();
	var cantidad = $("#inputCantidad2").val();
	var subtotal_ant = $("#inputSubTotal").val();
	
	$.ajax({
		type: "GET",
		url: baseUrl+"Ventas/Total/" + cod_producto,
		dataType: "json",
		error: function(){
			alert("Error en la petición");
		}		
	}).done(function(data){		
		var total = data.precio_compra*cantidad;		
		var subtotal = parseFloat(subtotal_ant) + parseFloat(total);
		var iva = parseFloat(subtotal)*0.19;
		var total_factura = parseFloat(subtotal) + parseFloat(iva);
		
		document.getElementById("inputValor2").value = total;
		document.getElementById('inputValor2').setAttribute('readonly', true);
		document.getElementById("inputSubTotal").value = subtotal;
		document.getElementById('inputSubTotal').setAttribute('readonly', true);
		document.getElementById("inputTotalIva").value = iva;
		document.getElementById('inputTotalIva').setAttribute('readonly', true);
		document.getElementById("inputTotal").value = total_factura;
		document.getElementById('inputTotal').setAttribute('readonly', true);
	})		
});

$("#inputCantidad3").change(function(event){
	var cod_producto = $("#inputCodProducto3").val();
	var cantidad = $("#inputCantidad3").val();
	var subtotal_ant = $("#inputSubTotal").val();
	
	$.ajax({
		type: "GET",
		url: baseUrl+"Ventas/Total/" + cod_producto,
		dataType: "json",
		error: function(){
			alert("Error en la petición");
		}		
	}).done(function(data){		
		var total = data.precio_compra*cantidad;		
		var subtotal = parseFloat(subtotal_ant) + parseFloat(total);
		var iva = parseFloat(subtotal)*0.19;
		var total_factura = parseFloat(subtotal) + parseFloat(iva);
		
		document.getElementById("inputValor3").value = total;
		document.getElementById('inputValor3').setAttribute('readonly', true);
		document.getElementById("inputSubTotal").value = subtotal;
		document.getElementById('inputSubTotal').setAttribute('readonly', true);
		document.getElementById("inputTotalIva").value = iva;
		document.getElementById('inputTotalIva').setAttribute('readonly', true);
		document.getElementById("inputTotal").value = total_factura;
		document.getElementById('inputTotal').setAttribute('readonly', true);
	})		
});

$("#inputCantidad4").change(function(event){
	var cod_producto = $("#inputCodProducto4").val();
	var cantidad = $("#inputCantidad4").val();
	var subtotal_ant = $("#inputSubTotal").val();
	
	$.ajax({
		type: "GET",
		url: baseUrl+"Ventas/Total/" + cod_producto,
		dataType: "json",
		error: function(){
			alert("Error en la petición");
		}		
	}).done(function(data){		
		var total = data.precio_compra*cantidad;		
		var subtotal = parseFloat(subtotal_ant) + parseFloat(total);
		var iva = parseFloat(subtotal)*0.19;
		var total_factura = parseFloat(subtotal) + parseFloat(iva);
		
		document.getElementById("inputValor4").value = total;
		document.getElementById('inputValor4').setAttribute('readonly', true);
		document.getElementById("inputSubTotal").value = subtotal;
		document.getElementById('inputSubTotal').setAttribute('readonly', true);
		document.getElementById("inputTotalIva").value = iva;
		document.getElementById('inputTotalIva').setAttribute('readonly', true);
		document.getElementById("inputTotal").value = total_factura;
		document.getElementById('inputTotal').setAttribute('readonly', true);
	})		
});

$("#limpiar").click(function(){		
	document.getElementById("inputCedula").value = "";	
	document.getElementById("inputCliente").value = "";	
	document.getElementById("inputConse").value = "";	
	document.getElementById("inputCodProducto1").value = "";
	document.getElementById("inputCodProducto2").value = "";	
	document.getElementById("inputCodProducto3").value = "";
	document.getElementById("inputCodProducto4").value = "";	
	document.getElementById("inputProducto1").value = "";
	document.getElementById("inputProducto2").value = "";	
	document.getElementById("inputProducto3").value = "";
	document.getElementById("inputProducto4").value = "";	
	document.getElementById("inputCantidad1").value = "";
	document.getElementById("inputCantidad2").value = "";	
	document.getElementById("inputCantidad3").value = "";
	document.getElementById("inputCantidad4").value = "";	
	document.getElementById("inputValor1").value = "";
	document.getElementById("inputValor2").value = "";	
	document.getElementById("inputValor3").value = "";	
	document.getElementById("inputValor4").value = "";	
	document.getElementById("inputSubTotal").value = "";
	document.getElementById("inputTotalIva").value = "";
	document.getElementById("inputTotal").value = "";	
	$("#inputValor1").removeAttr("readonly");
	$("#inputValor2").removeAttr("readonly");
	$("#inputValor3").removeAttr("readonly");
	$("#inputValor4").removeAttr("readonly");	
	$("#inputSubTotal").removeAttr("readonly");
	$("#inputTotalIva").removeAttr("readonly");
	$("#inputTotal").removeAttr("readonly");
});