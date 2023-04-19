import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import checkbox from '../../Assets/Checkbox.png';

import './TicketCells.css';

const TicketCells = ({ tickets }) => {

  {
    //TODO acabar componente de célular e transformar um deles em botão para a tela de TicketInfo

    /* <CustomCard key={'Card' + index} id={card.id} title={card.title} imageUrl={card.imageUrl} /> */
  }

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

const UniqueCell = ({ cell, index }) => {
  if (index % 2 == 0) {
    // Light color cell
    return (
      <Grid className='custom-item' item>
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
          <div className='inside-box-light'>
            {cell.id}
          </div>
        </Box>
      </Grid>
    );
  }
  else {
    // Dark color cell
    return (
      <Grid className='custom-item' item>
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='flex-start'
          sx={{
            backgroundColor: '#343434',
            borderRadius: '0 50px 50px 50px',
            height: '80px',
            margin: '20px',
            width: '100%',
          }}>
          <div className='inside-box-dark'>
            {cell.id}
          </div>
        </Box>
      </Grid>
    );
  }
}

export default TicketCells;