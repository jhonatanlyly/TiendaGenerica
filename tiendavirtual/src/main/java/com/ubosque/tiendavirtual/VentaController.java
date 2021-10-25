package com.ubosque.tiendavirtual;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ubosque.DAO.VentaDAO;
import com.ubosque.DAO.ClienteDAO;
import com.ubosque.DAO.DetalleVentaDAO;
import com.ubosque.DAO.TotalVentaDAO;
import com.ubosque.DTO.Cliente;
import com.ubosque.DTO.DetalleVenta;
import com.ubosque.DTO.Producto;
import com.ubosque.DTO.TotalVenta;
import com.ubosque.DTO.Usuario;
import com.ubosque.DTO.Venta;

@RestController

@RequestMapping("/Ventas")
public class VentaController {
	
	VentaDAO ventaDAO = new VentaDAO();
	ClienteDAO clienteDAO = new ClienteDAO();
	DetalleVentaDAO detalleVentaDAO = new DetalleVentaDAO();
	TotalVentaDAO totalVentaDAO = new TotalVentaDAO();

	//POST Crear Venta
	@PostMapping
	public Venta createVenta(@RequestBody Venta venta) {		
		ventaDAO.crearVenta(venta);
		return venta;
	}

	//POST Crear Detalle Venta
	@PostMapping("/Detalle")
	public DetalleVenta createDetalleVenta(@RequestBody DetalleVenta detalleVenta) {		
		detalleVentaDAO.crearDetalleVenta(detalleVenta);
		return detalleVenta;
	}

	@RequestMapping("/Lista")
	public ArrayList<TotalVenta> listaVenta(){				
		return totalVentaDAO.ListaVentas();
	}
	
	@RequestMapping("/ListaVen")
	public ArrayList<Venta> listaVentaCompleta(){				
		return ventaDAO.ListaVentasCompleta();
	}

	//Read = GET
	@GetMapping(value="{cedula}")
	public Cliente clienteByID(@PathVariable("cedula") int cedula) {
		return ventaDAO.leerClienteVenta(cedula);
	}
	
	//Read = GET
	@GetMapping(value="/Venta/{cod_venta}")
	public Venta ventaByID(@PathVariable("cod_venta") int cod_venta) {
		return ventaDAO.leerVenta(cod_venta);
	}
	
	//Read = GET
	@GetMapping(value="/Producto/{cod_producto}")
	public Producto productoByID(@PathVariable("cod_producto") int cod_producto) {
		return ventaDAO.leerProductoVenta(cod_producto);
	}
	
	//Read = GET
	@GetMapping(value="/Total/{cod_producto}")
	public Producto cantProductoByID(@PathVariable("cod_producto") int cod_producto) {
		return ventaDAO.calcularTotalProducto(cod_producto);
	}
}
