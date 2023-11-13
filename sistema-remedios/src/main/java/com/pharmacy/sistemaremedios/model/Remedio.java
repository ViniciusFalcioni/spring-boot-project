package com.pharmacy.sistemaremedios.model;

import javax.persistence.*;

@Entity
@Table(name = "remedios")
public class Remedio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String fabricante;
    private double preco;
    private int estoque;

    private String fotoUrl; // Novo campo para armazenar a URL da imagem

    // Construtor padrão
    public Remedio() {
    }

    // Construtor com argumentos
    public Remedio(Long id, String nome, String fabricante, double preco, int estoque, String fotoUrl) {
        this.id = id;
        this.nome = nome;
        this.fabricante = fabricante;
        this.preco = preco;
        this.estoque = estoque;
        this.fotoUrl = fotoUrl;
    }

    // Getters e Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getFabricante() {
        return fabricante;
    }

    public void setFabricante(String fabricante) {
        this.fabricante = fabricante;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public int getEstoque() {
        return estoque;
    }

    public void setEstoque(int estoque) {
        this.estoque = estoque;
    }

    public String getFotoUrl() {
        return fotoUrl;
    }

    public void setFotoUrl(String fotoUrl) {
        this.fotoUrl = fotoUrl;
    }

    // Método toString (opcional, mas útil para depuração)
    @Override
    public String toString() {
        return "Remedio{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", fabricante='" + fabricante + '\'' +
                ", preco=" + preco +
                ", estoque=" + estoque +
                '}';
    }
}
