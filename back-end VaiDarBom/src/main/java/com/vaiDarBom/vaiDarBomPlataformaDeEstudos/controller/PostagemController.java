package com.vaiDarBom.vaiDarBomPlataformaDeEstudos.controller;

import java.util.List;

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

import com.vaiDarBom.vaiDarBomPlataformaDeEstudos.model.Postagem;
import com.vaiDarBom.vaiDarBomPlataformaDeEstudos.repository.PostagemRepository;

@RestController
@RequestMapping ("/postagens")
@CrossOrigin("*")
public class PostagemController {
		
	@Autowired
	PostagemRepository repository;

	@GetMapping
	public ResponseEntity <List<Postagem>> getAll()
	{
		return ResponseEntity.ok(repository.findAll());
	}
		
	@GetMapping("{/id}")
	public ResponseEntity<Postagem> getById(@PathVariable long id)
	{
		return repository.findById(id)
				.map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@GetMapping("/mensagem/{mensagem}")
	public ResponseEntity<List<Postagem>> GetByTitulo(@PathVariable String mensagem)
	{
		return ResponseEntity.ok(repository.findAllByMensagemContainingIgnoreCase(mensagem));
	}
	@PostMapping
	public ResponseEntity<Postagem> post (@RequestBody Postagem postagem)
	{
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(postagem));
	}
	
	@PutMapping
	public ResponseEntity<Postagem> put (@RequestBody Postagem postagem)
	{
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(postagem));
	}
	
	@DeleteMapping ("/{id}")
	public void delete(@PathVariable Long id) 
	{
		repository.deleteById(id);
	}
	
}
