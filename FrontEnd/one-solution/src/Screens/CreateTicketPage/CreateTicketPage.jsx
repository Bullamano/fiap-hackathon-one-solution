import React from 'react';

import { Link } from "react-router-dom";
import { Button } from '@mui/material';

import { UserHeader } from '../../Components/Header/Header';

import './CreateTicketPage.css'
import '../../App.css'

const CreateTicketPage = () => {
  return (
    <div className='createTicket-screen'>
      <UserHeader />
      Página de criação de ticket
    </div>
  );
};

export default CreateTicketPage;