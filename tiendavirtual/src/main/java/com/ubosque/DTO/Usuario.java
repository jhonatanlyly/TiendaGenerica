package com.ubosque.DTO;

public class Usuario {
	private int cedulaUsuario;
	private String emailUsuario;
	private String nombreUsuario;
	private String password;
	private String usuario;
	public int getCedulaUsuario() {
		return cedulaUsuario;
	}
	public void setCedulaUsuario(int cedulaUsuario) {
		this.cedulaUsuario = cedulaUsuario;
	}
	public String getEmailUsuario() {
		return emailUsuario;
	}
	public void setEmailUsuario(String emailUsuario) {
		this.emailUsuario = emailUsuario;
	}
	public String getNombreUsuario() {
		return nombreUsuario;
	}
	public void setNombreUsuario(String nombreUsuario) {
		this.nombreUsuario = nombreUsuario;
	}
	public String getPasswordUsuario() {
		return password;
	}
	public void setPasswordUsuario(String passwordUsuario) {
		this.password = passwordUsuario;
	}
	public String getUsuario() {
		return usuario;
	}
	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	
}
