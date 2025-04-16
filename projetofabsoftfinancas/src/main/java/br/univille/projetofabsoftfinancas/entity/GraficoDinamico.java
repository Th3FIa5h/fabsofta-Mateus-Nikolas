package br.univille.projetofabsoftfinancas.entity;

import jakarta.persistence.*;

@Entity
public class GraficoDinamico {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String tipo; // Exemplo: "Gastos Mensais", "Receitas Mensais"

    // Getters e Setters
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
}