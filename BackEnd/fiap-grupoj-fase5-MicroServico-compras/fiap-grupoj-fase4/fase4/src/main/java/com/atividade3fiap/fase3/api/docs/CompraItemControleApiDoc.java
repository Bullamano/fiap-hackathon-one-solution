package com.atividade3fiap.fase3.api.docs;

import com.atividade3fiap.fase3.api.dto.CompraItemDto;
import com.atividade3fiap.fase3.api.excecoes.ApiErro;
import com.atividade3fiap.fase3.api.excecoes.ValidacaoApiErro;
import com.atividade3fiap.fase3.entidade.CompraItem;
import io.swagger.annotations.*;
import org.springframework.data.domain.Pageable;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.http.ResponseEntity;
import springfox.documentation.annotations.ApiIgnore;


@Api(tags = "CompraItem")
public interface CompraItemControleApiDoc {

    @ApiOperation(value = "Listar todos os compraItems")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Listagem de compraItems realizada com sucesso")
    })
    @ApiImplicitParams({
            @ApiImplicitParam(name = "pagina", dataType = "int", paramType = "query", defaultValue = "1", value = "Número da página que deseja recuperar (1..N)"),
            @ApiImplicitParam(name = "tamanho", dataType = "int", paramType = "query", defaultValue = "2", value = "Número de elementos por página."),
            @ApiImplicitParam(name = "sort", allowMultiple = true, dataType = "string", paramType = "query", value = "Criterio de ordenação no formato: propriedade(,asc|desc).")
    })
    CollectionModel<EntityModel<CompraItem>> buscarTodos(@ApiIgnore Pageable paginacao);

    @ApiOperation(value = "Buscar compraItem por ID")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "CompraItem encontrado com sucesso"),
            @ApiResponse(code = 404, message = "CompraItem não encontrado", response = ApiErro.class)
    })
    EntityModel<CompraItem> buscarPorId(Long id);

    @ApiOperation(value = "Cadastrar compraItem")
    @ApiResponses(value = {
            @ApiResponse(code = 201, message = "CompraItem cadastrado com sucesso"),
            @ApiResponse(code = 400, message = "Houveram erros de validação", response = ValidacaoApiErro.class)
    })
    EntityModel<CompraItem> cadastrar(CompraItemDto compraItemDTO);

    @ApiOperation(value = "Atualizar compraItem")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "CompraItem atualizado com sucesso"),
            @ApiResponse(code = 400, message = "Houveram erros de validação", response = ValidacaoApiErro.class),
            @ApiResponse(code = 404, message = "CompraItem não encontrado", response = ApiErro.class)
    })
    EntityModel<CompraItem> atualizar(CompraItemDto compraItemDTO, Long id);

    @ApiOperation(value = "Excluir compraItem")
    @ApiResponses(value = {
            @ApiResponse(code = 204, message = "CompraItem excluido com sucesso"),
            @ApiResponse(code = 404, message = "CompraItem não encontrado")
    })
    ResponseEntity<?> excluirPorId(Long id);
}
