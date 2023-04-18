import React from 'react';

import { UserHeader } from '../../Components/Header/Header';

import './CreateTicketPage.css'
import '../../App.css'

const CreateTicketPage = () => {
  return (
    <div className='createTicket-screen'>
      <UserHeader />
      <div className='Contents'>
        Página de criação de ticket
      </div>
    </div>
  );
};

export default CreateTicketPage;