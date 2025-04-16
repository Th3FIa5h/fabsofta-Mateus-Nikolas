package br.univille.projetofabsoftfinancas.entity;

import jakarta.persistence.*;

@Entity
public class LimiteGastos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private float valorTotal;
    private float valorGasto;

    // Getters e Setters
}