package br.univille.projetofabsoftfinancas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.univille.projetofabsoftfinancas.entity.Receita;

@Repository
public interface ReceitaRepository
        extends JpaRepository<Receita,Long>{
        }