<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@page import="java.sql.*"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
	crossorigin="anonymous">
<!-- <link rel="stylesheet" type="text/css" href="css/index.css"> -->
<link rel="stylesheet" type="text/css" href="css/signin.css">

<title>Tienda Virtual</title>
</head>
<body class="text-center">
	<div class="container">
		<nav
			class="navbar navbar-expand-lg navbar-dark bg-secondary py-3 rounded">
			<a class="navbar-brand" href="#"><img src="img/fruits.png"
				alt="Logo"  style="width: 50px; height: 50px;"> </a>
		</nav>
		<div class="container theme-showcase" role="main">
		<br>
			<h3>Tienda Virtual</h3>
			<hr class="featurette-divider">
			<img src="/img/login.png" width="136" height="136" class="center">
			<form class="form-signin" method="post">
				<h3 class="form-signin-heading text-center">Iniciar Session</h3>
				<label for="username" class="sr-only"></label> <input type="text"
					id="inputUser" name="inputUser" class="form-control"
					placeholder="Usuario" required autofocus> <br> <label
					for="password" class="sr-only"></label> <input type="password"
					id="inputPassword" name="inputPassword" class="form-control"
					placeholder="Password" required>
				<button class="btn btn-lg btn-primary btn-block" type="button"
					onclick="login()">Entrar</button>
			</form>

		</div>
	</div>
	<script src="scripts/index.js"></script>
	<script
		src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</body>

</html>