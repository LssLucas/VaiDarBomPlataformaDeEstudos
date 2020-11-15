package com.vaiDarBom.vaiDarBomPlataformaDeEstudos.controller;

import java.util.List;
import java.util.Optional;//Lucas

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.vaiDarBom.vaiDarBomPlataformaDeEstudos.model.Usuario;
import com.vaiDarBom.vaiDarBomPlataformaDeEstudos.model.UsuarioLogin;//Lucas
import com.vaiDarBom.vaiDarBomPlataformaDeEstudos.repository.UsuarioRepository;
import com.vaiDarBom.vaiDarBomPlataformaDeEstudos.service.UsuarioService;//Lucas

@RestController
@RequestMapping ("/usuarios")
@CrossOrigin("*")
public class UsuarioController {
	
	@Autowired
	UsuarioRepository repository;
	
	@Autowired
	private UsuarioService UsuarioService;

	@GetMapping
	public ResponseEntity <List<Usuario>> getAll()
	{
		return ResponseEntity.ok(repository.findAll());
	}
	
	@GetMapping("{/id}")
	public ResponseEntity<Usuario> getById(@PathVariable long id)
	{
		return repository.findById(id)
				.map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@GetMapping("/nome/{nome}")
	public ResponseEntity<List<Usuario>> GetByTitulo(@PathVariable String usuario)
	{
		return ResponseEntity.ok(repository.findAllByNomeContainingIgnoreCase(usuario));
	}
	@PostMapping("/logar")
	public ResponseEntity<UsuarioLogin> Autentication(@RequestBody Optional<UsuarioLogin> user) {
		return UsuarioService.Logar(user).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
	}
	@PostMapping("/cadastrar")
	public ResponseEntity<Usuario> Post(@RequestBody Usuario usuario) {
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(UsuarioService.CadastrarUsuario(usuario));
	}
	@PostMapping
	public ResponseEntity<Usuario> post (@RequestBody Usuario usuario)
	{
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(usuario));
	}
	@PutMapping
	public ResponseEntity<Usuario> put (@RequestBody Usuario usuario)
	{
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(usuario));
	}
	
	@DeleteMapping ("/{id}")
	public void delete(@PathVariable Long id) 
	{
		repository.deleteById(id);
	}
}
