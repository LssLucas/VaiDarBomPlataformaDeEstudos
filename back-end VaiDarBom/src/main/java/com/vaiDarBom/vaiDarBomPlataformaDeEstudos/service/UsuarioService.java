package com.vaiDarBom.vaiDarBomPlataformaDeEstudos.service;

import java.nio.charset.Charset;
import java.util.Optional;

import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.vaiDarBom.vaiDarBomPlataformaDeEstudos.model.Usuario;
import com.vaiDarBom.vaiDarBomPlataformaDeEstudos.model.UsuarioLogin;
import com.vaiDarBom.vaiDarBomPlataformaDeEstudos.repository.UsuarioRepository;


@Service
public class UsuarioService {
	
	@Autowired
	private UsuarioRepository repository;
	
	public Usuario CadastrarUsuario (Usuario usuario) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		
		String senhaEncoder = encoder.encode(usuario.getSenha());
		usuario.setSenha(senhaEncoder);
		
		return repository.save(usuario); 
	}
	
	public Optional<UsuarioLogin> Logar(Optional<UsuarioLogin> user) {
		
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		Optional<Usuario> usuario = repository.findByUsuario(user.get().getUsuario());
		
		if(usuario.isPresent()) {
			if(encoder.matches(user.get().getSenha(), usuario.get().getSenha()));{
				
				String auth = user.get().getSenha()+":"+ user.get().getSenha();
				byte[] encodeAuth = Base64.encodeBase64(auth.getBytes(Charset.forName("US-ASCII")));
				String authHeader = "Basic "+new String(encodeAuth);
				
				user.get().setToken(authHeader);
				user.get().setSenha(usuario.get().getSenha());//insira uma linha de codigo
				user.get().setNome(usuario.get().getNome());
				
				return user;
			}
		}
		return null;
	}
}
