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

import br.univille.projetofabsoftfinancas.entity.LimiteGastos;
import br.univille.projetofabsoftfinancas.entity.Receita;
import br.univille.projetofabsoftfinancas.service.ReceitaService;


@RestController
@RequestMapping("/api/v1/receita")
public class ReceitaController {

    @Autowired
    private ReceitaService service;

    @GetMapping
    public ResponseEntity<List<Receita>> getreceita(){
        var listaReceita = service.getAll();

        return new ResponseEntity<List<Receita>>(listaReceita,
                    HttpStatus.OK);
    }
    @GetMapping("/id")
    public ResponseEntity<Receita> getReceitaId(@PathVariable Long id) {
        var receita = service.getById(id);

        return new ResponseEntity<Receita>(receita, HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<Receita> 
            postReceita(@RequestBody Receita receita){
        if(receita == null){
            return ResponseEntity.badRequest().build();
        }
        if(receita.getId() == 0){
            service.save(receita);
            return new ResponseEntity<Receita>(receita,
                        HttpStatus.OK);
        }
        return ResponseEntity.badRequest().build();
    }
    @PutMapping("/{id}")
    public ResponseEntity<Receita> 
        putReceita(@PathVariable long id,
                   @RequestBody Receita receita){
        if(id <= 0 || receita == null){
            return ResponseEntity.badRequest().build();
        }
        var receitaAntigo = service.getById(id);
        if(receitaAntigo == null){
            return ResponseEntity.notFound().build();
        }

        receitaAntigo.setDescricao(receita.getDescricao());
        receitaAntigo.setValor(receita.getValor());
        receitaAntigo.setData(receita.getData());
        receitaAntigo.setTipo(receita.getTipo());
        receitaAntigo.setConta(receita.getConta());
        receitaAntigo.setCartao(receita.getCartao());
        
        service.save(receitaAntigo);
        return new ResponseEntity<Receita>(receitaAntigo,
                    HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Receita> deleteReceita(@PathVariable long id){
        if(id <= 0){
            return ResponseEntity.badRequest().build();
        }
        var receitaExcluir = service.getById(id);
        if(receitaExcluir == null){
            return ResponseEntity.notFound().build();
        }

        service.delete(id);
        return new ResponseEntity<Receita>(receitaExcluir,
                    HttpStatus.OK);

    }
}