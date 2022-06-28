import React from 'react';
import Container from '../../shared/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Scrollbar } from 'swiper';
import 'swiper/css';
import LogoSlide from './LogoSlide';
import htmlLogo from '../../../images/technology/html.png';
import cssLogo from '../../../images/technology/CSS3.png';
import javaScriptLogo from '../../../images/technology/javascript.png';
import reactLogo from '../../../images/technology/reactjs.png';
import nodeJsLogo from '../../../images/technology/nodejs.png';
import expressLogo from '../../../images/technology/expressjs.png';
import mongoDBLogo from '../../../images/technology/MongoDB.png';
import bootstrapLogo from '../../../images/technology/bootstrap.png';
import tailwindLogo from '../../../images/technology/tailwind.png';
import firebaseLogo from '../../../images/technology/firebase.png';
import githubLogo from '../../../images/technology/github.png';
import vscodeLogo from '../../../images/technology/vscode.png';

const Features = () => {
    const logos = [
        {
            id: 0,
            url: htmlLogo,
            alt: 'HTML5'
        },
        {
            id: 1,
            url: cssLogo,
            alt: 'CSS3'
        },
        {
            id: 2,
            url: javaScriptLogo,
            alt: 'JavaScript'
        },
        {
            id: 3,
            url: bootstrapLogo,
            alt: 'Twitter Bootstrap'
        },
        {
            id: 4,
            url: tailwindLogo,
            alt: 'TailwindCSS'
        },
        {
            id: 5,
            url: reactLogo,
            alt: 'React JS'
        },
        {
            id: 6,
            url: nodeJsLogo,
            alt: 'Node JS'
        },
        {
            id: 7,
            url: expressLogo,
            alt: 'Express JS'
        },
        {
            id: 8,
            url: mongoDBLogo,
            alt: 'MongoDB'
        },
        {
            id: 9,
            url: firebaseLogo,
            alt: 'Firebase'
        },
        {
            id: 10,
            url: githubLogo,
            alt: 'GitHub'
        },
        {
            id: 11,
            url: vscodeLogo,
            alt: 'Visual Studio Code'
        }
    ]

    return (
        <section className='bg-slate-100 pt-16 pb-16 md:pt-20 md:pb-20 relative text-center md:text-left'>
            <Container>
                <div className="flex flex-col md:flex-row  gap-5 md:gap-8">
                    <div className="w-full md:w-3/12">
                        <h2 className='text-4xl md:text-6xl lg:text-7xl text-primary font-bold'>4+</h2>
                        <h3 className='text-lg md:text-2xl lg:text-3xl text-slate-700 font-semibold lg:mb-1'>Years of</h3>
                        <h3 className='text-lg md:text-2xl lg:text-3xl text-slate-700 font-semibold'>Exprerience</h3>
                    </div>

                    <div className="w-full md:w-9/12">
                        <h2 className='text-lg md:text-3xl lg:text-4xl text-slate-700 font-bold md:leading-snug lg:leading-[52px]'>Frontend Web Developer, Specialized in JavaScript and React JS.</h2>

                        <div className="relative -bottom-6 md:-bottom-10 z-10">
                            <Swiper
                                modules={[Autoplay, Scrollbar]}
                                scrollbar={{ draggable: true }}
                                autoplay={{ autoplay: true, delay: 0, disableOnInteraction: false }}
                                freeMode={true}
                                loop={true}
                                speed={3000}
                                style={{ padding: "2px 2px 5px 2px" }}
                                slidesPerView={3}
                                spaceBetween={20}
                                breakpoints={{
                                    400: {
                                        spaceBetween: 20,
                                        slidesPerView: 4
                                    },
                                    640: {
                                        spaceBetween: 20,
                                        slidesPerView: 5
                                    },
                                    768: {
                                        spaceBetween: 40,
                                        slidesPerView: 4
                                    },
                                    1024: {
                                        spaceBetween: 40,
                                        slidesPerView: 5
                                    },
                                    1200: {
                                        spaceBetween: 40,
                                        slidesPerView: 6
                                    }
                                }}
                            >
                                {
                                    logos.map(logo => <SwiperSlide key={logo.id}>
                                        <LogoSlide url={logo.url} alt={logo.alt} />
                                    </SwiperSlide>)
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </Container>

            <div className="w-full h-20 bg-white absolute bottom-0 z-0"></div>
        </section>
    );
};

export default Features;