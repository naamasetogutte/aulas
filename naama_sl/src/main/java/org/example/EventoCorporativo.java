package org.example;

public class EventoCorporativo extends Evento {
    private String sala;
    private String refeitorio;

    public EventoCorporativo(String nome, String data, String sala, String refeitorio) {
        super(nome, data);
        this.sala = sala;
        this.refeitorio = refeitorio;
    }

    @Override
    public boolean validar() {
        return getNome() != null && !getNome().isEmpty() && getData() != null && !getData().isEmpty() &&
                sala != null && !sala.isEmpty() && refeitorio != null && !refeitorio.isEmpty();
    }
}
