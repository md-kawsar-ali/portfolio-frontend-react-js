import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <Features />
            <Services />
            <Portfolio />
            <Contact />
        </>
    );
};

export default Home;