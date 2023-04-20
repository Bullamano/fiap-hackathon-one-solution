package com.atividade3fiap.fase3.repositorios;

import com.atividade3fiap.fase3.entidade.CompraItem;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;

public interface CompraItemRepositorio extends JpaRepository<CompraItem, Long> {

    static List<CompraItem> findByCompraItem(CompraItem compraItem) {
        return null;
    }
}
