package com.atividade3fiap.fase3.api.excecoes;

public class CompraItemPossuiItensException extends RuntimeException{
    public CompraItemPossuiItensException(Long id) {
        super(String.format("Tutorial Item  com o ID %s possui itens(s) realacionado(s)", id));
    }
}
