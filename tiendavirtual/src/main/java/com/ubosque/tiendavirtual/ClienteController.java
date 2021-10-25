package com.ubosque.tiendavirtual;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ubosque.DAO.ClienteDAO;
import com.ubosque.DTO.Cliente;


//API
@RestController

@RequestMapping("/Clientes")
public class ClienteController {
	
	ClienteDAO clienteDAO = new ClienteDAO();
	
	@RequestMapping("/Lista")
	public ArrayList<Cliente> listaCliente(){				
		return clienteDAO.ListaClientes();
	}
		
	//Create = POST
	@PostMapping("/createCliente")
	public Cliente createCliente(int cedula_cliente, String nombre_cliente, String direccion_cliente, String telefono_cliente, String email_cliente) {
		Cliente cliente = new Cliente();
		cliente.setCedula_cliente(cedula_cliente);		
		cliente.setDireccion_cliente(direccion_cliente);
		cliente.setEmail_cliente(email_cliente);
		cliente.setNombre_cliente(nombre_cliente);
		cliente.setTelefono_cliente(telefono_cliente);
		clienteDAO.crearCliente(cliente);
		return cliente;
	}	
	
	//Read = GET
	@GetMapping(value="{cedula}")
	public Cliente clienteByID(@PathVariable("cedula") int cedula) {
		return clienteDAO.leerCliente(cedula);
	}
	
	
	//Update = PUT
	@PostMapping("/updateCliente")
	public Cliente updateCliente(int cedula_cliente, String nombre_cliente, String direccion_cliente, String telefono_cliente, String email_cliente) {
		Cliente cliente = new Cliente();
		cliente.setCedula_cliente(cedula_cliente);		
		cliente.setDireccion_cliente(direccion_cliente);
		cliente.setEmail_cliente(email_cliente);
		cliente.setNombre_cliente(nombre_cliente);
		cliente.setTelefono_cliente(telefono_cliente);
		clienteDAO.actualizarCliente(cliente);
		return cliente;
	}	
	
	//Delete = DELETE
	@DeleteMapping(value="{cedula}")
	public void deleteCliente(@PathVariable("cedula") int cedula) {
		clienteDAO.eliminarCliente(cedula);
	}
}
