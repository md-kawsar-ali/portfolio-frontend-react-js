import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const GalleryModal = ({ selected, setSelected }) => {
    useEffect(() => {
        if (selected) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    }, [selected]);

    return (
        <>
            <AnimatePresence>
                {selected && (
                    <motion.div layoutId={selected.id} className="project-details">
                        <motion.div className="custom-scroll">
                            <motion.img src={selected.img} alt={selected.title} />
                            <motion.div className="flex items-center justify-between mt-5 mb-4">
                                <motion.h2 className="text-xl md:text-2xl m-0">{selected.title}</motion.h2>
                                <motion.a className="text-sm px-4 py-[8px] md:px-5 md:py-[10px] text-white bg-primary rounded-md" href={selected.livePreview} target="_blank">Preview</motion.a>
                            </motion.div>
                            <motion.p className="mb-4 text-md text-slate-600 font-normal">{selected.description}</motion.p>
                            <motion.ul className="list-none m-0 p-0 flex flex-wrap gap-2">
                                {
                                    selected?.languages?.map((item, index) => <motion.li key={index} className="bg-slate-200 py-1 px-3 text-sm text-slate-600 font-normal cursor-default rounded">{item}</motion.li>)
                                }
                            </motion.ul>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div
                style={{ display: selected ? 'block' : 'none' }} className='overlay'
                onClick={() => setSelected(null)}
            ></div>
        </>
    );
};

export default GalleryModal;