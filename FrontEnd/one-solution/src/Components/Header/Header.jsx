import React from 'react';
import { Link } from "react-router-dom";

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import SendIcon from '@mui/icons-material/Send';
import InventoryIcon from '@mui/icons-material/Inventory';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import logoImage from '../../Assets/Logo_105x86.png';
import notificationIcon from '../../Assets/NotificationIcon.png';
import profilePicRaze from '../../Assets/ProfileRaze.png';
import profilePicGragas from '../../Assets/ProfileGragas.png';

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
                    disabled
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: '20px',
                    }} />
            </Box>
            <div className='User-profile'>
                <img src={notificationIcon} alt='Icone de notificações (não habilitado na versão de protótipo)' className='icon-image' />
                <Avatar className='Avatar-photo' alt="Remy Sharp" src={profilePicRaze} />
            </div>
        </div>
    );
};

export const InsiderHeader = () => {
    return (
        <div className='App-header' id='pageTop'>
            <Link to='/' className='Home-link'>
                <div className='Header-content'>
                    <img src={logoImage} alt='Icone do One Solution. Link para a página inicial.' className='logo-image' />
                </div>
            </Link>
            <Stack direction="row" spacing={1}>
                <IconButton color="black" aria-label="Home" className='icon-box'>
                    <HomeIcon sx={{ fontSize: 40 }}/>
                    <div className='icon-text'>Home</div>
                </IconButton>
                <IconButton color="black" aria-label="Reclamações" className='icon-box'>
                    <AnnouncementIcon sx={{ fontSize: 40 }}/>
                    <div className='icon-text'>Reclamações</div>
                </IconButton>
                <IconButton color="black" aria-label="Envios" className='icon-box'>
                    <SendIcon sx={{ fontSize: 40 }}/>
                    <div className='icon-text'>Envios</div>
                </IconButton>
                <IconButton color="black" aria-label="Compras" className='icon-box'>
                    <InventoryIcon sx={{ fontSize: 40 }}/>
                    <div className='icon-text'>Compras</div>
                </IconButton>
                <IconButton color="black" aria-label="Pagamentos" className='icon-box'>
                    <AttachMoneyIcon sx={{ fontSize: 40 }}/>
                    <div className='icon-text'>Pagamentos</div>
                </IconButton>
            </Stack>
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
                    disabled
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: '20px',
                    }} />
            </Box>
            <div className='User-profile'>
                <img src={notificationIcon} alt='Icone de notificações (não habilitado na versão de protótipo)' className='icon-image' />
                <Avatar className='Avatar-photo' alt="Remy Sharp" src={profilePicGragas} />
            </div>
        </div>
    );
};
