package br.univille.projetofabsoftfinancas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.univille.projetofabsoftfinancas.entity.Investimento;

@Repository
public interface InvestimentoRepository
        extends JpaRepository<Investimento,Long>{
        }