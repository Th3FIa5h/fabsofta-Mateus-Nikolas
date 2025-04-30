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


import br.univille.projetofabsoftfinancas.entity.Conta;
import br.univille.projetofabsoftfinancas.service.ContaService;


@RestController
@RequestMapping("/api/v1/conta")
public class ContaController {

    @Autowired
    private ContaService service;

    @GetMapping
    public ResponseEntity<List<Conta>> getconta(){
        var listaConta = service.getAll();

        return new ResponseEntity<List<Conta>>(listaConta,
                    HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Conta> 
            postConta(@RequestBody Conta conta){
        if(conta == null){
            return ResponseEntity.badRequest().build();
        }
        if(conta.getId() == 0){
            service.save(conta);
            return new ResponseEntity<Conta>(conta,
                        HttpStatus.OK);
        }
        return ResponseEntity.badRequest().build();
    }
    @PutMapping("/{id}")
    public ResponseEntity<Conta> 
        putConta(@PathVariable long id,
                   @RequestBody Conta conta){
        if(id <= 0 || conta == null){
            return ResponseEntity.badRequest().build();
        }
        var contaAntigo = service.getById(id);
        if(contaAntigo == null){
            return ResponseEntity.notFound().build();
        }

        contaAntigo.setNumero(conta.getNumero());
        contaAntigo.setAgencia(conta.getAgencia());
        contaAntigo.setBanco(conta.getBanco());

        
        service.save(contaAntigo);
        return new ResponseEntity<Conta>(contaAntigo,
                    HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Conta> deleteConta(@PathVariable long id){
        if(id <= 0){
            return ResponseEntity.badRequest().build();
        }
        var contaExcluir = service.getById(id);
        if(contaExcluir == null){
            return ResponseEntity.notFound().build();
        }

        service.delete(id);
        return new ResponseEntity<Conta>(contaExcluir,
                    HttpStatus.OK);

    }
}