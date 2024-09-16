package org.example;

public class SistemaDeAgendamento {
    public static void main(String[] args) {
        // Criar e testar Workshop
        Workshop workshop = new Workshop("Workshop Java", "2024-10-10");
        System.out.println("Workshop válido: " + workshop.validar());
        System.out.println("Inscrições: ");
        for (int i = 1; i <= 32; i++) {
            System.out.println("Participante " + i + ": " + (workshop.inscreverParticipante("Participante " + i) ? "Inscrito" : "Não Inscrito"));
        }

        // Criar e testar Reunião Pública
        Reuniao reuniaoPublica = new Reuniao("Reunião Pública", "2024-11-10", false, null);
        System.out.println("Reunião Pública válida: " + reuniaoPublica.validar());
        System.out.println("Acesso sem senha: " + reuniaoPublica.acessarReuniao(null));

        // Criar e testar Reunião Privada
        Reuniao reuniaoPrivada = new Reuniao("Reunião Privada", "2024-11-10", true, "1234");
        System.out.println("Reunião Privada válida: " + reuniaoPrivada.validar());
        System.out.println("Acesso com senha errada: " + reuniaoPrivada.acessarReuniao("0000"));
        System.out.println("Acesso com senha correta: " + reuniaoPrivada.acessarReuniao("1234"));

        // Criar e testar Evento Corporativo
        EventoCorporativo eventoCorporativo = new EventoCorporativo("Evento Corporativo", "2024-12-10", "Sala A", "Refeitorio");
        System.out.println("Evento Corporativo válido: " + eventoCorporativo.validar());
    }
}
