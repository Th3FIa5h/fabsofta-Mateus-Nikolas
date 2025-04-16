package br.univille.projetofabsoftfinancas.service;

import java.util.List;

import br.univille.projetofabsoftfinancas.entity.LimiteGastos;

public interface LimiteGastosService {
    LimiteGastos save(LimiteGastos limitegastos);
    List<LimiteGastos> getAll();
    LimiteGastos getById(long id);
    LimiteGastos delete(long id);
}
