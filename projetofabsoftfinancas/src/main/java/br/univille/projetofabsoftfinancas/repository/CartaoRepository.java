package br.univille.projetofabsoftfinancas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.univille.projetofabsoftfinancas.entity.Cartao;

@Repository
public interface CartaoRepository 
        extends JpaRepository<Cartao,Long>{
        }