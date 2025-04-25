package br.univille.projetofabsoftfinancas.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.univille.projetofabsoftfinancas.entity.Objetivo;
import br.univille.projetofabsoftfinancas.repository.ObjetivoRepository;
import br.univille.projetofabsoftfinancas.service.ObjetivoService;

@Service
public class ObjetivoServiceImpl implements ObjetivoService{

    @Autowired
    private ObjetivoRepository repository;

    @Override
    public Objetivo save(Objetivo objetivo) {
        return repository.save(objetivo);
    }

    @Override
    public List<Objetivo> getAll() {
        return repository.findAll();
    }

    @Override
    public Objetivo getById(long id) {
        var retorno = repository.findById(id);
        if (retorno.isPresent())
            return retorno.get();
        return null;            
    }

    @Override
    public Objetivo delete(long id) {
        var objetivo = getById(id);
        if(objetivo != null)
            repository.deleteById(id);
        return objetivo;
    }

}