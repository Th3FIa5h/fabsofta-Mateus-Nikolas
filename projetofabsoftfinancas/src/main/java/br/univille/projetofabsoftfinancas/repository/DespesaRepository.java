package br.univille.projetofabsoftfinancas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import br.univille.projetofabsoftfinancas.entity.Despesa;

@Repository
public interface DespesaRepository
        extends JpaRepository<Despesa,Long>{
        }