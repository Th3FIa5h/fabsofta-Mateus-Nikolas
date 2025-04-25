package br.univille.projetofabsoftfinancas.service;

import java.util.List;

import br.univille.projetofabsoftfinancas.entity.Cartao;

public interface CartaoService {
    Cartao save(Cartao cartao);
    List<Cartao> getAll();
    Cartao getById(long id);
    Cartao delete(long id);
}