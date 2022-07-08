import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Services from './Services';
import Portfolio from './Portfolio';

const Home = () => {
    return (
        <div>
            <Hero />
            <Features />
            <Services />
            <Portfolio />
        </div>
    );
};

export default Home;