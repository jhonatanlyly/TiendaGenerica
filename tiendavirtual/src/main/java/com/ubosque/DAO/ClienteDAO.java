package com.ubosque.DAO;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import javax.swing.JOptionPane;
import com.ubosque.DTO.Cliente;


public class ClienteDAO {
	
	// CRUD LEER
		public Cliente leerCliente(int cedula) {
			Connection connection = new Connection();
			Cliente cliente = new Cliente();
			
			try {
				
				String query = "SELECT * FROM clientes WHERE cedula_cliente =?";
				PreparedStatement statement = connection.getConnection().prepareStatement(query);
				statement.setInt(1, cedula);
				ResultSet result = statement.executeQuery();
				while(result.next()) {
					cliente.setCedula_cliente(Integer.parseInt(result.getString("cedula_cliente")));
					cliente.setDireccion_cliente(result.getString("direccion_cliente"));
					cliente.setEmail_cliente(result.getString("email_cliente"));
					cliente.setNombre_cliente(result.getString("nombre_cliente"));					
					cliente.setTelefono_cliente(result.getString("telefono_cliente"));				
				}
				result.close();
				statement.close();
				connection.closeConnection();
			} catch(SQLException e) {
				e.getMessage();
			}		
			return cliente;		
		}
		
		// CRUD CREAR
		public Cliente crearCliente(Cliente cliente) {
			
			Connection connection = new Connection();		
			try {
				String query = "INSERT INTO clientes VALUES (?,?,?,?,?)";
				PreparedStatement statement = connection.getConnection().prepareStatement(query);
				statement.setInt(1, cliente.getCedula_cliente());
				statement.setString(2, cliente.getDireccion_cliente());
				statement.setString(3, cliente.getEmail_cliente());
				statement.setString(4, cliente.getNombre_cliente());
				statement.setString(5, cliente.getTelefono_cliente());
				statement.executeUpdate();		
				statement.close();			
				connection.closeConnection();
			} catch (SQLException e){
				e.getMessage();
			}			
			return cliente;
		}
		
		// CRUD ACTUALIZAR
		public void actualizarCliente(Cliente cliente) {
			
			Connection connection = new Connection();		
			try {
				String query = "UPDATE clientes SET direccion_cliente=?, email_cliente=?, nombre_cliente=?, telefono_cliente=? WHERE cedula_cliente=?";
				PreparedStatement statement = connection.getConnection().prepareStatement(query);
				statement.setString(1, cliente.getDireccion_cliente());			
				statement.setString(2, cliente.getEmail_cliente());
				statement.setString(3, cliente.getNombre_cliente());
				statement.setString(4, cliente.getTelefono_cliente());
				statement.setInt(5, cliente.getCedula_cliente());
				statement.executeUpdate();				
				statement.close();			
				connection.closeConnection();
			} catch (SQLException e){
				e.getMessage();
			}		
		}
			
		// CRUD ELIMINAR
		public void eliminarCliente(int cedula) {
			
			Connection connection = new Connection();		
			try {
				String query = "DELETE FROM clientes WHERE cedula_cliente = ?";
				PreparedStatement statement = connection.getConnection().prepareStatement(query);
				statement.setInt(1, cedula);
				statement.executeUpdate();			
				statement.close();			
				connection.closeConnection();
			} catch (SQLException e){
				e.getMessage();
			}		
		}

		
		// Listar Clientes
		public ArrayList<Cliente> ListaClientes(){
			ArrayList<Cliente> clientes = new ArrayList<Cliente>();
			Connection connection = new Connection();
			
			try {
				PreparedStatement statement = connection.getConnection().prepareStatement("SELECT * FROM clientes");
				ResultSet result = statement.executeQuery();
				while(result.next()) {
					Cliente cliente = new Cliente();
					cliente.setCedula_cliente(Integer.parseInt(result.getString("cedula_cliente")));
					cliente.setDireccion_cliente(result.getString("direccion_cliente"));
					cliente.setEmail_cliente(result.getString("email_cliente"));
					cliente.setNombre_cliente(result.getString("nombre_cliente"));
					cliente.setTelefono_cliente(result.getString("telefono_cliente"));				
					clientes.add(cliente);
				}
				result.close();
				statement.close();
				connection.closeConnection();
			} catch (SQLException e){
				JOptionPane.showMessageDialog(null, "No se pudo ejecutar la consulta \n" + e);
			}
			return clientes;
		}
}
