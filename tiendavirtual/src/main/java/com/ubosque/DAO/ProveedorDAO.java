package com.ubosque.DAO;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import javax.swing.JOptionPane;
import com.ubosque.DTO.Proveedor;

public class ProveedorDAO {
	
	// CRUD LEER
		public Proveedor leerProveedor(int nit) {
			Connection connection = new Connection();
			Proveedor proveedor = new Proveedor();
			
			try {
				
				String query = "SELECT * FROM proveedores WHERE nitproveedor =?";
				PreparedStatement statement = connection.getConnection().prepareStatement(query);
				statement.setInt(1, nit);
				ResultSet result = statement.executeQuery();
				while(result.next()) {
					proveedor.setNitproveedor(Integer.parseInt(result.getString("nitproveedor")));
					proveedor.setCiudad_proveedor(result.getString("ciudad_proveedor"));
					proveedor.setDireccion_proveedor(result.getString("direccion_proveedor"));
					proveedor.setNombre_proveedor(result.getString("nombre_proveedor"));					
					proveedor.setTelefono_proveedor(result.getString("telefono_proveedor"));				
				}
				result.close();
				statement.close();	
				connection.closeConnection();
			} catch(SQLException e) {
				e.getMessage();
			}		
			return proveedor;		
		}
		
		// CRUD CREAR
		public Proveedor crearProveedor(Proveedor proveedor) {
			
			Connection connection = new Connection();		
			try {
				String query = "INSERT INTO proveedores VALUES (?,?,?,?,?)";
				PreparedStatement statement = connection.getConnection().prepareStatement(query);
				statement.setInt(1, proveedor.getNitproveedor());
				statement.setString(2, proveedor.getCiudad_proveedor());
				statement.setString(3, proveedor.getDireccion_proveedor());
				statement.setString(4, proveedor.getNombre_proveedor());
				statement.setString(5, proveedor.getTelefono_proveedor());
				statement.executeUpdate();		
				statement.close();			
				connection.closeConnection();
			} catch (SQLException e){
				e.getMessage();
			}			
			return proveedor;
		}
		
		// CRUD ACTUALIZAR
		public void actualizarProveedor(Proveedor proveedor) {
			
			Connection connection = new Connection();		
			try {
				String query = "UPDATE proveedores SET ciudad_proveedor=?, direccion_proveedor=?, nombre_proveedor=?, telefono_proveedor=? WHERE nitproveedor=?";
				PreparedStatement statement = connection.getConnection().prepareStatement(query);
				statement.setString(1, proveedor.getCiudad_proveedor());			
				statement.setString(2, proveedor.getDireccion_proveedor());
				statement.setString(3, proveedor.getNombre_proveedor());
				statement.setString(4, proveedor.getTelefono_proveedor());
				statement.setInt(5, proveedor.getNitproveedor());
				statement.executeUpdate();				
				statement.close();			
				connection.closeConnection();
			} catch (SQLException e){
				e.getMessage();
			}		
		}
			
		// CRUD ELIMINAR
		public void eliminarProveedor(int nit) {
			
			Connection connection = new Connection();		
			try {
				String query = "DELETE FROM proveedores WHERE nitproveedor = ?";
				PreparedStatement statement = connection.getConnection().prepareStatement(query);
				statement.setInt(1, nit);
				statement.executeUpdate();			
				statement.close();
				connection.closeConnection();
			} catch (SQLException e){
				e.getMessage();
			}		
		}

		
		// Listar Proveedors
		public ArrayList<Proveedor> ListaProveedores(){
			ArrayList<Proveedor> proveedores = new ArrayList<Proveedor>();
			Connection connection = new Connection();
			
			try {
				PreparedStatement statement = connection.getConnection().prepareStatement("SELECT * FROM proveedores");
				ResultSet result = statement.executeQuery();
				while(result.next()) {
					Proveedor proveedor = new Proveedor();
					proveedor.setNitproveedor(Integer.parseInt(result.getString("nitproveedor")));
					proveedor.setCiudad_proveedor(result.getString("ciudad_proveedor"));
					proveedor.setDireccion_proveedor(result.getString("direccion_proveedor"));
					proveedor.setNombre_proveedor(result.getString("nombre_proveedor"));
					proveedor.setTelefono_proveedor(result.getString("telefono_proveedor"));				
					proveedores.add(proveedor);
				}
				result.close();
				statement.close();
				connection.closeConnection();
			} catch (SQLException e){
				JOptionPane.showMessageDialog(null, "No se pudo ejecutar la consulta \n" + e);
			}
			return proveedores;
		}

}