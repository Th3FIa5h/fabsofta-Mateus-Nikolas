package br.univille;
public class App {
    public static void main(String[] args) {
        //System.out.println("Hello, World!");
        //new = Instância
        Pessoa zezinho = new Pessoa();
        Pessoa mariazinha = new Pessoa("Mariazinha"); 
        zezinho.setNome("Zezinho");

        System.out.println(mariazinha);
        System.out.println(zezinho);
    }
}
