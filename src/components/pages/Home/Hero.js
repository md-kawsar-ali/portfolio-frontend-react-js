import React from 'react';
import Container from './../../shared/Container';
import './Hero.css';
import DP from '../../../images/dp.png';
import { GitHub, Instagram, Linkedin, Twitter } from 'react-feather';

const Hero = () => {
    return (
        <section className="hero min-h-screen bg-base-100 pt-10 md:pt-12 lg:pt-20">
            <Container>
                <div className="hero-content p-0 max-w-full flex-col lg:flex-row-reverse">
                    <div className="lg:w-6/12">
                        <img src={DP} alt='DP' className="display-pic" />

                        <ul className='social-vertical'>
                            <li><a href="https://twitter.com/Kawsar_web" target="_blank" rel="noreferrer"><Twitter size={20} /></a></li>
                            <li><a href="https://www.instagram.com/md_kawsar_alii" target="_blank" rel="noreferrer"><Instagram size={20} /></a></li>
                            <li><a href="https://github.com/md-kawsar-ali" target="_blank" rel="noreferrer"><GitHub size={20} /></a></li>
                            <li><a href="https://www.linkedin.com/in/mdkawsarali" target="_blank" rel="noreferrer"><Linkedin size={20} /></a></li>
                        </ul>
                    </div>

                    <div className="w-full md:w-10/12 lg:w-6/12">
                        <h1 className="font-bold uppercase text-secondary">Md Kawsar Ali</h1>
                        <p className="py-4 md:py-6 lg:py-6">Professional Frontend Web Developer! Working with Html5, CSS3, JavaScript, React JS, Node JS, MongoDB, Bootstrap & Tailwind CSS</p>
                        <a href='resume.pdf' className="btn btn-primary font-medium text-white rounded-sm px-6" download="MD-KAWSAR-ALI">Download Resume</a>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;