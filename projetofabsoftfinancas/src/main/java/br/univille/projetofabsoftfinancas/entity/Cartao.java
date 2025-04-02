package br.univille.projetofabsoftfinancas.entity;

import jakarta.persistence.*;

@Entity
public class Cartao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String numero;
    private String cvv;
    private String validade;
    private String nomeCliente;
    private String banco;
    private String bandeira;

    // Getters e Setters
}