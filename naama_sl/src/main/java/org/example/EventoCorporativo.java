package org.example;

// Classe Evento Corporativo
class EventoCorporativo extends Evento {
    private String ambienteReservado;

    public EventoCorporativo(String nome, String data, String ambienteReservado) {
        super(nome, data);
        this.ambienteReservado = ambienteReservado;
    }

    @Override
    public void detalhes() {
        System.out.println("Evento Corporativo: " + getNome() + " | Data: " + getData() + " | Ambiente: " + ambienteReservado);
    }
}
