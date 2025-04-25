package br.univille.projetofabsoftfinancas.service;

import java.util.List;

import br.univille.projetofabsoftfinancas.entity.Receita;

public interface ReceitaService {
    Receita save(Receita receita);
    List<Receita> getAll();
    Receita getById(long id);
    Receita delete(long id);
}