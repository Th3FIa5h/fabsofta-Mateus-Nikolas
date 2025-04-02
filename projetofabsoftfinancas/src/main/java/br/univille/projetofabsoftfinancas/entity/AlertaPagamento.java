package br.univille.projetofabsoftfinancas.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class AlertaPagamento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String descricao;
    private LocalDate dataVencimento;
    private boolean status; // Pendente ou Pago

    // Getters e Setters
}