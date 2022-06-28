import React from 'react';

const LogoSlide = ({ url, alt = "" }) => {
    return (
        <div className="bg-white shadow-md shadow-slate-100 rounded-md p-4 md:p-6">
            <img src={url} alt={alt} title={alt} />
        </div>
    );
};

export default LogoSlide;