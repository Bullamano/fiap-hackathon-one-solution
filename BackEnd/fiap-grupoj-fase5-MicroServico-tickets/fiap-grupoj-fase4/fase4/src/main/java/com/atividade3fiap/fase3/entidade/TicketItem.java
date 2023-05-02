package com.atividade3fiap.fase3.entidade;

import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter @Setter
@Entity
@Table(name = "tickets")
public class TicketItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "tickets")
    @Column(name = "codigo")
    private Long codigo;

    @Column(name = "impacto", nullable = false)
    private Integer impacto;

    @Column(name = "descricao", nullable = false)
    private String descricao;

    @Column(name = "responsavel", nullable = false)
    private String responsavel;

    @Column(name = "data_criacao", nullable = false)
    private LocalDateTime dataCriacao;

}
