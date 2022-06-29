import React from 'react';
import Container from './../../shared/Container';
import reactLogo from '../../../images/technology/reactjs.png';
import mernLogo from '../../../images/technology/MERN.png';
import wordpressLogo from '../../../images/technology/wordpress.png';

const Services = () => {
    return (
        <div className='pt-12 pb-28'>
            <Container>
                <h2 className='text-5xl text-secondary font-bold mb-12'>My Services</h2>

                <div className="flex gap-8">
                    <div className="w-4/12 service-card p-8">
                        <img className='mb-3 h-[64px] py-1' src={reactLogo} alt="" />
                        <h3 className='text-xl mb-3 font-semibold'>Frontend Application</h3>
                        <p className='text-[15px] text-slate-600 leading-relaxed'>Interactive frontend application using HTML5, CSS3, JavaScript, TailwindCSS, Bootstrap and React JS. It is possible to create an application from scratch. I have good knowledge about UI/UX.</p>
                    </div>

                    <div className="w-4/12 service-card p-8">
                        <img className='mb-3 h-[60px] py-2' src={mernLogo} alt="" />
                        <h3 className='text-xl mb-3 font-semibold'>MERN Stack Application</h3>
                        <p className='text-[15px] text-slate-600 leading-relaxed'>Responsive MERN Stack Application using React JS, Node JS, Express JS and MongoDB. I also prefer to use Firebase and JWT (JSON Web Token) for Authentication.</p>
                    </div>

                    <div className="w-4/12 service-card p-8">
                        <img className='mb-3 h-[64px] py-1' src={wordpressLogo} alt="" />
                        <h3 className='text-xl mb-3 font-semibold'>WordPress Website</h3>
                        <p className='text-[15px] text-slate-600 leading-relaxed'>Content Management System with most popular CMS platform (WordPress) using Elementor Page Builder and Premium WordPress Theme.</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Services;