import React from 'react';
import { Link } from "react-router-dom";
import logoImage from '../../Assets/Logo_105x86.png';
import './Header.css';

/**
 * Header simples da aplicação. Ele é flutuante e acompanha a rolagem.
 * @returns JSX do Header.
 */
const SimpleHeader = () => {
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

export default SimpleHeader;