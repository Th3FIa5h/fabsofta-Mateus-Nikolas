package br.univille.projetofabsoftfinancas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


import br.univille.projetofabsoftfinancas.entity.Cartao;
import br.univille.projetofabsoftfinancas.service.CartaoService;


@RestController
@RequestMapping("/api/v1/cartao")
public class CartaoController {

    @Autowired
    private CartaoService service;

    @GetMapping
    public ResponseEntity<List<Cartao>> getcartao(){
        var listaCartao = service.getAll();

        return new ResponseEntity<List<Cartao>>(listaCartao,
                    HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Cartao> 
            postCartao(@RequestBody Cartao cartao){
        if(cartao == null){
            return ResponseEntity.badRequest().build();
        }
        if(cartao.getId() == 0){
            service.save(cartao);
            return new ResponseEntity<Cartao>(cartao,
                        HttpStatus.OK);
        }
        return ResponseEntity.badRequest().build();
    }
    @PutMapping("/{id}")
    public ResponseEntity<Cartao> 
        putCartao(@PathVariable long id,
                   @RequestBody Cartao cartao){
        if(id <= 0 || cartao == null){
            return ResponseEntity.badRequest().build();
        }
        var cartaoAntigo = service.getById(id);
        if(cartaoAntigo == null){
            return ResponseEntity.notFound().build();
        }

        cartaoAntigo.setNumero(cartao.getNumero());
        cartaoAntigo.setCvv(cartao.getCvv());
        cartaoAntigo.setValidade(cartao.getValidade());
        cartaoAntigo.setNomeCliente(cartao.getNomeCliente());
        cartaoAntigo.setBanco(cartao.getBanco());
        cartaoAntigo.setBandeira(cartao.getBandeira());
        cartaoAntigo.setConta(cartao.getConta());
        
        service.save(cartaoAntigo);
        return new ResponseEntity<Cartao>(cartaoAntigo,
                    HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Cartao> deleteCartao(@PathVariable long id){
        if(id <= 0){
            return ResponseEntity.badRequest().build();
        }
        var cartaoExcluir = service.getById(id);
        if(cartaoExcluir == null){
            return ResponseEntity.notFound().build();
        }

        service.delete(id);
        return new ResponseEntity<Cartao>(cartaoExcluir,
                    HttpStatus.OK);

    }
}