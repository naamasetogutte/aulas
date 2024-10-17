package org.example;

import org.example.controller.UsuarioController;
import org.example.view.UsuarioView;

// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class Main {
    public static void main(String[] args) {

        UsuarioView view = new UsuarioView();
        UsuarioController usuarioController = new UsuarioController(view);
        while (true) {
            usuarioController.validarInput();
        }
    }
}