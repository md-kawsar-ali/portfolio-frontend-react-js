import React, { useState, useEffect } from 'react';
import Container from '../../shared/Container';
import { AnimatePresence, motion } from 'framer-motion';
import './Portfolio.css';

const Portfolio = () => {
    const [selected, setSelected] = useState(null);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('portfolio.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);

    useEffect(() => {
        if (selected) {
            document.body.style.overflowY = 'hidden';
            document.body.style.paddingRight = '17px';
        } else {
            document.body.style.overflowY = 'visible';
            document.body.style.paddingRight = '0';
        }
    }, [selected]);

    return (
        <section id="portfolio" className='portfolio-sec bg-slate-100 pt-16 pb-16 md:pt-24 md:pb-24'>
            <Container>
                <h2 className='text-2xl md:text-4xl lg:text-5xl text-center md:text-left lg:text-left text-secondary font-bold mb-8 md:mb-10 lg:mb-12'>My Projects</h2>

                <div className='grid grid-cols-3 gap-8'>
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

                <AnimatePresence>
                    {selected && (
                        <motion.div layoutId={selected.id} className="project-details">
                            <motion.img src={selected.img} alt={selected.title} />
                            <motion.div className="flex items-center justify-between mt-5 mb-4">
                                <motion.h2 className="text-2xl m-0">{selected.title}</motion.h2>
                                <motion.a className="text-sm px-5 py-[10px] text-white bg-primary rounded-md" href={selected.livePreview} target="_blank">Preview</motion.a>
                            </motion.div>
                            <motion.p className="mb-4 text-md text-slate-600 font-normal">{selected.description}</motion.p>
                            <motion.ul className="list-none m-0 p-0 flex flex-wrap gap-3">
                                {
                                    selected?.languages?.map((item, index) => <motion.li key={index} className="bg-slate-200 py-1 px-3 text-sm text-slate-600 font-normal cursor-default rounded">{item}</motion.li>)
                                }
                            </motion.ul>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div
                    style={{ display: selected ? 'block' : 'none' }} className='overlay'
                    onClick={() => setSelected(null)}
                ></div>
            </Container>
        </section>
    );
};

export default Portfolio;