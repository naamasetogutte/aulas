package org.example.controller;

import org.example.model.Usuario;
import org.example.view.UsuarioView;

import java.util.ArrayList;
import java.util.List;

public class UsuarioController {

    private List<Usuario> usuarioList;
    private UsuarioView view;

    public UsuarioController(UsuarioView view){
        this.usuarioList = new ArrayList<>();
        this.view = view;
    }

    public void ListarUsuario(List<Usuario> users){
    view.imprimirTodosUsuarios(users);
    }

    public void validarInput(){
        int id = view.getId();
        String nome = view.getNome();
        String email = view.getEmail();
        addUsuario(id, nome, email);
    }
    public void addUsuario(int id, String nome, String email){
        Usuario usuario = new Usuario(id, nome, email);
        this.usuarioList.add(usuario);
        ListarUsuario(this.usuarioList);
    }

}
