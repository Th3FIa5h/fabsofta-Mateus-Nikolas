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

import br.univille.projetofabsoftfinancas.entity.Investimento;
import br.univille.projetofabsoftfinancas.entity.LimiteGastos;
import br.univille.projetofabsoftfinancas.service.LimiteGastosService;

@RestController
@RequestMapping("/api/v1/limitegastos")
public class LimiteGastosController {

    @Autowired
    private LimiteGastosService service;

    @GetMapping
    public ResponseEntity<List<LimiteGastos>> getLimiteGastos(){
        var listaLimiteGastos = service.getAll();

        return new ResponseEntity<List<LimiteGastos>>(listaLimiteGastos,
                    HttpStatus.OK);
    }
    @GetMapping("/id")
    public ResponseEntity<LimiteGastos> getLimiteGastosId(@PathVariable Long id) {
        var limitegastos = service.getById(id);

        return new ResponseEntity<LimiteGastos>(limitegastos, HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<LimiteGastos> 
            postLimiteGastos(@RequestBody LimiteGastos limitegastos){
        if(limitegastos == null){
            return ResponseEntity.badRequest().build();
        }
        if(limitegastos.getId() == 0){
            service.save(limitegastos);
            return new ResponseEntity<LimiteGastos>(limitegastos,
                        HttpStatus.OK);
        }
        return ResponseEntity.badRequest().build();
    }
    @PutMapping("/{id}")
    public ResponseEntity<LimiteGastos> 
        putLimiteGastos(@PathVariable long id,
                   @RequestBody LimiteGastos limitegastos){
        if(id <= 0 || limitegastos == null){
            return ResponseEntity.badRequest().build();
        }
        var limitegastosAntigo = service.getById(id);
        if(limitegastosAntigo == null){
            return ResponseEntity.notFound().build();
        }

        limitegastosAntigo.setValorLimite(limitegastos.getValorLimite());
        limitegastosAntigo.setDespesa(limitegastos.getDespesa());
        
        service.save(limitegastosAntigo);
        return new ResponseEntity<LimiteGastos>(limitegastosAntigo,
                    HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<LimiteGastos> deleteLimiteGastos(@PathVariable long id){
        if(id <= 0){
            return ResponseEntity.badRequest().build();
        }
        var limitegastosExcluir = service.getById(id);
        if(limitegastosExcluir == null){
            return ResponseEntity.notFound().build();
        }

        service.delete(id);
        return new ResponseEntity<LimiteGastos>(limitegastosExcluir,
                    HttpStatus.OK);

    }
}
