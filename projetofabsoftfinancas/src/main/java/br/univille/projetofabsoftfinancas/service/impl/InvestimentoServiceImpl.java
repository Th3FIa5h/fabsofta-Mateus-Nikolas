package br.univille.projetofabsoftfinancas.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.univille.projetofabsoftfinancas.entity.Investimento;
import br.univille.projetofabsoftfinancas.repository.InvestimentoRepository;
import br.univille.projetofabsoftfinancas.service.InvestimentoService;

@Service
public class InvestimentoServiceImpl implements InvestimentoService{

    @Autowired
    private InvestimentoRepository repository;

    @Override
    public Investimento save(Investimento investimento) {
        return repository.save(investimento);
    }

    @Override
    public List<Investimento> getAll() {
        return repository.findAll();
    }

    @Override
    public Investimento getById(long id) {
        var retorno = repository.findById(id);
        if (retorno.isPresent())
            return retorno.get();
        return null;            
    }

    @Override
    public Investimento delete(long id) {
        var investimento = getById(id);
        if(investimento != null)
            repository.deleteById(id);
        return investimento;
    }

}