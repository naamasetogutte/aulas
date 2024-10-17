package org.example.view;

import org.example.model.Produto;

import java.util.List;
import java.util.Scanner;

public class ProdutoView {
    Scanner scanner = new Scanner(System.in);

    // coleta de dados
    public int getIDProduto(){
        System.out.println("Entre com o id: ");
        return scanner.nextInt();
    }
    public String getNomeProduto(){
        System.out.println("Entre com o nome: ");
        return scanner.next();
    }

    public double getPrecoProduto(){
        System.out.println("Entre com o preço: ");
        return scanner.nextDouble();
    }
    public void transmitirMensagem(String msg){
        System.out.println(msg);
    }

    public void imprimirTodos(List<Produto> produtos){
        for(Produto produto : produtos){
            System.out.println(produto);
        }
    }
}
