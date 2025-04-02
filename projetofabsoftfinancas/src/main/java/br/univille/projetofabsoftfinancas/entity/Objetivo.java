package br.univille.projetofabsoftfinancas.entity;

import jakarta.persistence.*;

@Entity
public class Objetivo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String descricao;
    private float valorAlvo;
    private float progressoAtual;

    // Getters e Setters
}