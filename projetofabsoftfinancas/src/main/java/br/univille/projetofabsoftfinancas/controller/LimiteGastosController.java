package br.univille.projetofabsoftfinancas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;



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

        return new ResponseEntity<List<LimiteGastos>>(listaLimiteGastos, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<LimiteGastos> 
            postLimiteGastos(@RequestBody LimiteGastos limitegastos){
        if(limitegastos == null){
            return ResponseEntity.badRequest().build();
        }
        if(limitegastos.getId() == 0){
            service.save(limitegastos);
            return new ResponseEntity<LimiteGastos>(limitegastos, HttpStatus.OK);
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
        
        service.save(limitegastosAntigo);
        return new ResponseEntity<LimiteGastos>(limitegastosAntigo, HttpStatus.OK);
    }
}
