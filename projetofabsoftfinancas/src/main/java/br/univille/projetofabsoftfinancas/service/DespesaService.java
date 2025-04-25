package br.univille.projetofabsoftfinancas.service;

import java.util.List;

import br.univille.projetofabsoftfinancas.entity.Despesa;

public interface DespesaService {
    Despesa save(Despesa despesa);
    List<Despesa> getAll();
    Despesa getById(long id);
    Despesa delete(long id);
}