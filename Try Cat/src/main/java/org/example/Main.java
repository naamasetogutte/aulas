package org.example;

import org.example.exception.ValorInvalidoException;

public class Main {
    public static void main(String[] args) {

        GerenciadorConta gc = new GerenciadorConta();

        ContaBancaria naama = new ContaBancaria("Naamã");

                gc.realizarDeposito(naama, 500);
                gc.realizarDeposito(naama, -200);
        }
    }
