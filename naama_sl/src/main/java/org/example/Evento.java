package org.example;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

// Classe base abstrata
abstract class Evento {
    private String nome;
    private String data;

    public Evento(String nome, String data) {
        this.nome = nome;
        this.data = data;
    }

    public String getNome() {
        return nome;
    }

    public String getData() {
        return data;
    }

    public abstract void detalhes();
}
