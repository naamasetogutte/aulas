package org.example;

// Classe Reuniao
class Reuniao extends Evento {
    private boolean isPrivada;
    private String senha;

    public Reuniao(String nome, String data, boolean isPrivada, String senha) {
        super(nome, data);
        this.isPrivada = isPrivada;
        this.senha = isPrivada ? senha : null;
    }

    public boolean acessarReuniao(String senha) {
        if (isPrivada) {
            if (this.senha.equals(senha)) {
                System.out.println("Acesso à reunião privado permitido.");
                return true;
            } else {
                System.out.println("Senha incorreta.");
                return false;
            }
        } else {
            System.out.println("Reunião pública, acesso permitido.");
            return true;
        }
    }

    @Override
    public void detalhes() {
        System.out.println("Reunião: " + getNome() + " | Data: " + getData() + " | Tipo: " + (isPrivada ? "Privada" : "Pública"));
    }
}