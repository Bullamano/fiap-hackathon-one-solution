package com.atividade3fiap.fase3.api.dto;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

@Getter @Setter
public class TicketItemDto {

    @NotNull
    private Long codigo;

    @NotNull
    private int impacto;

    @NotNull
    private String descricao;

    @NotNull
    private String responsavel;

}
