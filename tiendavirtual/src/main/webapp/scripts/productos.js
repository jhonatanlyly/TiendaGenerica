var getUrl = window.location;
var baseUrl = getUrl.protocol + "//" + getUrl.hostname + ":8080/";
//var baseUrl = getUrl.protocol + "//" + getUrl.hostname + ":8080/tiendavirtual-0.0.1-SNAPSHOT/";

var saveme = $.ajax({
	type: "POST",
	url: baseUrl + "Productos/Lista",

	success: function(data) {


		$.each(data, function(i, item) {
			lista = document.getElementById("cuerpoTabla");
			var tr = document.createElement("tr");

			var idtr = document.createAttribute("id");
			idtr.value = item.codigo_producto;
			tr.setAttributeNode(idtr);

			var columna1 = document.createElement("th");
			columna1.innerHTML = item.codigo_producto;
			var columna2 = document.createElement("th");
			columna2.innerHTML = item.ivaventa;
			var columna3 = document.createElement("th");
			columna3.innerHTML = item.nitproveedor;
			var columna4 = document.createElement("th");
			columna4.innerHTML = item.nombre_producto;
			var columna5 = document.createElement("th");
			columna5.innerHTML = item.precio_compra;
			var columna6 = document.createElement("th");
			columna6.innerHTML = item.precio_venta;

			var columna7 = document.createElement("th");

			var button = document.createElement("button");
			var idbtn = document.createAttribute("id");
			idbtn.value = item.codigo_producto;
			button.setAttributeNode(idbtn);
			var classbtn = document.createAttribute("class");
			classbtn.value = "btn btn-danger btnEliminar";
			button.setAttributeNode(classbtn);
			var icon = document.createElement("i");
			var classicon = document.createAttribute("class");
			classicon.value = "fa fa-trash";
			icon.setAttributeNode(classicon);

			lista.appendChild(tr);
			tr.appendChild(columna1);
			tr.appendChild(columna2);
			tr.appendChild(columna3);
			tr.appendChild(columna4);
			tr.appendChild(columna5);
			tr.appendChild(columna6);
			tr.appendChild(columna7);
			columna7.appendChild(button);
			button.appendChild(icon);

		});
		$("#tablas").DataTable
			({
				"language": {
					"info": "Mostrando _START_ a _END_ de _TOTAL_ registros",
					"search": "Buscar",
					"lengthMenu": "Mostrar _MENU_ registros",
					"paginate": {
						"first": "Primero",
						"last": "Último",
						"next": "Siguiente",
						"previous": "Anterior"
					},
					"infoFiltered": "(Filtrado de _MAX_ resgistros totales)",
					"emptyTable": "No hay datos disponibles",
					"infoEmpty": "Mostrando 0 a 0 de 0 registros",
					"loadingRecords": "Cargando...",
					"processing": "Procesando...",
					"zeroRecords": "Registros no encontrados"
				},
				searching: true

			});

	}
});


function nameFile() {
	var name = document.getElementById('fileUpload').files[0].name;
	document.getElementById("inputArchivo").value = name;
}

$("#cargar").click(function(event) {
	var archivo = document.getElementById('fileUpload').files[0];
	var reader = new FileReader();
	reader.onload = function(e) {
		var array = e.target.result.split("\n");
		if (array.length != 0) {
			for (var i = 1; i < array.length; i++) {
				var campo = array[i].split(",");
				var codigoProduct = campo[0];
				var ivaProduct = campo[1];
				var nitProve = campo[2];
				var nombreProduct = campo[3];
				var prcomProduct = campo[4];
				var prvenProduct = campo[5];


				var productoJson = {
					codigo_producto: codigoProduct,
					ivaventa: ivaProduct,
					nitproveedor: nitProve,
					nombre_producto: nombreProduct,
					precio_compra: prcomProduct,
					precio_venta: prvenProduct
				}

				$.ajax({
					type: "POST",
					data: JSON.stringify(productoJson), // Permite convertir el string usuarioJson a objeto json
					url: baseUrl + "Productos/",
					contentType: "application/json",
					success: function() {
						location.reload();
					}
				})
			}
			alert("Documento Cargado Exitosamente")
			location.reload();
		}else{
			alert("Documento Vacio")
		}
		
	};
	reader.readAsText(archivo);


});


$('table').on('click', '.btnEliminar', function() {
	var codigo = $(this).attr('id')
	$.ajax({
		type: "DELETE",
		url: baseUrl + "Productos/" + codigo,
		contentType: "application/json",
		success: function() {
			alert("El producto fue borrado correctamente");
			location.reload();
		}
	})
})
