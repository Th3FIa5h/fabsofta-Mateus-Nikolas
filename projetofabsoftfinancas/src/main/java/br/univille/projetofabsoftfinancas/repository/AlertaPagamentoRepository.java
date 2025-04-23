package br.univille.projetofabsoftfinancas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import br.univille.projetofabsoftfinancas.entity.AlertaPagamento;

@Repository
public interface AlertaPagamentoRepository 
        extends JpaRepository<AlertaPagamento,Long>{
        }