package br.univille.projetofabsoftfinancas.entity;

import jakarta.persistence.*;

@Entity
public class RelatorioMensal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String mesAno; // Exemplo: "Janeiro 2025"

    // Getters e Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMesAno() {
        return mesAno;
    }

    public void setMesAno(String mesAno) {
        this.mesAno = mesAno;
    }
}