package br.univille.projetofabsoftfinancas.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.univille.projetofabsoftfinancas.entity.AlertaPagamento;
import br.univille.projetofabsoftfinancas.repository.AlertaPagamentoRepository;
import br.univille.projetofabsoftfinancas.service.AlertaPagamentoService;

@Service
public class AlertaPagamentoServiceImpl implements AlertaPagamentoService{

    @Autowired
    private AlertaPagamentoRepository repository;

    @Override
    public AlertaPagamento save(AlertaPagamento alertapagamento) {
        return repository.save(alertapagamento);
    }

    @Override
    public List<AlertaPagamento> getAll() {
        return repository.findAll();
    }

    @Override
    public AlertaPagamento getById(long id) {
        var retorno = repository.findById(id);
        if (retorno.isPresent())
            return retorno.get();
        return null;            
    }

    @Override
    public AlertaPagamento delete(long id) {
        var alertapagamento = getById(id);
        if(alertapagamento != null)
            repository.deleteById(id);
        return alertapagamento;
    }

}