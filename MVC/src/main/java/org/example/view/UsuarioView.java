package org.example.view;

import org.example.model.Usuario;

import java.util.List;
import java.util.Scanner;

public class UsuarioView {

    Scanner scanner = new Scanner(System.in);

    //output
    public void imprimirTodosUsuarios(List<Usuario> usuarios){
        System.out.println("--Usuarios cadastrados--");
        for (Usuario usuario : usuarios){
            System.out.println(usuario);
        }
    }

    //input
    public int getId(){
        System.out.println("Digite o ID: ");
        return scanner.nextInt();
    }
    public String getNome(){
        System.out.println("Digite o nome: ");
        return scanner.next();
    }

    public String getEmail(){
        System.out.println("Digite o email: ");
        return scanner.next();
    }

}
