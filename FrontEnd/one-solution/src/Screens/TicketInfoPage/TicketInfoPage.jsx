import React from 'react';
import { Link } from "react-router-dom";

import Box from '@mui/material/Box';

import { InsiderHeader } from '../../Components/Header/Header';

import { SingleTicketAPIResponse } from '../../ValueObjects/TicketAPIResponse';

import casa from '../../Assets/casa.png';
import mercadoria from '../../Assets/mercadoria.png';

import './TicketInfoPage.css';
import '../../App.css';

/**
 * Página de informações de um ticket.
 * @returns JSX da página de info de ticket.
 */
const TicketInfoPage = () => {

  //Com chamadas de API, este componente teria um parâmetro que seria o JSON a preencher a página.
  //Neste protótipo, usamos o JSON presente na SingleTicketAPIResponse.

  return (
    <div className='ticketInfo-screen'>
      <InsiderHeader />
      <div className='Contents'>
        {/* Área para conteúdos da página */}
        <div className='background-info-div'>
          {/* Caixa cinza englobando os tickets */}
          <Box
            className='workarea-box'
            display='flex'
            flexDirection='column'
            justifyContent='flex-start'
            sx={{
              width: '95vw',
              height: '80vh',
              backgroundColor: '#3B424E',
              borderRadius: '0 50px 0 50px'
            }}>

            <Link to='/purchaseInfo' className='info-button-wrapper'>
              <Box
                sx={{
                  backgroundColor: '#F1E46E',
                  borderRadius: '50px',
                  height: '24px',
                  margin: '24px 24px -24px -24px',
                  padding: '2px',
                  width: '200px',
                }}>
                Acessar informações
              </Box>
            </Link>

            <div className='ticket-info-title'>
              {SingleTicketAPIResponse.codigo}
            </div>

            <div className='names-and-tags'>
              {/* Em uma versão não de protótipo, todas as informações abaixo viriam de microsserviços */}
              <Box
                className='tag-box'
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '50px',
                  height: '24px',
                  margin: '12px 0 0 24px',
                  padding: '2px',
                  width: '150px',
                }}>
                Raze (criador)
              </Box>
              <Box
                className='tag-box'
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '50px',
                  height: '24px',
                  margin: '12px 0 0 24px',
                  padding: '2px',
                  width: '150px',
                }}>
                {SingleTicketAPIResponse.responsavel} (responsavel)
              </Box>
              <Box
                className='tag-box'
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '50px',
                  height: '24px',
                  margin: '12px 0 0 24px',
                  padding: '2px',
                  width: '260px',
                }}>
                Tags: #Insatisfeito #Fogo #Critico ...
              </Box>
            </div>

            <Box
              sx={{
                backgroundColor: 'white',
                height: 'auto',
                margin: '24px',
                padding: '12px',
              }}>
              {SingleTicketAPIResponse.descricao}
            </Box>

            <div className='ticket-info-title'>
              Anexos
            </div>

            <Box
              sx={{
                backgroundColor: 'white',
                height: 'auto',
                margin: '24px',
                padding: '12px',
              }}>
              <img src={casa} alt='Imagem 1 enviada pelo usuário' className='anexo-imagem' />
              <img src={mercadoria} alt='Imagem 2 enviada pelo usuário' className='anexo-imagem' />
            </Box>

          </Box>
        </div>
      </div>
    </div >
  );
};

export default TicketInfoPage;