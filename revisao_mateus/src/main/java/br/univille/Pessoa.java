package br.univille;
public class Pessoa {
    //atributo (variável)
    private String nome;
    
    //Contrutor (mesmo nome da classe, não tem retorno)
    public Pessoa(String nome) {
        //this referencia a classe
        this.nome = nome;
    }
    //Dois métodos com assinatura semelhante = polimorfismo
    public Pessoa() {
        
    }

    //método
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
    //Sobreescrita de metódo (overwrite)
    public String toString(){
        return getNome();
    }

}
