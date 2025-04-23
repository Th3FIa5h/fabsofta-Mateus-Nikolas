package br.univille.projetofabsoftfinancas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import br.univille.projetofabsoftfinancas.entity.Conta;

@Repository
public interface ContaRepository
        extends JpaRepository<Conta,Long>{
        }