package org.example;

import org.example.controller.ProdutoController;
import org.example.view.ProdutoView;

// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class Main {
    public static void main(String[] args) {
        ProdutoView produtoView = new ProdutoView();
        ProdutoController produtoController = new ProdutoController(produtoView);

        produtoController.criarProduto();
        produtoController.selectAll();
        produtoController.deleteProduto();

    }
}
