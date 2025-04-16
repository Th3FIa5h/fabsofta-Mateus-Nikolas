package br.univille.projetofabsoftfinancas.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.univille.projetofabsoftfinancas.entity.LimiteGastos;
import br.univille.projetofabsoftfinancas.repository.LimiteGastosRepository;
import br.univille.projetofabsoftfinancas.service.LimiteGastosService;

@Service
public class LimiteGastosServiceImpl implements LimiteGastosService{

    @Autowired
    private LimiteGastosRepository repository;

    @Override
    public LimiteGastos save(LimiteGastos limitegastos) {
        return repository.save(limitegastos);
    }

    @Override
    public List<LimiteGastos> getAll() {
        return repository.findAll();
    }

    @Override
    public LimiteGastos getById(long id) {
        var retorno = repository.findById(id);
        if (retorno.isPresent())
            return retorno.get();
        return null;            
    }

    @Override
    public LimiteGastos delete(long id) {
        var limitegastos = getById(id);
        if(limitegastos != null)
            repository.deleteById(id);
        return limitegastos;
    }

}
