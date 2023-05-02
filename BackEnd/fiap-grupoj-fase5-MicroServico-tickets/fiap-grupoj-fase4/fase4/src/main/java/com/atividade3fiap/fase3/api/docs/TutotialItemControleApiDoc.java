package com.atividade3fiap.fase3.api.docs;

import com.atividade3fiap.fase3.api.dto.TicketItemDto;
import com.atividade3fiap.fase3.api.excecoes.ApiErro;
import com.atividade3fiap.fase3.api.excecoes.ValidacaoApiErro;
import com.atividade3fiap.fase3.entidade.TicketItem;
import io.swagger.annotations.*;
import org.springframework.data.domain.Pageable;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.http.ResponseEntity;
import springfox.documentation.annotations.ApiIgnore;


@Api(tags = "TicketItem")
public interface TutotialItemControleApiDoc {

    @ApiOperation(value = "Listar todos os ticketItems")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Listagem de ticketItems realizada com sucesso")
    })
    @ApiImplicitParams({
            @ApiImplicitParam(name = "pagina", dataType = "int", paramType = "query", defaultValue = "1", value = "Número da página que deseja recuperar (1..N)"),
            @ApiImplicitParam(name = "tamanho", dataType = "int", paramType = "query", defaultValue = "2", value = "Número de elementos por página."),
            @ApiImplicitParam(name = "sort", allowMultiple = true, dataType = "string", paramType = "query", value = "Criterio de ordenação no formato: propriedade(,asc|desc).")
    })
    CollectionModel<EntityModel<TicketItem>> buscarTodos(@ApiIgnore Pageable paginacao);

    @ApiOperation(value = "Buscar ticketItem por ID")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "TicketItem encontrado com sucesso"),
            @ApiResponse(code = 404, message = "TicketItem não encontrado", response = ApiErro.class)
    })
    EntityModel<TicketItem> buscarPorId(Long id);

    @ApiOperation(value = "Cadastrar ticketItem")
    @ApiResponses(value = {
            @ApiResponse(code = 201, message = "TicketItem cadastrado com sucesso"),
            @ApiResponse(code = 400, message = "Houveram erros de validação", response = ValidacaoApiErro.class)
    })
    EntityModel<TicketItem> cadastrar(TicketItemDto ticketItemDTO);

    @ApiOperation(value = "Atualizar ticketItem")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "TicketItem atualizado com sucesso"),
            @ApiResponse(code = 400, message = "Houveram erros de validação", response = ValidacaoApiErro.class),
            @ApiResponse(code = 404, message = "TicketItem não encontrado", response = ApiErro.class)
    })
    EntityModel<TicketItem> atualizar(TicketItemDto ticketItemDTO, Long id);

    @ApiOperation(value = "Excluir ticketItem")
    @ApiResponses(value = {
            @ApiResponse(code = 204, message = "TicketItem excluido com sucesso"),
            @ApiResponse(code = 404, message = "TicketItem não encontrado")
    })
    ResponseEntity<?> excluirPorId(Long id);
}
