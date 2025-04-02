package br.univille.projetofabsoftfinancas.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Despesa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String descricao;
    private float valor;
    private LocalDate data;
    private String tipo; // Fixa ou Variável

    // Getters e Setters
}