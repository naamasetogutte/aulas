package org.example;

import java.util.ArrayList;
import java.util.List;

// Classe Workshop
class Workshop extends Evento {
    private int maxParticipantes;
    private List<String> participantes;

    public Workshop(String nome, String data, int maxParticipantes) {
        super(nome, data);
        this.maxParticipantes = maxParticipantes;
        this.participantes = new ArrayList<>();
    }

    public boolean inscreverParticipante(String participante) {
        if (participantes.size() < maxParticipantes) {
            participantes.add(participante);
            System.out.println(participante + " inscrito no workshop.");
            return true;
        } else {
            System.out.println("O número máximo de participantes foi atingido.");
            return false;
        }
    }

    @Override
    public void detalhes() {
        System.out.println("Workshop: " + getNome() + " | Data: " + getData() + " | Participantes: " + participantes.size() + "/" + maxParticipantes);
    }
}
