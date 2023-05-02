package com.atividade3fiap.fase3.api.excecoes;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import javax.persistence.EntityNotFoundException;

@ResponseStatus(code = HttpStatus.NOT_FOUND)
public class TicketItemNaoEncontradoException  extends EntityNotFoundException {

    public TicketItemNaoEncontradoException(Long id){
        super(String.format("TicketItem com o ID %s não encontrado", id));
    }

}
