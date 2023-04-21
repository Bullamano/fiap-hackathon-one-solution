import React from 'react';

import Box from '@mui/material/Box';

import { InsiderHeader } from '../../Components/Header/Header';

import { SingleTicketAPIResponse } from '../../ValueObjects/TicketAPIResponse';
import { ComprasAPIResponse } from '../../ValueObjects/ComprasAPIResponse';

import product from '../../Assets/product.png';
import checkmark from '../../Assets/checkmark.png';

import './PurchasePage.css';
import '../../App.css';

/**
 * Tela com informações de uma compra que pertence a um ticket.
 * @returns JSX da página de informações de compra.
 */
const PurchasePage = () => {
  return (
    <div className='purchase-screen'>
      <InsiderHeader />
      <div className='Contents'>
        {/* Área para conteúdos da página */}
        <div className='background-purchase-div'>
          {/* Caixa cinza englobando os tickets */}
          <Box
            className='purchase-bkg-box'
            display='flex'
            flexDirection='column'
            justifyContent='flex-start'
            sx={{
              width: '95vw',
              height: '80vh',
              backgroundColor: '#3B424E',
              borderRadius: '0 50px 0 50px'
            }}>

            <div className='purchase-info-title'>
              {SingleTicketAPIResponse.codigo}
            </div>

            <div className='purchase-subtitle'>
              Compra: {ComprasAPIResponse.codigo}
            </div>

            <Box
              className='outer-track-box'
              sx={{
                backgroundColor: 'white',
                borderRadius: '50px',
                height: '50px',
                margin: '12px 0 0 24px',
                padding: '2px 25px 12px 2px',
                width: '370px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'left',
                justifyContent: 'space-between',
              }}>
              <Box
                className='inner-track-box'
                sx={{
                  backgroundColor: '#3361BB',
                  borderRadius: '50px',
                  height: '25px',
                  margin: '12px 0 0 24px',
                  padding: '2px',
                  width: '100px',
                }}>
                Compra OK
              </Box>
              <Box
                className='inner-track-box'
                sx={{
                  backgroundColor: '#3361BB',
                  borderRadius: '50px',
                  height: '25px',
                  margin: '12px 0 0 24px',
                  padding: '2px',
                  width: '100px',
                }}>
                Enviada
              </Box>
              <Box
                className='inner-track-box'
                sx={{
                  backgroundColor: '#3361BB',
                  borderRadius: '50px',
                  height: '25px',
                  margin: '12px 0 0 24px',
                  padding: '2px',
                  width: '100px',
                }}>
                Recebido
              </Box>
            </Box>

            <div className='infos-purchase'>
              <div>
                <div className='purchase-info-subtitle'>
                  Informações de pagamento
                </div>
                <Box
                  className='info-pagto'
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: '30px',
                    height: 'auto',
                    margin: '24px',
                    padding: '12px',
                  }}>
                  {ComprasAPIResponse.infoPagto}
                </Box>
              </div>
              <div>
                <div className='purchase-info-subtitle'>
                  Informações do produto
                </div>
                <Box
                  className='info-prod'
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: '30px',
                    height: 'auto',
                    margin: '24px',
                    padding: '12px',
                  }}>
                  <img src={product} alt='Produto comprado' className='product-image' />
                  <br /><br />
                  {ComprasAPIResponse.infoProd}
                </Box>
              </div>
              <div>
                <div className='purchase-info-subtitle'>
                  Compra
                </div>
                <Box
                  className='info-compra'
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: '30px',
                    height: 'auto',
                    margin: '24px',
                    padding: '12px',
                  }}>
                  <img src={checkmark} alt='Checkmark indicanco compra protegida' className='checkmark-image' />
                  <br /><br />
                  {ComprasAPIResponse.infoCompra}
                </Box>
              </div>
            </div>

          </Box>
        </div>
      </div>
    </div >
  );
};

export default PurchasePage;