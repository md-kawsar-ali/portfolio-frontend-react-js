import React from 'react';

const Service = ({ icon, title, desc }) => {
    return (
        <div className="service-card p-6 md:p-8 lg:p-8">
            <img className='h-[50px] md:h-[55px] lg:h-[60px] py-1 mb-2 md:mb-3 lg:mb-3' src={icon} alt={title} />
            <h3 className='text-lg md:text-xl lg:text-xl mb-2 md:mb-3 lg:mb-3 font-semibold'>{title}</h3>
            <p className='text-sm md:text-[15px] lg:text-[15px] text-slate-600 leading-relaxed'>{desc}</p>
        </div>
    );
};

export default Service;