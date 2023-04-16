import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '@mui/material';

import SimpleHeader from '../../Components/Header/Header';

import './ProfileChooserPage.css'
import '../../App.css'

/**
 * Tela inicial da aplicação, para que seja decidido de qual
 * perfil deseja ser visto o site.
 * @returns JSX da tela inicial..
 */
const ProfileChooserPage = () => {
    return (
        <div className='profile-page'>
            <SimpleHeader />
            <div className='Contents'>
                <div className='initial-info-text'>
                    O One Solution é dividido em três possíveis perfis para visualização do sistema.
                    Nesta prévia, podem ser acessados os mocks destes tipos usando os botões abaixo.
                    Por favor, clique no perfil que deseja utilizar para visualizar a aplicação.
                </div>
                <div className='initial-screen-buttons'>
                    <Link to={'/createTicket'} className='initial-button-wrapper'>
                        <Button className='initial-button' variant="contained">Usuário</Button>
                    </Link>
                    <Link to={'/ticketList'} className='initial-button-wrapper'>
                        <Button className='initial-button' variant="contained">Atendente</Button>
                    </Link>
                    <Link to={'/analytics'} className='initial-button-wrapper'>
                        <Button className='initial-button' variant="contained">Líder</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProfileChooserPage;