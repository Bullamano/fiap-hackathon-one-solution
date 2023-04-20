package com.atividade3fiap.fase3.api.controller;

import com.atividade3fiap.fase3.api.dto.TicketItemDto;
import com.atividade3fiap.fase3.entidade.TicketItem;
import com.atividade3fiap.fase3.servicos.TicketItemServico;

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
@RequestMapping("/api/v1/tickets")
public class TicketItemControllerApi {

   @Autowired
    private TicketItemServico ticketItemServico;
   @Autowired
    private PagedResourcesAssembler<TicketItem> pagedResourcesAssembler;


    public TicketItemControllerApi(PagedResourcesAssembler<TicketItem> pagedResourcesAssembler) {
        this.pagedResourcesAssembler = pagedResourcesAssembler;
    }

    /**
     * GET para retornar todos os itens salvos
     * @return JSON contendo todos os itens presentes no banco
     */
    @GetMapping
    public List<TicketItem> buscarTodos() {
        List<TicketItem> ticketItems = ticketItemServico.buscarTodos();

        return ticketItems;

        //Caso seja desejada paginação, pode ser descomentada a linha abaixo e o retorno
        //trocado por CollectionModel<EntityModel<TicketItem>>
        //return pagedResourcesAssembler.toModel(ticketItems, ticketItemAssembler);
    }

    /**
     * GET para um item específico por ID
     * @param id ID do item pesquisado
     * @return JSON contendo o item desejado
     */
    @GetMapping("/{id}")
    public TicketItem buscarPorId(@PathVariable Long id) {
        TicketItem ticketItem = ticketItemServico.buscarPorId(id);

        return ticketItem;
    }

    /**
     * POST para o cadastro de novos itens
     * @param ticketItemDto Propriedades do item presentes no body da requisição
     * @return JSON contendo o item criado
     */
    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public void cadastrar(@RequestBody @Valid TicketItemDto ticketItemDto) {
        ticketItemServico.cadastrar(ticketItemDto);
    }

    /**
     * PUT para modificar um item já existente
     * @param ticketItemDto Propriedades do item presentes no body da requisição
     * @param id ID do item a ser modificado
     * @return JSON contendo o item modificado
     */
    @PutMapping("/{id}")
    public TicketItem atualizar(@RequestBody @Valid TicketItemDto ticketItemDto, @PathVariable Long id) {
        TicketItem ticketItem = ticketItemServico.atualizar(ticketItemDto, id);

        return ticketItem;
    }

    /**
     * DELETE para excluir um item já existente
     * @param id ID do item a ser deletado
     * @return Código de retorno indicando o sucesso da operação.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<?> excluirPorId(@PathVariable Long id) {
        ticketItemServico.excluirPorId(id);

        return ResponseEntity.noContent().build();
    }

    @GetMapping("/porta")
    public String retornaPorta(@Value("${local.server.port}") String porta){
        return String.format("Requisição respondida pela instância executando na porta %s", porta);
    }

}
