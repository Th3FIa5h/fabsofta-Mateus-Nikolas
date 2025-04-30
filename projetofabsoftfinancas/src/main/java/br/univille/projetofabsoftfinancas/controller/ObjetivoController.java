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


import br.univille.projetofabsoftfinancas.entity.Objetivo;
import br.univille.projetofabsoftfinancas.service.ObjetivoService;

@RestController
@RequestMapping("/api/v1/objetivo")
public class ObjetivoController {

    @Autowired
    private ObjetivoService service;

    @GetMapping
    public ResponseEntity<List<Objetivo>> getObjetivo(){
        var listaObjetivo = service.getAll();

        return new ResponseEntity<List<Objetivo>>(listaObjetivo,
                    HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Objetivo> 
            postObjetivo(@RequestBody Objetivo objetivo){
        if(objetivo == null){
            return ResponseEntity.badRequest().build();
        }
        if(objetivo.getId() == 0){
            service.save(objetivo);
            return new ResponseEntity<Objetivo>(objetivo,
                        HttpStatus.OK);
        }
        return ResponseEntity.badRequest().build();
    }
    @PutMapping("/{id}")
    public ResponseEntity<Objetivo> 
        putObjetivo(@PathVariable long id,
                   @RequestBody Objetivo objetivo){
        if(id <= 0 || objetivo == null){
            return ResponseEntity.badRequest().build();
        }
        var objetivoAntigo = service.getById(id);
        if(objetivoAntigo == null){
            return ResponseEntity.notFound().build();
        }

        objetivoAntigo.setDescricao(objetivo.getDescricao());
        objetivoAntigo.setValorAlvo(objetivo.getValorAlvo());
        objetivoAntigo.setProgressoAtual(objetivo.getProgressoAtual());
        objetivoAntigo.setListaReceitas(objetivo.getListaReceitas());
        objetivoAntigo.setListaInvestimento(objetivo.getListaInvestimento());
        
        service.save(objetivoAntigo);
        return new ResponseEntity<Objetivo>(objetivoAntigo,
                    HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Objetivo> deleteObjetivo(@PathVariable long id){
        if(id <= 0){
            return ResponseEntity.badRequest().build();
        }
        var objetivoExcluir = service.getById(id);
        if(objetivoExcluir == null){
            return ResponseEntity.notFound().build();
        }

        service.delete(id);
        return new ResponseEntity<Objetivo>(objetivoExcluir,
                    HttpStatus.OK);

    }
}
