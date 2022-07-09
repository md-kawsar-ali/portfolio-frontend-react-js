import React, { useState, useEffect } from 'react';
import Container from '../../shared/Container';
import './Portfolio.css';
import Gallery from '../../shared/Gallery';

const Portfolio = () => {
    const [selected, setSelected] = useState(null);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('portfolio.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);

    return (
        <section id="portfolio" className='portfolio-sec bg-slate-100 pt-16 pb-16 md:pt-24 md:pb-24'>
            <Container>
                <h2 className='text-2xl md:text-4xl lg:text-5xl text-center md:text-left lg:text-left text-secondary font-bold mb-8 md:mb-10 lg:mb-12'>My Projects</h2>

                <Gallery
                    projects={projects}
                    selected={selected}
                    setSelected={setSelected}
                />
            </Container>
        </section>
    );
};

export default Portfolio;