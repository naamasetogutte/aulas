package org.example;

import org.example.exception.ValorInvalidoException;

public class ContaBancaria {
    private String titular;
    private Double saldo;

    public ContaBancaria(String titular){
        this.titular = titular;
        this.saldo = 0.0;
    }


    public String getTitular() {
        return titular;
    }

    public Double getSaldo() {
        return saldo;
    }

    public ContaBancaria(String titular, Double saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    public void depositar(double valor) throws ValorInvalidoException{
        if(valor <= 0){
            throw new ValorInvalidoException("O valor de deposito deve ser positivo");
        }
        this.saldo += valor;
    }

    public void sacar(double valor){

    }

}
