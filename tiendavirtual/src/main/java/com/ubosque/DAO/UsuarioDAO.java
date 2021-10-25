package com.ubosque.DAO;

import com.ubosque.DTO.Usuario;
import java.sql.*;
import java.util.ArrayList;
import javax.swing.JOptionPane;

public class UsuarioDAO {
	
	// Validar Usuario en Login
	public Usuario ValidarLogin(String user) {
		Connection connection = new Connection();
		Usuario usuario = new Usuario();
		try {			
			String query = "SELECT * FROM usuarios WHERE usuario = ?";
			PreparedStatement statement = connection.getConnection().prepareStatement(query);
			statement.setString(1, user);
			ResultSet result = statement.executeQuery();
			while(result.next()) {
				usuario.setCedulaUsuario(Integer.parseInt(result.getString("cedula_usuario")));
				usuario.setEmailUsuario(result.getString("email_usuario"));
				usuario.setNombreUsuario(result.getString("nombre_usuario"));
				usuario.setPasswordUsuario(result.getString("password"));
				usuario.setUsuario(result.getString("usuario"));				
			}
			result.close();
			statement.close();	
			connection.closeConnection();
		} catch(SQLException e) {
			e.getMessage();
		}	
		return usuario;
	}
	
	// CRUD LEER
	public Usuario leerUsuario(int cedula) {
		Connection connection = new Connection();
		Usuario usuario = new Usuario();
		
		try {
			
			String query = "SELECT * FROM usuarios WHERE cedula_usuario =?";
			PreparedStatement statement = connection.getConnection().prepareStatement(query);
			statement.setInt(1, cedula);
			ResultSet result = statement.executeQuery();
			while(result.next()) {
				usuario.setCedulaUsuario(Integer.parseInt(result.getString("cedula_usuario")));
				usuario.setEmailUsuario(result.getString("email_usuario"));
				usuario.setNombreUsuario(result.getString("nombre_usuario"));
				usuario.setPasswordUsuario(result.getString("password"));
				usuario.setUsuario(result.getString("usuario"));				
			}
			result.close();
			statement.close();
			connection.closeConnection();
		} catch(SQLException e) {
			e.getMessage();
		}		
		return usuario;		
	}
	
	// CRUD CREAR
	public Usuario crearUsuario(Usuario usuario) {
		
		Connection connection = new Connection();		
		try {
			String query = "INSERT INTO usuarios VALUES (?,?,?,?,?)";
			PreparedStatement statement = connection.getConnection().prepareStatement(query);
			statement.setInt(1, usuario.getCedulaUsuario());
			statement.setString(2, usuario.getEmailUsuario());
			statement.setString(3, usuario.getNombreUsuario());
			statement.setString(4, usuario.getPasswordUsuario());
			statement.setString(5, usuario.getUsuario());
			statement.executeUpdate();		
			statement.close();			
			connection.closeConnection();
		} catch (SQLException e){
			e.getMessage();
		}			
		return usuario;
	}
	
	// CRUD ACTUALIZAR
	public void actualizarUsuario(Usuario usuario) {
		
		Connection connection = new Connection();		
		try {
			String query = "UPDATE usuarios SET email_usuario=?, nombre_usuario=?, password=?, usuario=? WHERE cedula_usuario=?";
			PreparedStatement statement = connection.getConnection().prepareStatement(query);
			statement.setString(1, usuario.getEmailUsuario());			
			statement.setString(2, usuario.getNombreUsuario());
			statement.setString(3, usuario.getPasswordUsuario());
			statement.setString(4, usuario.getUsuario());
			statement.setInt(5, usuario.getCedulaUsuario());
			statement.executeUpdate();			
			statement.close();			
			connection.closeConnection();
		} catch (SQLException e){
			e.getMessage();
		}		
	}
		
	// CRUD ELIMINAR
	public void eliminarUsuario(int cedula) {
		
		Connection connection = new Connection();		
		try {
			String query = "DELETE FROM usuarios WHERE cedula_usuario = ?";
			PreparedStatement statement = connection.getConnection().prepareStatement(query);
			statement.setInt(1, cedula);
			statement.executeUpdate();			
			statement.close();			
			connection.closeConnection();
		} catch (SQLException e){
			e.getMessage();
		}		
	}

	
	// Listar Usuarios
	public ArrayList<Usuario> ListUsers(){
		ArrayList<Usuario> usuarios = new ArrayList<Usuario>();
		Connection connection = new Connection();
		
		try {
			PreparedStatement statement = connection.getConnection().prepareStatement("SELECT cedula_usuario, email_usuario, nombre_usuario, password, usuario FROM usuarios");
			ResultSet result = statement.executeQuery();
			while(result.next()) {
				Usuario usuario = new Usuario();
				usuario.setCedulaUsuario(Integer.parseInt(result.getString("cedula_usuario")));
				usuario.setEmailUsuario(result.getString("email_usuario"));
				usuario.setNombreUsuario(result.getString("nombre_usuario"));
				usuario.setPasswordUsuario(result.getString("password"));
				usuario.setUsuario(result.getString("usuario"));				
				usuarios.add(usuario);
			}
			result.close();
			statement.close();
			connection.closeConnection();
		} catch (SQLException e){
			JOptionPane.showMessageDialog(null, "No se pudo ejecutar la consulta \n" + e);
		}
		return usuarios;
	}
}
