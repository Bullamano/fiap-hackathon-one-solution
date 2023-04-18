import React from 'react';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';

import { InsiderHeader } from '../../Components/Header/Header';

import checkbox from '../../Assets/Checkbox.png';

import TicketAPIResponse from '../../ValueObjects/TicketAPIResponse';

import './TicketListPage.css'
import '../../App.css'
import TicketCells from '../../Components/TicketCell/TicketCells';

const TicketListPage = () => {
  return (
    <div className='ticketList-screen'>
      <InsiderHeader />
      <div className='Contents'>
        {/* Área para conteúdos da página */}
        <div className='background-div'>
          {/* Caixa branca englobando os tickets */}
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='flex-start'
            sx={{
              width: '95vw',
              height: '80vh',
              backgroundColor: '#EAEAEA',
              borderRadius: '0 50px 0 50px'
            }}>
            <div className='ticket-list-title'>
              Reclamações abertas
            </div>
            {/* <div className='table-titles'>
              <Tooltip title='Esta funcionalidade não está habilitada na versão de protótipo'>
                <img src={checkbox} className='checkbox-image' />
              </Tooltip>
              <p>Código</p>
              <p>Impacto</p>
              <p>Descrição</p>
              <p>Responsável</p>
              <p>Data de criação</p>
            </div>
            <Divider sx={{margin: '0 10px 0 10px'}}/> */}
            <TicketCells tickets={TicketAPIResponse} />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default TicketListPage;