package com.ubosque.tiendavirtual;

import com.ubosque.DAO.UsuarioDAO;
import com.ubosque.DTO.Usuario;
import java.util.ArrayList;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// API
@RestController

@RequestMapping("/Usuarios")
public class UsuarioController {

	UsuarioDAO usuarioDAO = new UsuarioDAO();

	@RequestMapping("/Lista")
	public ArrayList<Usuario> listaUsuario(){				
		return usuarioDAO.ListUsers();
	}

	//Create = POST
	@PostMapping
	public Usuario createUser(@RequestBody Usuario usuario) {		
		usuarioDAO.crearUsuario(usuario);
		return usuario;
	}

	//Read = GET
	@GetMapping(value="{cedula}")
	public Usuario userByID(@PathVariable("cedula") int cedula) {
		return usuarioDAO.leerUsuario(cedula);
	}
	
	//Update = PUT
	@PostMapping("/updateUser")
	public Usuario updateUser(int cedulaUsuario, String emailUsuario, String nombreUsuario, String passwordUsuario, String usuario) {
		Usuario usuarioModificado = new Usuario();
		usuarioModificado.setCedulaUsuario(cedulaUsuario);
		usuarioModificado.setEmailUsuario(emailUsuario);
		usuarioModificado.setNombreUsuario(nombreUsuario);
		usuarioModificado.setPasswordUsuario(passwordUsuario);
		usuarioModificado.setUsuario(usuario);
		usuarioDAO.actualizarUsuario(usuarioModificado);
		return usuarioModificado;
	}	

	//Delete = DELETE
	@DeleteMapping(value="{cedula}")	
	public void deleteUser(@PathVariable("cedula") int cedula) {
		usuarioDAO.eliminarUsuario(cedula);
	}
}
