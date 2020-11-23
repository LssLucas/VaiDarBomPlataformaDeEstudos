package com.vaiDarBom.vaiDarBomPlataformaDeEstudos.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vaiDarBom.vaiDarBomPlataformaDeEstudos.model.Tema;

public interface TemaRepository extends JpaRepository<Tema, Long> {
	
	public List<Tema> findAllByDescricaoContainingIgnoreCase (String disciplina);
}
