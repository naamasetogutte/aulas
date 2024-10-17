package org.example.controller;

import org.example.model.Produto;
import org.example.view.ProdutoView;

import java.util.ArrayList;
import java.util.List;

public class ProdutoController {

    private ProdutoView produtoView;
    private List<Produto> produtoList;

    public ProdutoController(ProdutoView novaView) {
        this.produtoView = novaView;
        this.produtoList = new ArrayList<>();
    }

    public void criarProduto() {
        produtoView.getIDProduto();
        produtoView.getNomeProduto();
        produtoView.getPrecoProduto();
        insertProduto(produtoView.getIDProduto(), produtoView.getNomeProduto(), produtoView.getPrecoProduto());
    }

    public void insertProduto(int id, String nome, double preco) {
        Produto novoProduto = new Produto(id, nome, preco);
        produtoList.add(novoProduto);
    }

    public Produto buscarProdutoByID(int id) {
        for (Produto produto : produtoList) {
            if (produto.getId() == id) {
                return produto;
            }
        }
        return null;
    }

    public void deleteProduto() {
        int id = produtoView.getIDProduto();
        Produto produtoDeletar = buscarProdutoByID(id);
        if (produtoDeletar != null) {
            produtoList.remove(produtoDeletar);
            produtoView.transmitirMensagem("Produto DELETADO!");
        } else {
            produtoView.transmitirMensagem("Produto não encontrado!");
        }
    }

    public void update() {
        int id = produtoView.getIDProduto();
        Produto produtoUpdate = buscarProdutoByID(id);
        if (produtoUpdate != null) {
            String novoNome = produtoView.getNomeProduto();
            double novoPreco = produtoView.getPrecoProduto();
            produtoUpdate.setNome(novoNome);
            produtoUpdate.setPreco(novoPreco);
            produtoView.transmitirMensagem("Update ok");
        }else {
            produtoView.transmitirMensagem("Produto não encontrado.");
        }
    }
    public void selectAll(){
        produtoView.imprimirTodos(produtoList);
    }

}

