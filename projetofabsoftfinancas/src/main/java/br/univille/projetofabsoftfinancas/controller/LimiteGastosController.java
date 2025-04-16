package br.univille.projetofabsoftfinancas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
