package br.univille.projetofabsoftfinancas.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.univille.projetofabsoftfinancas.entity.Conta;
import br.univille.projetofabsoftfinancas.repository.ContaRepository;
import br.univille.projetofabsoftfinancas.service.ContaService;

@Service
public class ContaServiceImpl implements ContaService{

    @Autowired
    private ContaRepository repository;

    @Override
    public Conta save(Conta conta) {
        return repository.save(conta);
    }

    @Override
    public List<Conta> getAll() {
        return repository.findAll();
    }

    @Override
    public Conta getById(long id) {
        var retorno = repository.findById(id);
        if (retorno.isPresent())
            return retorno.get();
        return null;            
    }

    @Override
    public Conta delete(long id) {
        var conta = getById(id);
        if(conta != null)
            repository.deleteById(id);
        return conta;
    }

}