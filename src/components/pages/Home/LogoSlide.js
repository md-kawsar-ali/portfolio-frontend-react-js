import React from 'react';
import { motion } from "framer-motion";

const LogoSlide = ({ url, alt = "" }) => {
    return (
        <motion.div
            whileHover={{ scale: 1, rotate: 360, borderRadius: "50%", transition: { duration: 0.4 } }}
            whileTap={{
                scale: 0.8,
                rotate: 0,
                borderRadius: "100%"
            }}
            className="bg-white shadow-md shadow-slate-100 rounded-md p-4 md:p-6"
        >
            <img src={url} alt={alt} title={alt} />
        </motion.div>
    );
};

export default LogoSlide;