import React from 'react';
import { Link } from "react-router-dom";

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';

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

/**
 * Header para as áreas do site na qual usuários finais entram.
 * @returns JSX do Header.
 */
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
                className='non-essential-element'
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
                <Tooltip title='Notificações não estão habilitadas na versão de protótipo'>
                    <img src={notificationIcon} alt='Icone de notificações (não habilitado na versão de protótipo)' className='icon-image' />
                </Tooltip>
                <Avatar className='Avatar-photo' alt="Remy Sharp" src={profilePicRaze} />
            </div>
        </div>
    );
};

/**
 * Header completo para áreas que apenas usuários internos da organização acessam.
 * @returns JSX do Header.
 */
export const InsiderHeader = () => {
    return (
        <div className='App-header' id='pageTop'>
            <Link to='/' className='Home-link'>
                <div className='Header-content'>
                    <img src={logoImage} alt='Icone do One Solution. Link para a página inicial.' className='logo-image' />
                </div>
            </Link>
            <Stack direction="row" spacing={1} className='button-stacks'>
                <Link to='/'>
                    <Tooltip title='Home'>
                        <IconButton aria-label="Home" className='icon-box'>
                            <HomeIcon sx={{ fontSize: 40, color: '#000000' }} />
                            <div className='icon-text'>Home</div>
                        </IconButton>
                    </Tooltip>
                </Link>
                <Link to='/ticketList'>
                    <Tooltip title='Lista de tickets abertos'>
                        <IconButton aria-label="Reclamações" className='icon-box'>
                            <AnnouncementIcon sx={{ fontSize: 40, color: '#000000' }} />
                            <div className='icon-text'>Reclamações</div>
                        </IconButton>
                    </Tooltip>
                </Link>
                {/* Obs.: as divs abaixo envelopando os botões só serve para enganar o MUI e permitir tooltip em um botões disabled */}
                <Tooltip title='Lista de envios. Esta ferramenta não está habilitada na versão de protótipo' className='non-essential-element'>
                    <div>
                        <IconButton disabled aria-label="Envios" className='icon-box'>
                            <SendIcon sx={{ fontSize: 40 }} />
                            <div className='icon-text'>Envios</div>
                        </IconButton>
                    </div>
                </Tooltip>
                <Tooltip title='Lista de compras realizadas. Esta ferramenta não está habilitada na versão de protótipo' className='non-essential-element'>
                    <div>
                        <IconButton disabled aria-label="Compras" className='icon-box'>
                            <InventoryIcon sx={{ fontSize: 40 }} />
                            <div className='icon-text'>Compras</div>
                        </IconButton>
                    </div>
                </Tooltip>
                <Tooltip title='Lista de pagamentos recebidos. Esta ferramenta não está habilitada na versão de protótipo' className='non-essential-element'>
                    <div>
                        <IconButton disabled aria-label="Pagamentos" className='icon-box'>
                            <AttachMoneyIcon sx={{ fontSize: 40 }} />
                            <div className='icon-text'>Pagamentos</div>
                        </IconButton>
                    </div>
                </Tooltip>
            </Stack>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '50vw' },
                }}
                noValidate
                autoComplete="off"
                className='non-essential-element'
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
                <Tooltip title='Notificações não estão habilitadas na versão de protótipo'>
                    <img src={notificationIcon} alt='Icone de notificações (não habilitado na versão de protótipo)' className='icon-image' />
                </Tooltip>
                <Avatar className='Avatar-photo' alt="Remy Sharp" src={profilePicGragas} />
            </div>
        </div>
    );
};
