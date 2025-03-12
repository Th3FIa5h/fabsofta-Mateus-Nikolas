package br.univille;

public class Pessoa {
    private String nome;

    //Construtor (mesmo nome da classe, não tem retorno)
    public Pessoa(String nome) {
        //this referencia a classe
        this.nome = nome;
    }
    //Dois metodos com assinatura semelhante = polimofirmo
    public Pessoa() {
    }
    
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
    //Sobreescrita de metodo (overwrite)
    @Override
    public String toString(){
        return super.toString() + "/" + getNome();
    }
}
