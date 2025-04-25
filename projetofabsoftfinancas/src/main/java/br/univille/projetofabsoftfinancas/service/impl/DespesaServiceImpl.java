package br.univille.projetofabsoftfinancas.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.univille.projetofabsoftfinancas.entity.Despesa;
import br.univille.projetofabsoftfinancas.repository.DespesaRepository;
import br.univille.projetofabsoftfinancas.service.DespesaService;

@Service
public class DespesaServiceImpl implements DespesaService{

    @Autowired
    private DespesaRepository repository;

    @Override
    public Despesa save(Despesa despesa) {
        return repository.save(despesa);
    }

    @Override
    public List<Despesa> getAll() {
        return repository.findAll();
    }

    @Override
    public Despesa getById(long id) {
        var retorno = repository.findById(id);
        if (retorno.isPresent())
            return retorno.get();
        return null;            
    }

    @Override
    public Despesa delete(long id) {
        var despesa = getById(id);
        if(despesa != null)
            repository.deleteById(id);
        return despesa;
    }

}