import React from 'react';
import Container from './Container';

const Header = () => {
    return (
        <header className="bg-base-100 pt-5 fixed w-full z-50">
            <Container>
                <div className="navbar">
                    <div className="flex-1">
                        <a href='/' className="text-primary uppercase text-xl font-bold">Kawsar A.</a>
                    </div>
                    <div className="flex-none">
                        <ul className="menu font-medium text-secondary menu-horizontal p-0">
                            <li><a href='/'>Home</a></li>
                            <li><a href='/about'>About</a></li>
                            <li><a href='/skills'>Skills</a></li>
                            <li><a href='/portfolio'>Portfolio</a></li>
                            <li><a href='/contact'>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;