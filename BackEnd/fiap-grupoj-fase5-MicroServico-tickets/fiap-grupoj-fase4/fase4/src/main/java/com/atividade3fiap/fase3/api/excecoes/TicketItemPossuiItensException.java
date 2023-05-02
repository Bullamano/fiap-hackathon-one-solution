package com.atividade3fiap.fase3.api.excecoes;

public class TicketItemPossuiItensException extends RuntimeException{
    public TicketItemPossuiItensException(Long id) {
        super(String.format("Tutorial Item  com o ID %s possui itens(s) realacionado(s)", id));
    }
}
