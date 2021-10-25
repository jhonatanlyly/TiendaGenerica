package com.ubosque.DAO;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.ubosque.DTO.Producto;

public class ProductoDAO {	

	public Producto crearProducto(Producto producto) {

		Connection connection = new Connection();
		try {
			String query = "INSERT INTO productos VALUES (?,?,?,?,?,?)";
			PreparedStatement statement = connection.getConnection().prepareStatement(query);
			statement.setInt(1, producto.getCodigo_producto());
			statement.setDouble(2, producto.getIvaventa());
			statement.setInt(3, producto.getNitproveedor());
			statement.setString(4, producto.getNombre_producto());
			statement.setDouble(5, producto.getPrecio_compra());
			statement.setDouble(6, producto.getPrecio_venta());
			statement.executeUpdate();
			statement.close();
			connection.closeConnection();
		} catch (SQLException e) {
			e.getMessage();
		}
		return producto;
	}

	public ArrayList<Producto> ListProductos() {
		ArrayList<Producto> productos = new ArrayList<Producto>();
		Connection connection = new Connection();

		try {
			PreparedStatement statement = connection.getConnection().prepareStatement(
					"SELECT codigo_producto, ivaventa, nitproveedor, nombre_producto, precio_compra, precio_venta FROM productos");
			ResultSet result = statement.executeQuery();
			while (result.next()) {
				Producto producto = new Producto();
				producto.setCodigo_producto(result.getInt("codigo_producto"));
				producto.setIvaventa(result.getDouble("ivaventa"));
				producto.setNitproveedor(result.getInt("nitproveedor"));
				producto.setNombre_producto(result.getString("nombre_producto"));
				producto.setPrecio_compra(result.getDouble("precio_compra"));
				producto.setPrecio_venta(result.getDouble("precio_venta"));
				productos.add(producto);
			}
			result.close();
			statement.close();
			connection.closeConnection();
		} catch (SQLException e) {
			System.out.println("No se pudo ejecutar la consulta \n" + e);
		}
		return productos;
	}

	// CRUD ELIMINAR
	public void eliminarProducto(int codigo) {

		Connection connection = new Connection();
		try {
			String query = "DELETE FROM productos WHERE codigo_producto = ?";
			PreparedStatement statement = connection.getConnection().prepareStatement(query);
			statement.setInt(1, codigo);
			statement.executeUpdate();
			statement.close();
			connection.closeConnection();
		} catch (SQLException e) {
			e.getMessage();
		}
	}
}