import React from 'react';
import Container from './../../shared/Container';
import reactLogo from '../../../images/technology/reactjs-sm.png';
import mernLogo from '../../../images/technology/MERN.png';
import wordpressLogo from '../../../images/technology/wordpress.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            id: 0,
            icon: reactLogo,
            title: 'Frontend Application',
            desc: 'Interactive frontend application using HTML5, CSS3, JavaScript, TailwindCSS, Bootstrap and React JS. It is possible to create an application from scratch. I have good knowledge about UI/UX.'
        },
        {
            id: 1,
            icon: mernLogo,
            title: 'MERN Stack Application',
            desc: 'Responsive MERN Stack Application using React JS, Node JS, Express JS and MongoDB. I also prefer to use Firebase and JWT (JSON Web Token) for Authentication.'
        },
        {
            id: 2,
            icon: wordpressLogo,
            title: 'WordPress Website',
            desc: 'Content Management System with most popular CMS platform (WordPress) using Elementor Page Builder and Premium WordPress Theme.'
        },
    ];

    return (
        <div id='services' className='pt-5 pb-16 md:pt-10 md:pb-28 lg:pt-12 lg:pb-28'>
            <Container>
                <h2 className='text-2xl md:text-4xl lg:text-5xl text-center md:text-left lg:text-left text-secondary font-bold mb-8 md:mb-10 lg:mb-12'>My Services</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        services.map(service => <Service key={service.id} icon={service.icon} title={service.title} desc={service.desc} />)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Services;