import React from 'react';

import { InsiderHeader } from '../../Components/Header/Header';

import './TicketListPage.css'
import '../../App.css'

const TicketListPage = () => {
  return (
    <div className='ticketList-screen'>
      <InsiderHeader />
      Página de listagem dos tickets
    </div>
  );
};

export default TicketListPage;