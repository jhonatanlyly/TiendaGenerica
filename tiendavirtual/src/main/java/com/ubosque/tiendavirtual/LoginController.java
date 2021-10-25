package com.ubosque.tiendavirtual;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ubosque.DAO.UsuarioDAO;
import com.ubosque.DTO.Usuario;

@RestController

@RequestMapping("/Login")
public class LoginController {
	UsuarioDAO usuarioDAO = new UsuarioDAO();
	
	@GetMapping(value = "{usuario}")
	public Usuario userByUser(@PathVariable("usuario") String User) {		
		return usuarioDAO.ValidarLogin(User);
	}
}
