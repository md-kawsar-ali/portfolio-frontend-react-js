import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Container from './../../shared/Container';
import toast from 'react-hot-toast';
import Inbox from '../../../images/inbox.png';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (!form.current.user_name.value || !form.current.user_email.value || !form.current.message.value) {
            return toast.error('Please, enter required information!', { id: 'invalid' });
        }

        toast.promise(
            emailjs.sendForm('service_bx5h6qx', 'template_pmslh1l', form.current, '_Ft62o7jnte4XAfq_')
                .then((result) => {
                    form.current.reset();
                }, (error) => {
                    form.current.reset();
                }),
            {
                loading: 'Sending...',
                success: <b className='text-primary font-semibold'>Message Sent!</b>,
                error: <b className='text-red-600 font-semibold'>Failed to Sent!</b>
            }
        );
    };

    return (
        <section id='contact' className='pt-16 pb-16 md:pt-24 md:pb-24'>
            <Container>
                <h2 className='text-2xl md:text-4xl lg:text-5xl text-center md:text-left lg:text-left text-secondary font-bold mb-8 md:mb-10 lg:mb-12'>Get In Touch</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-12 md:gap-x-20 lg:gap-x-24">
                    <form ref={form} onSubmit={sendEmail} className="card bg-base-100 border border-slate-300">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text after:content-['*'] after:text-red-600 after:ml-1">Your Name</span>
                                </label>
                                <input type="text" name="user_name" placeholder="Enter Your Name" className="input input-bordered valid:border-primary" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text after:content-['*'] after:text-red-600 after:ml-1">Your Email</span>
                                </label>
                                <input type="email" name="user_email" placeholder="Enter Your Email" className="input input-bordered valid:border-primary" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text after:content-['*'] after:text-red-600 after:ml-1">Message</span>
                                </label>
                                <textarea name="message" rows={3} placeholder="Write Your Message" className="textarea textarea-bordered valid:border-primary" required></textarea>
                            </div>

                            <div className="form-control mt-4">
                                <button type="submit" className="btn btn-primary">Send Message</button>
                            </div>
                        </div>
                    </form>

                    <img src={Inbox} className="image-full" alt={"contact me"} />
                </div>
            </Container>
        </section>
    );
};

export default Contact;