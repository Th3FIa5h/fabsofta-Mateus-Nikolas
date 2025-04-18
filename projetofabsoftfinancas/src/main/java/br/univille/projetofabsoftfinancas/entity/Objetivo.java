package br.univille.projetofabsoftfinancas.entity;

import jakarta.persistence.*;

@Entity
public class Objetivo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String descricao;
    private float valorAlvo;
    private float progressoAtual;

    @ManyToOne(cascade = {CascadeType.MERGE,CascadeType.REFRESH})
    private Receita receita;

    @ManyToOne(cascade = {CascadeType.MERGE,CascadeType.REFRESH})
    private Investimento investimento;

    // Getters e Setters
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public float getValorAlvo() {
        return valorAlvo;
    }

    public void setValorAlvo(float valorAlvo) {
        this.valorAlvo = valorAlvo;
    }

    public float getProgressoAtual() {
        return progressoAtual;
    }

    public void setProgressoAtual(float progressoAtual) {
        this.progressoAtual = progressoAtual;
    }

    public Receita getReceita() {
        return receita;
    }

    public void setReceita(Receita receita) {
        this.receita = receita;
    }

    public Investimento getInvestimento() {
        return investimento;
    }

    public void setInvestimento(Investimento investimento) {
        this.investimento = investimento;
    }
}