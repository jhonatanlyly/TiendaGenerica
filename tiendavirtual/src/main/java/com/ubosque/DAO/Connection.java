package com.ubosque.DAO;
import java.sql.*;

public class Connection {	
	
	/*String database="tienda";
	String user="root";
	String password="admin";
	String url="jdbc:mysql://localhost/"+database;*/
	
	
	String database="tiendagenericag05";
    String user="admin";
    String password= "grupo54a";
    String hostname= "dbgrupo54.c47knbsonjdi.us-east-2.rds.amazonaws.com";
    String port= "3306";
    String url= "jdbc:mariadb://" + hostname + ":" + port + "/" + database + "?user=" + user + "&password=" + password;

	java.sql.Connection connection = null;	
	
	public java.sql.Connection getConnection() {
		try	{
			//Class.forName("com.mysql.cj.jdbc.Driver");
			Class.forName("org.mariadb.jdbc.Driver");
			//connection = DriverManager.getConnection(url, user, password);
			connection = DriverManager.getConnection(url);
			if(connection!=null) {
				System.out.println("Conexion exitosa");				
			}
		} catch(SQLException e) {
			e.getMessage();
		} catch(ClassNotFoundException e) {
			e.getMessage();
		}
		return connection;
	}
	
	public void closeConnection() {
	    try {
	        connection.close();
	    } catch (Exception e) {
	        e.printStackTrace();
	    }
	}
}