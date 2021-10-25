package com.ubosque.DAO;

import java.sql.PreparedStatement;
import java.sql.SQLException;

import com.ubosque.DTO.DetalleVenta;

public class DetalleVentaDAO {

	// CRUD CREAR
	public DetalleVenta crearDetalleVenta(DetalleVenta detalleVenta) {

		Connection connection = new Connection();		
		try {
			String query = "INSERT INTO detalle_ventas VALUES (?,?,?,?,?,?,?)";
			PreparedStatement statement = connection.getConnection().prepareStatement(query);
			statement.setInt(1, detalleVenta.getCodigo_detalle_venta());
			statement.setInt(2, detalleVenta.getCantidad_producto());
			statement.setInt(3, detalleVenta.getCodigo_producto());
			statement.setInt(4, detalleVenta.getCodigo_venta());
			statement.setDouble(5, detalleVenta.getValor_total());
			statement.setDouble(6, detalleVenta.getValor_venta());
			statement.setDouble(7, detalleVenta.getValoriva());
			statement.executeUpdate();		
			statement.close();
			connection.closeConnection();
		} catch (SQLException e){
			e.getMessage();
		}			
		return detalleVenta;
	}	
}
