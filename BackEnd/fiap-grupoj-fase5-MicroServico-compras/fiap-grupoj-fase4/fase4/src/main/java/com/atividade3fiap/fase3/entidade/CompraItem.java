package com.atividade3fiap.fase3.entidade;

import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter @Setter
@Entity
@Table(name = "compras")
public class CompraItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "compras")
    @Column(name = "CODIGO")
    private Long codigo;

    @Column(name = "info_pagamento", nullable = false)
    private String infoPagamento;

    @Column(name = "info_produto", nullable = false)
    private String infoProduto;

    @Column(name = "info_compra", nullable = false)
    private String infoCompra;

    @Column(name = "status", nullable = false)
    private Integer status;

}
