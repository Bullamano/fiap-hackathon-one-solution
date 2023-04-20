import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';

import altaPrioridade from '../../Assets/AltaPrioridade.png';
import baixaPrioridade from '../../Assets/BaixaPrioridade.png';
import checkbox from '../../Assets/Checkbox.png';
import mediaPrioridade from '../../Assets/MediaPrioridade.png';

import './TicketCells.css';

/**
 * Lista de células a serem renderizadas na tela de lista de tickets.
 * @param {*} tickets Informações de tickets a preencherem a tela.
 * @returns Uma lista das células com base nos tickets fornecidos.
 */
const TicketCells = ({ tickets }) => {

  return (
    <div className='ticket-cells'>
      <Grid className='custom-grid' container>
        {tickets.map((cell, index) =>
          <UniqueCell key={'Grid' + index} cell={cell} index={index} />
        )}
      </Grid>
    </div>
  );
};

/**
 * Célula única a ser renderizada a partir do loop no map do TicketCells.
 * @param {*} cell Célular a ser renderizada na tela.
 * @param {*} index Índice de loop para geração de células.
 * @returns Ticket para a lista com cor baseada no index.
 */
const UniqueCell = ({ cell, index }) => {
  if (index % 2 == 0) {
    // Light color cell
    return (
      <CellRender cell={cell} bkgColor={'#BDBDBD'} fntColor={'black'} />
    );
  }
  else {
    // Dark color cell
    return (
      <CellRender cell={cell} bkgColor={'#343434'} fntColor={'white'} />
    );
  }
};

const CellRender = ({ cell, bkgColor, fntColor }) => {

  if (cell.descricao.length > 50) {
    cell.descricao = cell.descricao.substring(0, 50) + '...';
  }
  else {
    cell.descricao = cell.descricao.padEnd(50, ' ');
  }

  let imagemPrioridade;
  let prioridadeStyle;

  if (cell.impacto == 3) {
    imagemPrioridade = altaPrioridade;
    prioridadeStyle = 'prioridade-arrow';
  }
  else if (cell.impacto == 2) {
    imagemPrioridade = mediaPrioridade;
    prioridadeStyle = 'prioridade-lines';
  }
  else {
    imagemPrioridade = baixaPrioridade;
    prioridadeStyle = 'prioridade-arrow';
  }

  return (
    <Grid className='custom-item' item>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='flex-start'
        sx={{
          backgroundColor: bkgColor,
          borderRadius: '0 50px 50px 50px',
          height: '80px',
          margin: '20px',
          width: '100%',
          color: fntColor
        }}>
        <div className='inside-box'>
          <Tooltip title='Checkbox para seleção não está habilitado na versão de protótipo.' className='inside-text'>
            <img src={checkbox} className='checkbox-image' />
          </Tooltip>
          <p className='inside-text'>
            {cell.codigo}
          </p>
          <div className='inside-text'>
            <img src={imagemPrioridade} className={prioridadeStyle} />
          </div>
          <p className='inside-text-non-essential'>
            {cell.descricao}
          </p>
          <p className='inside-text'>
            {cell.responsavel}
          </p>
          <p className='inside-text-non-essential'>
            {cell.dataCriacao}
          </p>
        </div>
      </Box>
    </Grid>
  );
}

export default TicketCells;