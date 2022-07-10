import React, { useState, useEffect } from 'react';
import Container from './Container';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const [headerScrolling, setHeaderScrolling] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener('scroll', () => {
                setHeaderScrolling(window.pageYOffset > 50)
            });
        }
    }, []);

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }

    const menu = <>
        <li><HashLink smooth to="/#">Home</HashLink></li>
        <li>
            <HashLink smooth to="/#about" scroll={el => scrollWithOffset(el)}>About</HashLink>
        </li>
        <li>
            <HashLink smooth to="/#services" scroll={el => scrollWithOffset(el)}>Services</HashLink>
        </li>
        <li>
            <HashLink smooth to="/#portfolio" scroll={el => scrollWithOffset(el)}>Portfolio</HashLink>
        </li>
        <li>
            <HashLink className="md:pr-0" smooth to="/#contact" scroll={el => scrollWithOffset(el)}>Contact</HashLink>
        </li>
    </>;

    return (
        <header className={`bg-base-100 py-2 md:py-3 lg:py-3 fixed w-full z-50 ${headerScrolling ? 'scrolling' : ''}`}>
            <Container>
                <div className="navbar justify-between px-0">
                    <div className="navbar-start">
                        <Link to='/' className="text-primary uppercase text-xl font-bold">Kawsar A.</Link>
                    </div>

                    <div className="dropdown">
                        <label tabIndex="0" className="lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40 right-0">
                            {menu}
                        </ul>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal font-medium text-secondary/75 p-0">
                            {menu}
                        </ul>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;