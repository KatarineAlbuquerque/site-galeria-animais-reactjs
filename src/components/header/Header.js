import React from 'react';
import Logo from '../../asserts/images/owl.png';

function Header() {
    return(
        <header id="header">
                <aside id="logo">
                    <img src={Logo} alt="Logo" />
                </aside>
                <aside id="title">
                    <h1>Galeria de Animais</h1>
                    <h2>Animais Diversos para Curtir</h2>
                </aside>
                <aside id="logo">
                    <a href="index.html">
                        <img src={Logo} alt="Logo" />
                    </a>
                </aside>
            </header>
    );
}

export default Header;