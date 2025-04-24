package br.univille.projetofabsoftfinancas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.univille.projetofabsoftfinancas.entity.Objetivo;

@Repository
public interface ObjetivoRepository 
        extends JpaRepository<Objetivo,Long>{
        }