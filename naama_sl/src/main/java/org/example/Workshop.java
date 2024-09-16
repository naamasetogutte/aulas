package org.example;

import java.util.ArrayList;
import java.util.List;

public class Workshop extends Evento {
    private static final int LIMITE_PARTICIPANTES = 30;
    private List<String> participantes;

    public Workshop(String nome, String data) {
        super(nome, data);
        this.participantes = new ArrayList<>();
    }

    public boolean inscreverParticipante(String participante) {
        if (participantes.size() < LIMITE_PARTICIPANTES) {
            participantes.add(participante);
            return true;
        }
        return false;
    }

    @Override
    public boolean validar() {
        return getNome() != null && !getNome().isEmpty() && getData() != null && !getData().isEmpty();
    }
}
