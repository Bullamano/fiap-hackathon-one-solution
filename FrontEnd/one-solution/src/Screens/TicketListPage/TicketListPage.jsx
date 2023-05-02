import React from 'react';

//O import abaixo seria usado em conjunto com as APIs
//import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';

import { InsiderHeader } from '../../Components/Header/Header';

import { TicketAPIResponse } from '../../ValueObjects/TicketAPIResponse';

import checkbox from '../../Assets/Checkbox.png';

import './TicketListPage.css';
import '../../App.css';
import TicketCells from '../../Components/TicketCell/TicketCells';

/**
 * Tela de listagem de tickets. Esta tela relizaria uma chamada à API
 * de tickets e a popularia. Para o protótipo, a chamada foi omitida e
 * os valores são retirados de um JSON de exemplo.
 * @returns 
 */
const TicketListPage = () => {

  /**
   * Abaixo temos como seriam recuperados os itens
   * da API. O resultado returnAPI seria passado
   * para o objeto TicketCells.
   */
  // const [returnAPI, setReturnAPI] = useState([]);

  // async function fetchData()
  // {
  //   const apiResponse = await GetTutorialItems();

  //   setReturnAPI(apiResponse);
  // }

  // useEffect(() =>
  // {
  //   //React reclama de react-hooks/exhaustive-deps,
  //   //contudo este é o uso pretendido.
  //   fetchData();
  // }, []);

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
            <div className='table-titles'>
              <Tooltip title='Esta funcionalidade não está habilitada na versão de protótipo' className='inside-text'>
                <img src={checkbox} className='checkbox-image' />
              </Tooltip>
              <p className='inside-text'>Código</p>
              <p className='inside-text'>Impacto</p>
              <p className='inside-text-non-essential'>Descrição</p>
              <p className='inside-text'>Responsável</p>
              <p className='inside-text-non-essential'>Data de criação</p>
            </div>
            <Divider sx={{ margin: '0 10px 0 10px' }} />

            <TicketCells tickets={TicketAPIResponse} />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default TicketListPage;