package com.atividade3fiap.fase3.api.controller;

import com.atividade3fiap.fase3.api.dto.CompraItemDto;
import com.atividade3fiap.fase3.entidade.CompraItem;
import com.atividade3fiap.fase3.servicos.CompraItemServico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/compras")
public class CompraItemControllerApi {

   @Autowired
    private CompraItemServico compraItemServico;
   @Autowired
    private PagedResourcesAssembler<CompraItem> pagedResourcesAssembler;


    public CompraItemControllerApi(PagedResourcesAssembler<CompraItem> pagedResourcesAssembler) {
        this.pagedResourcesAssembler = pagedResourcesAssembler;
    }

    /**
     * GET para retornar todos os itens salvos
     * @return JSON contendo todos os itens presentes no banco
     */
    @GetMapping
    public List<CompraItem> buscarTodos() {
        List<CompraItem> compraItems = compraItemServico.buscarTodos();

        return compraItems;

        //Caso seja desejada paginação, pode ser descomentada a linha abaixo e o retorno
        //trocado por CollectionModel<EntityModel<CompraItem>>
        //return pagedResourcesAssembler.toModel(compraItems, compraItemAssembler);
    }

    /**
     * GET para um item específico por ID
     * @param id ID do item pesquisado
     * @return JSON contendo o item desejado
     */
    @GetMapping("/{id}")
    public CompraItem buscarPorId(@PathVariable Long id) {
        CompraItem compraItem = compraItemServico.buscarPorId(id);

        return compraItem;
    }

    /**
     * POST para o cadastro de novos itens
     * @param compraItemDto Propriedades do item presentes no body da requisição
     * @return JSON contendo o item criado
     */
    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public void cadastrar(@RequestBody @Valid CompraItemDto compraItemDto) {
        compraItemServico.cadastrar(compraItemDto);
    }

    /**
     * PUT para modificar um item já existente
     * @param compraItemDto Propriedades do item presentes no body da requisição
     * @param id ID do item a ser modificado
     * @return JSON contendo o item modificado
     */
    @PutMapping("/{id}")
    public CompraItem atualizar(@RequestBody @Valid CompraItemDto compraItemDto, @PathVariable Long id) {
        CompraItem compraItem = compraItemServico.atualizar(compraItemDto, id);

        return compraItem;
    }

    /**
     * DELETE para excluir um item já existente
     * @param id ID do item a ser deletado
     * @return Código de retorno indicando o sucesso da operação.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<?> excluirPorId(@PathVariable Long id) {
        compraItemServico.excluirPorId(id);

        return ResponseEntity.noContent().build();
    }

    @GetMapping("/porta")
    public String retornaPorta(@Value("${local.server.port}") String porta){
        return String.format("Requisição respondida pela instância executando na porta %s", porta);
    }

}
