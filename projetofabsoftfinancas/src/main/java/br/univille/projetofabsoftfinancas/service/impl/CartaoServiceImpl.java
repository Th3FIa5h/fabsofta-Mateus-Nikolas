package br.univille.projetofabsoftfinancas.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.univille.projetofabsoftfinancas.entity.Cartao;
import br.univille.projetofabsoftfinancas.repository.CartaoRepository;
import br.univille.projetofabsoftfinancas.service.CartaoService;

@Service
public class CartaoServiceImpl implements CartaoService{

    @Autowired
    private CartaoRepository repository;

    @Override
    public Cartao save(Cartao cartao) {
        return repository.save(cartao);
    }

    @Override
    public List<Cartao> getAll() {
        return repository.findAll();
    }

    @Override
    public Cartao getById(long id) {
        var retorno = repository.findById(id);
        if (retorno.isPresent())
            return retorno.get();
        return null;            
    }

    @Override
    public Cartao delete(long id) {
        var cartao = getById(id);
        if(cartao != null)
            repository.deleteById(id);
        return cartao;
    }

}