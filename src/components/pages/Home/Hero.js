import React from 'react';
import Container from './../../shared/Container';
import './Hero.css';
import DP from '../../../images/dp.png';

const Hero = () => {
    return (
        <section class="hero min-h-screen bg-base-100 pt-20">
            <Container>
                <div class="hero-content py-0 max-w-full flex-col lg:flex-row-reverse">
                    <div class="w-6/12">
                        <img src={DP} alt='DP' class="display-pic" />
                    </div>

                    <div class="w-6/12">
                        <h1 class="font-bold uppercase text-secondary">Md Kawsar Ali</h1>
                        <p class="py-6">Professional Frontend Web Developer! Working with Html5, CSS3, JavaScript, React JS, Node JS, MongoDB, Bootstrap & Tailwind CSS</p>
                        <a href='resume.pdf' class="btn btn-primary font-medium text-white rounded-sm px-6" download>Download Resume</a>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;