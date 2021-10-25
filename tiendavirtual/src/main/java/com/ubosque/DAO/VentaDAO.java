package com.ubosque.DAO;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.swing.JOptionPane;

import com.ubosque.DTO.Cliente;
import com.ubosque.DTO.Producto;
import com.ubosque.DTO.TotalVenta;
import com.ubosque.DTO.Usuario;
import com.ubosque.DTO.Venta;

public class VentaDAO {
	
	
	public int id_incrementable() {
		int id = 1;
		Connection connection = new Connection();		
		
		try {
			String query = "SELECT MAX(codigo_venta) FROM ventas";
			PreparedStatement statement = connection.getConnection().prepareStatement(query);
			ResultSet result = statement.executeQuery();			
			while(result.next()) {	
				id = result.getInt(1)+1;				
			}
			result.close();
			statement.close();	
			connection.closeConnection();
		} catch (SQLException e){
			e.getMessage();
		}			
		return id;	
	}
	
	// CRUD CREAR
		public Venta crearVenta(Venta venta) {
			
			VentaDAO ventaDAO = new VentaDAO();
			Connection connection = new Connection();		
			try {
				
				int id = ventaDAO.id_incrementable();
				
				String query = "INSERT INTO ventas VALUES (?,?,?,?,?,?)";
				PreparedStatement statement = connection.getConnection().prepareStatement(query);				
				
				statement.setInt(1, id);
				statement.setDouble(2, venta.getIvaventa());
				statement.setDouble(3, venta.getTotal_venta());
				statement.setDouble(4, venta.getValor_venta());
				statement.setInt(5, 5);
				statement.setInt(6, venta.getCedula_cliente());				
				statement.executeUpdate();		
				statement.close();
				connection.closeConnection();
			} catch (SQLException e){
				e.getMessage();
			}			
			return venta;
		}		
		
		// LEER CLIENTE
		public Cliente leerClienteVenta(int cedula) {
			Connection connection = new Connection();
			Cliente cliente = new Cliente();
			
			try {
				
				String query = "SELECT * FROM clientes WHERE cedula_cliente =?";
				PreparedStatement statement = connection.getConnection().prepareStatement(query);
				statement.setInt(1, cedula);
				ResultSet result = statement.executeQuery();
				while(result.next()) {	
					cliente.setNombre_cliente(result.getString("nombre_cliente"));						
					}
				result.close();
				statement.close();	
				connection.closeConnection();
			} catch(SQLException e) {
				e.getMessage();
			}		
			return cliente;		
		}
		
		// LEER PRODUCTO
		public Producto leerProductoVenta(int cod_producto) {
			Connection connection = new Connection();
			Producto producto = new Producto();

			try {

				String query = "SELECT * FROM productos WHERE codigo_producto =?";
				PreparedStatement statement = connection.getConnection().prepareStatement(query);
				statement.setInt(1, cod_producto);
				ResultSet result = statement.executeQuery();
				while(result.next()) {	
					producto.setNombre_producto(result.getString("nombre_producto"));						
				}
				result.close();
				statement.close();	
				connection.closeConnection();
			} catch(SQLException e) {
				e.getMessage();
			}		
			return producto;		
		}

		// CALCULAR TOTAL PRODUCTO
		public Producto calcularTotalProducto(int cod_producto) {
			Connection connection = new Connection();
			Producto producto = new Producto();

			try {

				String query = "SELECT * FROM productos WHERE codigo_producto =?";
				PreparedStatement statement = connection.getConnection().prepareStatement(query);
				statement.setInt(1, cod_producto);
				ResultSet result = statement.executeQuery();
				while(result.next()) {	
					producto.setPrecio_compra(result.getDouble("precio_compra"));						
				}
				result.close();
				statement.close();		
				connection.closeConnection();
			} catch(SQLException e) {
				e.getMessage();
			}		
			return producto;		
		}		
		
		// LISTAR VENTAS POR CLIENTE
		public ArrayList<Venta> ListaVentasCompleta(){
			ArrayList<Venta> ventas = new ArrayList<Venta>();
			Connection connection = new Connection();
			
			try {
				PreparedStatement statement = connection.getConnection().prepareStatement("SELECT codigo_venta, ivaventa, total_venta, valor_venta, cedula_usuario,cedula_cliente FROM ventas");
				ResultSet result = statement.executeQuery();
				while(result.next()) {
					Venta venta = new Venta();
					venta.setCodigo_venta(Integer.parseInt(result.getString("codigo_venta")));
					venta.setIvaventa(result.getDouble("ivaventa"));
					venta.setTotal_venta(result.getDouble("total_venta"));
					venta.setValor_venta(result.getDouble("valor_venta"));
					venta.setCedula_usuario(result.getInt("cedula_usuario"));
					venta.setCedula_cliente(result.getInt("cedula_cliente"));				
					ventas.add(venta);
				}
				result.close();
				statement.close();
				connection.closeConnection();
			} catch (SQLException e){
				JOptionPane.showMessageDialog(null, "No se pudo ejecutar la consulta \n" + e);
			}
			return ventas;
		}
		
		// CRUD LEER VENTA
		public Venta leerVenta(int cod_venta) {
			Connection connection = new Connection();
			Venta venta = new Venta();
			
			try {
				
				String query = "SELECT * FROM ventas WHERE codigo_venta =?";
				PreparedStatement statement = connection.getConnection().prepareStatement(query);
				statement.setInt(1, cod_venta);
				ResultSet result = statement.executeQuery();
				while(result.next()) {
					venta.setCodigo_venta(Integer.parseInt(result.getString("codigo_venta")));
					venta.setIvaventa(result.getDouble("ivaventa"));
					venta.setTotal_venta(result.getDouble("total_venta"));
					venta.setValor_venta(result.getDouble("valor_venta"));
					venta.setCedula_usuario(result.getInt("cedula_usuario"));
					venta.setCedula_cliente(result.getInt("cedula_cliente"));					
				}
				result.close();
				statement.close();		
				connection.closeConnection();
			} catch(SQLException e) {
				e.getMessage();
			}		
			return venta;		
		}
}