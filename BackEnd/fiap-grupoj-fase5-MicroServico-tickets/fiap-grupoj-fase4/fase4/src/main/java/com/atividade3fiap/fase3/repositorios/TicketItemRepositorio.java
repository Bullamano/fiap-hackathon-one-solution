package com.atividade3fiap.fase3.repositorios;

import com.atividade3fiap.fase3.entidade.TicketItem;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;

public interface TicketItemRepositorio extends JpaRepository<TicketItem, Long> {

    static List<TicketItem> findByTicketItem(TicketItem ticketItem) {
        return null;
    }
}
