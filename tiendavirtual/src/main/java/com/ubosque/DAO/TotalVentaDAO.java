package com.ubosque.DAO;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.ubosque.DTO.TotalVenta;

public class TotalVentaDAO {

	public ArrayList<TotalVenta> ListaVentas(){
		ArrayList<TotalVenta> totalVentas = new ArrayList<TotalVenta>();
		Connection connection = new Connection();
				
				try {
					PreparedStatement statement = connection.getConnection().prepareStatement("SELECT C.cedula_cliente, C.nombre_cliente, SUM(V.total_venta)\r\n"
							+ "FROM ventas AS V\r\n"
							+ "INNER JOIN clientes AS C \r\n"
							+ "ON V.cedula_cliente = C.cedula_cliente \r\n"
							+ "GROUP BY C.nombre_cliente");
							
					ResultSet result = statement.executeQuery();
					while(result.next()) {		
						
						int cedulaClie = result.getInt("C.cedula_cliente");
						String nomb_Clie = result.getString("C.nombre_cliente");
						double totVenta = result.getDouble("SUM(V.total_venta)");
						
						totalVentas.add(new TotalVenta(cedulaClie, nomb_Clie, totVenta));						
					}				
					result.close();
					statement.close();
					connection.closeConnection();
				} catch (SQLException e){
					System.out.println("No se pudo ejecutar la consulta \n" + e);
				}
				return totalVentas;
			}	
}