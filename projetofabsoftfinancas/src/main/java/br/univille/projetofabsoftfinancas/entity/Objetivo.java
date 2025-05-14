package br.univille.projetofabsoftfinancas.entity;

import java.util.List;

import jakarta.persistence.*;

@Entity
public class Objetivo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String descricao;
    private float valorAlvo;
    private float progressoAtual;

    @ManyToMany(cascade = {CascadeType.MERGE,CascadeType.REFRESH},fetch = FetchType.EAGER)
    private List<Receita> listaReceitas;

    @ManyToMany(cascade = {CascadeType.MERGE,CascadeType.REFRESH},fetch = FetchType.EAGER)
    private List<Investimento> listaInvestimento;

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

    public List<Receita> getListaReceitas() {
        return listaReceitas;
    }

    public void setListaReceitas(List<Receita> listaReceitas) {
        this.listaReceitas = listaReceitas;
    }

    public List<Investimento> getListaInvestimento() {
        return listaInvestimento;
    }

    public void setListaInvestimento(List<Investimento> listaInvestimento) {
        this.listaInvestimento = listaInvestimento;
    }


}