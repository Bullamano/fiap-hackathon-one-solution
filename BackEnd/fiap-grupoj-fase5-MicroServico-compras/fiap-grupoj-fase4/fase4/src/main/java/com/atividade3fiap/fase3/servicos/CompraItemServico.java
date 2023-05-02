package com.atividade3fiap.fase3.servicos;

import com.atividade3fiap.fase3.api.dto.CompraItemDto;
import com.atividade3fiap.fase3.api.excecoes.CompraItemNaoEncontradoException;
import com.atividade3fiap.fase3.api.mapeadores.CompraItemMapeador;
import com.atividade3fiap.fase3.entidade.CompraItem;
import com.atividade3fiap.fase3.repositorios.CompraItemRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompraItemServico {

    @Autowired
    private CompraItemRepositorio compraItemRepositorio;

    @Autowired
    private CompraItemMapeador compraItemMapeador;

    public List<CompraItem> buscarTodos() {
        return compraItemRepositorio.findAll();
    }

    //public Page<CompraItem> buscarTodos(Pageable paginacao) {
    //    return compraItemRepositorio.findAll(paginacao);
    //}

    public CompraItem buscarPorId(Long id) {
        CompraItem compraItemEncontrado = compraItemRepositorio.findById(id)
                .orElseThrow(() -> new CompraItemNaoEncontradoException(id));

        return compraItemEncontrado;
    }

    public CompraItem cadastrar(CompraItem compraItem) {
        return compraItemRepositorio.save(compraItem);
    }

    public CompraItem cadastrar(CompraItemDto compraItemDTO) {
        CompraItem compraItem = compraItemMapeador.converterParaEntidade(compraItemDTO);

        return compraItemRepositorio.save(compraItem);
    }

    public CompraItem atualizar(CompraItem compraItem, Long id) {
        buscarPorId(id);

        return compraItemRepositorio.save(compraItem);
    }

    public CompraItem atualizar(CompraItemDto compraItemDTO, Long id) {
        buscarPorId(id);

        CompraItem compraItem = compraItemMapeador.converterParaEntidade(compraItemDTO);
        compraItem.setCodigo(id);

        return compraItemRepositorio.save(compraItem);
    }

    public void excluirPorId(Long id) {
        CompraItem compraItemEncontrado = buscarPorId(id);

        if (compraItemEncontrado != null) {
            compraItemRepositorio.delete(compraItemEncontrado);
        }
    }
}
