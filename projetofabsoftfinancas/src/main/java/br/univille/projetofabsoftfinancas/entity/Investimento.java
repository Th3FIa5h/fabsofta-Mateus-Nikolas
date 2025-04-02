package br.univille.projetofabsoftfinancas.entity;

import jakarta.persistence.*;

@Entity
public class Investimento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String tipo; // Curto Prazo, Médio Prazo, Longo Prazo
    private float valor;
    private String descricao;

    // Getters e Setters
}