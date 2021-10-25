package com.ubosque.tiendavirtual;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ubosque.DAO.ProveedorDAO;
import com.ubosque.DTO.Proveedor;

//API
@RestController

@RequestMapping("/Proveedores")
public class ProveedorController {
	
	ProveedorDAO proveedorDAO = new ProveedorDAO();
	
	@RequestMapping("/Lista")
	public ArrayList<Proveedor> listaProveedor(){				
		return proveedorDAO.ListaProveedores();
	}
		
	//Create = POST
	@PostMapping("/createProveedor")
	public Proveedor createProveedor(int nitproveedor, String ciudad_proveedor, String direccion_proveedor, String nombre_proveedor, String telefono_proveedor) {
		Proveedor proveedor = new Proveedor();
		proveedor.setNitproveedor(nitproveedor);		
		proveedor.setCiudad_proveedor(ciudad_proveedor);
		proveedor.setDireccion_proveedor(direccion_proveedor);
		proveedor.setNombre_proveedor(nombre_proveedor);
		proveedor.setTelefono_proveedor(telefono_proveedor);
		proveedorDAO.crearProveedor(proveedor);
		return proveedor;
	}	
	
	//Read = GET
	@GetMapping(value="{nit}")
	public Proveedor userByID(@PathVariable("nit") int nit) {
		return proveedorDAO.leerProveedor(nit);
	}
	
	
	//Update = PUT
	//@PutMapping
	@PostMapping("/updateProveedor")
	public Proveedor updateProveedor(int nitproveedor, String ciudad_proveedor, String direccion_proveedor, String nombre_proveedor, String telefono_proveedor) {
		Proveedor proveedor = new Proveedor();		
		proveedor.setNitproveedor(nitproveedor);		
		proveedor.setCiudad_proveedor(ciudad_proveedor);
		proveedor.setDireccion_proveedor(direccion_proveedor);
		proveedor.setNombre_proveedor(nombre_proveedor);
		proveedor.setTelefono_proveedor(telefono_proveedor);
		proveedorDAO.actualizarProveedor(proveedor);
		return proveedor;
	}	
	
	//Delete = DELETE
	@DeleteMapping(value="{nit}")
	public void deleteProveedor(@PathVariable("nit") int nit) {
		proveedorDAO.eliminarProveedor(nit);
	}
}