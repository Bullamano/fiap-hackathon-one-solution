import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import checkbox from '../../Assets/Checkbox.png';

import './TicketCells.css';

const TicketCells = ({ tickets }) => {

  {/* <CustomCard key={'Card' + index} id={card.id} title={card.title} imageUrl={card.imageUrl} /> */ }

  return (
    <div className='ticket-cells'>
      <Grid className='custom-grid' container>
        {tickets.map((cell, index) =>
          <Grid className='custom-item' key={'Grid' + index} item>
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='flex-start'
              sx={{
                backgroundColor: '#BDBDBD',
                borderRadius: '0 50px 50px 50px',
                height: '80px',
                margin: '20px',
                width: '100%',
              }}>
              <div className='inside-box'>
                {cell.id}
              </div>
            </Box>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default TicketCells;