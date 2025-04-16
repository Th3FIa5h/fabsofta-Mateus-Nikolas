package br.univille.projetofabsoftfinancas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import br.univille.projetofabsoftfinancas.entity.LimiteGastos;

@Repository
public interface LimiteGastosRepository 
        extends JpaRepository<LimiteGastos,Long>{
        }
