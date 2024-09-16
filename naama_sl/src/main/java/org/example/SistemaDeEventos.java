package org.example;

import java.util.Scanner;

// Classe principal para executar o sistema
public class SistemaDeEventos {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Criação de um workshop
        Workshop workshop = new Workshop("Workshop Java", "12/09/2024", 30);
        workshop.inscreverParticipante("Ana");
        workshop.inscreverParticipante("Carlos");
        workshop.detalhes();

        // Criação de uma reunião
        Reuniao reuniaoPublica = new Reuniao("Reunião de Equipe", "13/09/2024", false, "");
        reuniaoPublica.detalhes();

        Reuniao reuniaoPrivada = new Reuniao("Reunião de Gerentes", "14/09/2024", true, "12345");
        System.out.print("Digite a senha para acessar a reunião privada: ");
        String senha = sc.nextLine();
        reuniaoPrivada.acessarReuniao(senha);
        reuniaoPrivada.detalhes();

        // Criação de um evento corporativo
        EventoCorporativo eventoCorporativo = new EventoCorporativo("Conferência Anual", "15/09/2024", "Sala de Conferências");
        eventoCorporativo.detalhes();

        sc.close();
    }
}