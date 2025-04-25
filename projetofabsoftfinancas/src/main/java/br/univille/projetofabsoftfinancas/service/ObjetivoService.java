package br.univille.projetofabsoftfinancas.service;

import java.util.List;

import br.univille.projetofabsoftfinancas.entity.Objetivo;

public interface ObjetivoService {
    Objetivo save(Objetivo objetivo);
    List<Objetivo> getAll();
    Objetivo getById(long id);
    Objetivo delete(long id);
}