package br.univille.projetofabsoftfinancas.entity;

import java.util.List;

import jakarta.persistence.*;

@Entity
public class LimiteGastos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String titulo;
    private String categoria;

    private float valorLimite;

    @OneToMany
    private List<Despesa> despesa;

    // Getters e Setters
    
    public long getId() {
        return id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public void setId(long id) {
        this.id = id;
    }

    public float getValorLimite() {
        return valorLimite;
    }

    public void setValorLimite(float valorLimite) {
        this.valorLimite = valorLimite;
    }

    public List<Despesa> getDespesa() {
        return despesa;
    }

    public void setDespesa(List<Despesa> despesa) {
        this.despesa = despesa;
    }



    
    
}