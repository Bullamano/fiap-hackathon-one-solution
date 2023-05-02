package com.atividade3fiap.fase3.api.mapeadores;

import com.atividade3fiap.fase3.api.dto.TicketItemDto;
import com.atividade3fiap.fase3.entidade.TicketItem;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

/**
 * Classe para mapeamento de TicketItem
 */
@Component
public class TicketItemMapeador {

    /**
     * Conversor para TicketItem
     * @param ticketItemDTO Objeto de transferência Tutorial Item
     * @return Um objeto TicketItem com as informações desejadas
     */
    public TicketItem converterParaEntidade(TicketItemDto ticketItemDTO) {
        TicketItem ticketItem = new TicketItem();

        ticketItem.setCodigo(ticketItemDTO.getCodigo());
        ticketItem.setDescricao(ticketItemDTO.getDescricao());
        ticketItem.setImpacto(ticketItemDTO.getImpacto());
        ticketItem.setResponsavel(ticketItemDTO.getResponsavel());
        ticketItem.setDataCriacao(LocalDateTime.now());

        return ticketItem;
    }
}
