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

import br.univille.projetofabsoftfinancas.entity.Despesa;
import br.univille.projetofabsoftfinancas.entity.Investimento;
import br.univille.projetofabsoftfinancas.service.InvestimentoService;

@RestController
@RequestMapping("/api/v1/investimento")
public class InvestimentoController {

    @Autowired
    private InvestimentoService service;

    @GetMapping
    public ResponseEntity<List<Investimento>> getInvestimento(){
        var listaInvestimento = service.getAll();

        return new ResponseEntity<List<Investimento>>(listaInvestimento,
                    HttpStatus.OK);
    }
    @GetMapping("/id")
    public ResponseEntity<Investimento> getInvestimentoId(@PathVariable Long id) {
        var investimento = service.getById(id);

        return new ResponseEntity<Investimento>(investimento, HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<Investimento> 
            postInvestimento(@RequestBody Investimento investimento){
        if(investimento == null){
            return ResponseEntity.badRequest().build();
        }
        if(investimento.getId() == 0){
            service.save(investimento);
            return new ResponseEntity<Investimento>(investimento,
                        HttpStatus.OK);
        }
        return ResponseEntity.badRequest().build();
    }
    @PutMapping("/{id}")
    public ResponseEntity<Investimento> 
        putInvestimento(@PathVariable long id,
                   @RequestBody Investimento investimento){
        if(id <= 0 || investimento == null){
            return ResponseEntity.badRequest().build();
        }
        var investimentoAntigo = service.getById(id);
        if(investimentoAntigo == null){
            return ResponseEntity.notFound().build();
        }

        investimentoAntigo.setDescricao(investimento.getDescricao());
        investimentoAntigo.setValor(investimento.getValor());
        investimentoAntigo.setPrazo(investimento.getPrazo());
        investimentoAntigo.setConta(investimento.getConta());
        
        service.save(investimentoAntigo);
        return new ResponseEntity<Investimento>(investimentoAntigo,
                    HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Investimento> deleteInvestimento(@PathVariable long id){
        if(id <= 0){
            return ResponseEntity.badRequest().build();
        }
        var investimentoExcluir = service.getById(id);
        if(investimentoExcluir == null){
            return ResponseEntity.notFound().build();
        }

        service.delete(id);
        return new ResponseEntity<Investimento>(investimentoExcluir,
                    HttpStatus.OK);

    }
}
