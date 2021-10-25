package com.ubosque.tiendavirtual;

import com.ubosque.DAO.Connection;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TiendavirtualApplication {

	public static void main(String[] args) {
		SpringApplication.run(TiendavirtualApplication.class, args);
		Connection connection = new Connection();
		connection.getConnection();				
	}
}
