package com.atividade3fiap.fase3.servicos;

import com.atividade3fiap.fase3.api.dto.TicketItemDto;
import com.atividade3fiap.fase3.api.excecoes.TicketItemNaoEncontradoException;
import com.atividade3fiap.fase3.api.mapeadores.TicketItemMapeador;
import com.atividade3fiap.fase3.entidade.TicketItem;
import com.atividade3fiap.fase3.repositorios.TicketItemRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TicketItemServico {

    @Autowired
    private TicketItemRepositorio ticketItemRepositorio;

    @Autowired
    private TicketItemMapeador ticketItemMapeador;

    public List<TicketItem> buscarTodos() {
        return ticketItemRepositorio.findAll();
    }

    //public Page<TicketItem> buscarTodos(Pageable paginacao) {
    //    return ticketItemRepositorio.findAll(paginacao);
    //}

    public TicketItem buscarPorId(Long id) {
        TicketItem ticketItemEncontrado = ticketItemRepositorio.findById(id)
                .orElseThrow(() -> new TicketItemNaoEncontradoException(id));

        return ticketItemEncontrado;
    }

    public TicketItem cadastrar(TicketItem ticketItem) {
        return ticketItemRepositorio.save(ticketItem);
    }

    public TicketItem cadastrar(TicketItemDto ticketItemDTO) {
        TicketItem ticketItem = ticketItemMapeador.converterParaEntidade(ticketItemDTO);

        return ticketItemRepositorio.save(ticketItem);
    }

    public TicketItem atualizar(TicketItem ticketItem, Long id) {
        buscarPorId(id);

        return ticketItemRepositorio.save(ticketItem);
    }

    public TicketItem atualizar(TicketItemDto ticketItemDTO, Long id) {
        buscarPorId(id);

        TicketItem ticketItem = ticketItemMapeador.converterParaEntidade(ticketItemDTO);
        ticketItem.setCodigo(id);

        return ticketItemRepositorio.save(ticketItem);
    }

    public void excluirPorId(Long id) {
        TicketItem ticketItemEncontrado = buscarPorId(id);

        if (ticketItemEncontrado != null) {
            ticketItemRepositorio.delete(ticketItemEncontrado);
        }
    }
}
