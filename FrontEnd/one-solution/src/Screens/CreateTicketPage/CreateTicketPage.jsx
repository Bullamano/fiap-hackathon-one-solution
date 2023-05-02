import React from 'react';

import { UserHeader } from '../../Components/Header/Header';

import './CreateTicketPage.css'

import Box from '@mui/material/Box';

const CreateTicketPage = () => {
  return (
    <div className='createTicket-screen'>
      <UserHeader />
      <div className='Contents'>
        <h1>
          No que podemos ajudar?
        </h1>
      </div>

      <div className='background-info-div'>
        {/* Caixa cinza englobando os tickets */}
        <Box
            className='workarea-box'
            display='flex'
            flexDirection='column'
            justifyContent='flex-start'
            sx={{
              width: '50vw',
              height: '100vh',
              backgroundColor: '#cacbcf',
              borderRadius: '0 50px 0 0',
              borderTopLeftRadius: '50px'
            }}>

            <Box className='form-box'>

              <h1 style={{ fontSize: "20px", textAlign: 'left', paddingLeft: '15px', color: '#8d8e8f'}}>
              Insira seu nome
              </h1>
            </Box>

            <Box className='form-box'>
              <h1 style={{ fontSize: "20px", textAlign: 'left', paddingLeft: '15px', color: '#8d8e8f'}}>
              Insira o email no qual deseja ser contatado(a)
              </h1>
            </Box>

            <Box className='form-box'>
              <h1 style={{ fontSize: "20px", textAlign: 'left', paddingLeft: '15px', color: '#8d8e8f'}}>
              Escolha o tipo de problema que ocorreu
              </h1>
            </Box>

            <Box className='decription-box'>
              <h1 style={{ fontSize: "20px", textAlign: 'left', paddingLeft: '15px', color: '#8d8e8f'}}>
              Descreva o seu problema para que possamos melhor ajudar
              </h1>
            </Box>

            <Box className='file-upload-box'>
              <h1 style={{ fontSize: "20px", textAlign: 'center', paddingLeft: '15px', color: '#8d8e8f'}}>
                Envie arquivos
              </h1>
            </Box>

            <Box className='send-box'>
              <h1 style={{ fontSize: "20px", textAlign: 'center', paddingLeft: '15px', color: '#8d8e8f'}}>
                Enviar
              </h1>
            </Box>


          </Box>
      </div>
    </div>
  );
};

export default CreateTicketPage;
