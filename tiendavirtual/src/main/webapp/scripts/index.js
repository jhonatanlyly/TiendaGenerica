function login() {

	var usuario = document.getElementById("inputUser").value;
	var pass = document.getElementById("inputPassword").value;
	var getUrl = window.location;
	var baseUrl = getUrl.protocol + "//" + getUrl.hostname + ":8080/";
	//var baseUrl = getUrl.protocol + "//" + getUrl.hostname + ":8080/tiendavirtual-0.0.1-SNAPSHOT/";

	$.ajax({
		type: "GET",
		url: baseUrl+"Login/" + usuario,
		dataType: "json",
		error: function() {
			alert("Ingrese Usuario y Contrasena");
			document.getElementById("inputUser").style.borderColor = "red";
			document.getElementById("inputPassword").style.borderColor = "red";
			document.getElementById("inputUser").value = "";
			document.getElementById("inputPassword").value = "";
		}
	}).done(function(data) {//Es lo que se genera del ajax, una data en json
		if (data.usuario == null) {
			alert("Usuario no existe");
			location.reload;
			document.getElementById("inputUser").style.borderColor = "red";
		}else{
			if(pass == data.passwordUsuario){
				location.href="menu.jsp";
			}else{
				alert("Contraseña Incorrecta")
				location.reload;
				document.getElementById("inputPassword").style.borderColor = "red";
			}
		}
	})
}
