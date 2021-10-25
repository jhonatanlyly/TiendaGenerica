package com.ubosque.tiendavirtual;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ubosque.DAO.ProductoDAO;
import com.ubosque.DTO.Producto;
import com.ubosque.DTO.Usuario;


@RestController

@RequestMapping("/Productos")
public class ProductoController {
	
ProductoDAO productoDAO = new ProductoDAO();
	

	
	@RequestMapping("/Lista")
	public ArrayList<Producto> listaProducto(){				
		return productoDAO.ListProductos();
	}
	
	//Delete = DELETE
	@DeleteMapping(value="{codigo}")
	public void deleteProducto(@PathVariable("codigo") int codigo) {
		productoDAO.eliminarProducto(codigo);
	}
	
	@PostMapping
	public Producto createProduct(@RequestBody Producto producto) {		
		productoDAO.crearProducto(producto);
		return producto;
	}

}