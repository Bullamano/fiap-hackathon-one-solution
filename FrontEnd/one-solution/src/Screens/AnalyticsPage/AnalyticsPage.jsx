import React from 'react';

import { InsiderHeader } from '../../Components/Header/Header';

import './AnalyticsPage.css'
import '../../App.css'

import Box from '@mui/material/Box';

import AnalizeXYZ from '../../Assets/AnalizeXYZ.jpeg';
import AnalizeXPTO from '../../Assets/AnaliseXPTO.jpg';
import AnaliseABCD from '../../Assets/AnaliseABCD.png';

const AnalyticsPage = () => {
  return (
    <div className='analytics-screen'>
      <InsiderHeader />
      <div className='Contents'>
        <div className='background-analytics-div'>
          {/* Caixa azul englobando os tickets */}
          <Box
            className='analytics-bkg-box'
            display='flex'
            flexDirection='column'
            justifyContent='flex-start'
            sx={{
              width: '95vw',
              height: '100vh',
              backgroundColor: '#92afe0',
              borderRadius: '0 50px 0 50px'
            }}>

            <div className='analytics-info-title'>
              Board para análises
            </div>

            <div className='infos-analytics'style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '24px' }}>
               <div style={{ gridArea: '1 / 1 / 2 / 2' }}>
                <div className='analytics-info-subtitle'>
                  Análise XYZ
                </div>
                <Box
                  className='info-AnaliseXYZ'
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: '30px',
                    height: 'auto',
                    margin: '20px',
                    padding: '30px',
                  }}>
                  <img src={AnalizeXYZ} alt='Análise XYZ' className='anexo-imagem' />
                </Box>

              </div>

              <div style={{ gridArea: '1 / 2 / 2 / 3' }}>
                <div className='analytics-info-subtitle'>
                  Análise XPTO
                </div>

                <Box
                  className='info-AnaliseXPTO'
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: '30px',
                    height: 'auto',
                    margin: '20px',
                    padding: '30px',
                  }}>
                  <img src={AnalizeXPTO} alt='AnaliseXPTO' className='anexo-imagem' />
                </Box>

              </div>

              <div style={{ gridArea: '2 / 1 / 3 / 3', textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <div className='analytics-info-subtitle'>
                  Análise ABCD
                </div>

                <Box
                  className='info-AnaliseABCD'
                  sx={{
                    borderRadius: '30px',
                    height: 'auto',
                    margin: '24px',
                    padding: '12px',
                  }}>
                  <img src={AnaliseABCD} alt='AnaliseABCD' className='anexo-grafico-pizza' />
                </Box>
              </div>

              </div>

          </Box>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;