import React from 'react';

const Container = (props) => {
    return (
        <div className='w-10/12 mx-auto'>
            {props.children}
        </div>
    );
};

export default Container;