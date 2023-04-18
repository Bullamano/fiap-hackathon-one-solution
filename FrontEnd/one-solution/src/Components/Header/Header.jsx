import React from 'react';
import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';

import logoImage from '../../Assets/Logo_105x86.png';
import notificationIcon from '../../Assets/NotificationIcon.png';
import profilePic from '../../Assets/ProfileRaze.png';

import './Header.css';

/**
 * Header simples da aplicação. Ele é flutuante e acompanha a rolagem.
 * @returns JSX do Header.
 */
export const SimpleHeader = () => {
    return (
        <div className='App-header' id='pageTop'>
            <Link to='/' className='Home-link'>
                <div className='Header-content'>
                    <img src={logoImage} alt='Icone do One Solution. Link para a página inicial.' className='logo-image' />
                </div>
            </Link>
        </div>
    );
};

export const UserHeader = () => {
    return (
        <div className='App-header' id='pageTop'>
            <Link to='/' className='Home-link'>
                <div className='Header-content'>
                    <img src={logoImage} alt='Icone do One Solution. Link para a página inicial.' className='logo-image' />
                </div>
            </Link>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '50vw' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-basic"
                    label="Procurar (esta ferramenta não está disponível na versão de protótipo)"
                    variant="outlined"
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: '20px',
                    }} />
            </Box>
            <div className='User-profile'>
                <img src={notificationIcon} alt='Icone de notificações (não habilitado na versão de protótipo)' className='icon-image' />
                <Avatar className='Avatar-photo' alt="Remy Sharp" src={profilePic} />
            </div>
        </div>
    );
};

