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
import br.univille.projetofabsoftfinancas.entity.Despesa;
import br.univille.projetofabsoftfinancas.service.DespesaService;


@RestController
@RequestMapping("/api/v1/despesa")
public class DespesaController {

    @Autowired
    private DespesaService service;

    @GetMapping
    public ResponseEntity<List<Despesa>> getdespesa(){
        var listaDespesa = service.getAll();

        return new ResponseEntity<List<Despesa>>(listaDespesa,
                    HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Despesa> getDespesaId(@PathVariable Long id) {
        var despesa = service.getById(id);

        return new ResponseEntity<Despesa>(despesa, HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<Despesa> 
            postDespesa(@RequestBody Despesa despesa){
        if(despesa == null){
            return ResponseEntity.badRequest().build();
        }
        if(despesa.getId() == 0){
            service.save(despesa);
            return new ResponseEntity<Despesa>(despesa,
                        HttpStatus.OK);
        }
        return ResponseEntity.badRequest().build();
    }
    @PutMapping("/{id}")
    public ResponseEntity<Despesa> 
        putDespesa(@PathVariable long id,
                   @RequestBody Despesa despesa){
        if(id <= 0 || despesa == null){
            return ResponseEntity.badRequest().build();
        }
        var despesaAntigo = service.getById(id);
        if(despesaAntigo == null){
            return ResponseEntity.notFound().build();
        }

        despesaAntigo.setDescricao(despesa.getDescricao());
        despesaAntigo.setValor(despesa.getValor());
        despesaAntigo.setData(despesa.getData());
        despesaAntigo.setTipo(despesa.getTipo());
        despesaAntigo.setConta(despesa.getConta());
        despesaAntigo.setCartao(despesa.getCartao());
        
        service.save(despesaAntigo);
        return new ResponseEntity<Despesa>(despesaAntigo,
                    HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Despesa> deleteDespesa(@PathVariable long id){
        if(id <= 0){
            return ResponseEntity.badRequest().build();
        }
        var despesaExcluir = service.getById(id);
        if(despesaExcluir == null){
            return ResponseEntity.notFound().build();
        }

        service.delete(id);
        return new ResponseEntity<Despesa>(despesaExcluir,
                    HttpStatus.OK);

    }
}