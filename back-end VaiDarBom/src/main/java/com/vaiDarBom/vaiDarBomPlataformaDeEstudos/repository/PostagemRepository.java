package com.vaiDarBom.vaiDarBomPlataformaDeEstudos.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vaiDarBom.vaiDarBomPlataformaDeEstudos.model.Postagem;

public interface PostagemRepository extends JpaRepository<Postagem, Long> 
{
	public List<Postagem> findAllByMensagemContainingIgnoreCase(String mensagem);
	public List<Postagem> findAllByTituloContainingIgnoreCase (String titulo); 
}
