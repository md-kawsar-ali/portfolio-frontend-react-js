import React, { useState } from 'react';
import { GitHub, Instagram, Linkedin, Twitter, Mail } from 'react-feather';
import Container from './Container';

const Footer = () => {
    const [currentYear] = useState(() => {
        return new Date().getFullYear()
    });

    return (
        <footer className='border-t border-slate-300/70 py-8'>
            <Container>
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-y-4 gap-x-8">
                    <p className="text-sm md:text-md text-slate-500/80 font-normal m-0">Copyright &copy; {currentYear}. All rights reserved.</p>

                    <ul className='list-style-none flex gap-4 items-center'>
                        <li>
                            <a className="text-slate-500/75 transition-all hover:text-primary" href="https://twitter.com/Kawsar_web" target="_blank" rel="noreferrer"><Twitter size={20} /></a>
                        </li>
                        <li>
                            <a className="text-slate-500/75 transition-all hover:text-primary" href="https://www.instagram.com/md_kawsar_alii" target="_blank" rel="noreferrer"><Instagram size={18} /></a>
                        </li>
                        <li>
                            <a className="text-slate-500/75 transition-all hover:text-primary" href="https://github.com/md-kawsar-ali" target="_blank" rel="noreferrer"><GitHub size={18} /></a>
                        </li>
                        <li>
                            <a className="text-slate-500/75 transition-all hover:text-primary" href="https://www.linkedin.com/in/mdkawsarali" target="_blank" rel="noreferrer"><Linkedin size={18} /></a>
                        </li>
                        <li>
                            <a className="text-slate-500/75 transition-all hover:text-primary" href="mailto:mdkawsarali.dev@gmail.com" target="_blank" rel="noreferrer"><Mail size={18} /></a>
                        </li>
                    </ul>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;