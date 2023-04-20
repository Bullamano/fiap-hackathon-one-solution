package com.atividade3fiap.fase3.api.dto;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

@Getter @Setter
public class CompraItemDto {

    @NotNull
    private Long codigo;

    @NotNull
    private String infoPagamento;

    @NotNull
    private String infoProduto;

    @NotNull
    private String infoCompra;

    @NotNull
    private Integer status;

}
