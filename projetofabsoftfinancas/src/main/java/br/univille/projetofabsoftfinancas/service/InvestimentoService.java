package br.univille.projetofabsoftfinancas.service;

import java.util.List;

import br.univille.projetofabsoftfinancas.entity.Investimento;

public interface InvestimentoService {
    Investimento save(Investimento investimento);
    List<Investimento> getAll();
    Investimento getById(long id);
    Investimento delete(long id);
}