package br.univille.projetofabsoftfinancas.entity;

import jakarta.persistence.*;

@Entity
public class Conta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String numeroConta;
    private String agencia;
    private String nomeBanco;

    // Getters e Setters
}