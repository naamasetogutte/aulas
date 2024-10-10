package org.example;

import org.example.exception.ValorInvalidoException;

public class GerenciadorConta {



    public void exibirSaldo(ContaBancaria cb){
        System.out.println(cb);
    }

    public void realizarDeposito(ContaBancaria cb, double valor) {
        try{
            cb.depositar(valor);
            System.out.println("Deposito de R$ "+ valor + " em " + cb);
        }catch(ValorInvalidoException e){
            System.out.println(e.getMessage());
        }
    }
}
