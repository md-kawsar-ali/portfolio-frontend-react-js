import React from 'react';
import Container from './Container';

const SubHeader = ({ title }) => {
    return (
        <section className='bg-primary text-white pt-48 pb-24'>
            <Container>
                <h1 className='text-center text-4xl font-bold uppercase p-0 m-0'>{title}</h1>
            </Container>
        </section>
    );
};

export default SubHeader;