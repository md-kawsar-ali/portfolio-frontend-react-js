import React from 'react';
import { motion } from 'framer-motion';
import GalleryModal from './GalleryModal';

const Gallery = ({ projects, selected, setSelected }) => {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map(item => (
                    <motion.div
                        className='project'
                        key={item.id}
                        layoutId={item.id}
                        onClick={() => setSelected(item)}>
                        <motion.img src={item.img} alt={item.title} />
                        <motion.h2>{item.title}</motion.h2>
                    </motion.div>
                ))}
            </div>

            <GalleryModal selected={selected} setSelected={setSelected} />
        </>
    );
};

export default Gallery;