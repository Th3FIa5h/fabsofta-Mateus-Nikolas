package br.univille.projetofabsoftfinancas.service;

import java.util.List;

import br.univille.projetofabsoftfinancas.entity.Conta;

public interface ContaService {
    Conta save(Conta conta);
    List<Conta> getAll();
    Conta getById(long id);
    Conta delete(long id);
}