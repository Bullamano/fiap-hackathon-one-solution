package com.atividade3fiap.fase3.api.mapeadores;

import com.atividade3fiap.fase3.api.dto.CompraItemDto;
import com.atividade3fiap.fase3.entidade.CompraItem;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

/**
 * Classe para mapeamento de CompraItem
 */
@Component
public class CompraItemMapeador {

    /**
     * Conversor para CompraItem
     * @param compraItemDTO Objeto de transferência Tutorial Item
     * @return Um objeto CompraItem com as informações desejadas
     */
    public CompraItem converterParaEntidade(CompraItemDto compraItemDTO) {
        CompraItem compraItem = new CompraItem();

        compraItem.setCodigo(compraItemDTO.getCodigo());
        compraItem.setInfoPagamento(compraItemDTO.getInfoPagamento());
        compraItem.setInfoProduto(compraItemDTO.getInfoProduto());
        compraItem.setInfoCompra(compraItemDTO.getInfoCompra());
        compraItem.setStatus(compraItemDTO.getStatus());

        return compraItem;
    }
}
