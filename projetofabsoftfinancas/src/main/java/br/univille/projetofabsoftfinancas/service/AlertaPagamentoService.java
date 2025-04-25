package br.univille.projetofabsoftfinancas.service;

import java.util.List;

import br.univille.projetofabsoftfinancas.entity.AlertaPagamento;

public interface AlertaPagamentoService {
    AlertaPagamento save(AlertaPagamento alertapagamento);
    List<AlertaPagamento> getAll();
    AlertaPagamento getById(long id);
    AlertaPagamento delete(long id);
}