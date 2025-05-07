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


import br.univille.projetofabsoftfinancas.entity.AlertaPagamento;
import br.univille.projetofabsoftfinancas.service.AlertaPagamentoService;

@RestController
@RequestMapping("/api/v1/alertapagamento")
public class AlertaPagamentoController {

    @Autowired
    private AlertaPagamentoService service;

    @GetMapping
    public ResponseEntity<List<AlertaPagamento>> getAlertaPagamento(){
        var listaAlertaPagamento = service.getAll();

        return new ResponseEntity<List<AlertaPagamento>>(listaAlertaPagamento,
                    HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<AlertaPagamento> 
            postAlertaPagamento(@RequestBody AlertaPagamento alertapagamento){
        if(alertapagamento == null){
            return ResponseEntity.badRequest().build();
        }
        if(alertapagamento.getId() == 0){
            service.save(alertapagamento);
            return new ResponseEntity<AlertaPagamento>(alertapagamento,
                        HttpStatus.OK);
        }
        return ResponseEntity.badRequest().build();
    }
    @PutMapping("/{id}")
    public ResponseEntity<AlertaPagamento> 
        putAlertaPagamento(@PathVariable long id,
                   @RequestBody AlertaPagamento alertapagamento){
        if(id <= 0 || alertapagamento == null){
            return ResponseEntity.badRequest().build();
        }
        var alertapagamentoAntigo = service.getById(id);
        if(alertapagamentoAntigo == null){
            return ResponseEntity.notFound().build();
        }

        alertapagamentoAntigo.setDescricao(alertapagamento.getDescricao());
        alertapagamentoAntigo.setDataVencimento(alertapagamento.getDataVencimento());
        alertapagamentoAntigo.setStatus(alertapagamento.getStatus());
        alertapagamentoAntigo.setConta(alertapagamento.getConta());
        alertapagamentoAntigo.setCartao(alertapagamento.getCartao());
        
        service.save(alertapagamentoAntigo);
        return new ResponseEntity<AlertaPagamento>(alertapagamentoAntigo,
                    HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<AlertaPagamento> deleteAlertaPagamento(@PathVariable long id){
        if(id <= 0){
            return ResponseEntity.badRequest().build();
        }
        var alertapagamentoExcluir = service.getById(id);
        if(alertapagamentoExcluir == null){
            return ResponseEntity.notFound().build();
        }

        service.delete(id);
        return new ResponseEntity<AlertaPagamento>(alertapagamentoExcluir,
                    HttpStatus.OK);

    }
}
