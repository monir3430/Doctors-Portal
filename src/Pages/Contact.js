import React from 'react';
import appointment from '../../src/assets/images/appointment.png';
import MainButton from './Shared/MainButton';

const Contact = () => {

    return (
        <section style={{
            background: `url(${appointment})`
        }} className= 'sm: m-10 lg:m-0'>
            <div className='grid place-items-center'>
                <div>
                <div>
                    <h3 className=' mt-5 text-primary font-bold '>Contact Us</h3>
                    <h1 className='text-2xl text-white'>Stay connected with us</h1>
                </div>
                <form className='grid grid-cols-1 gap-2  mb-5 mt-5 m-auto'>
                    <input className='mt-3' type="email" placeholder="Email Address" className="input input-bordered input-xs w-full max-w-xs" />
                    <input className='mt-3' type="text" placeholder="Subject" className="input input-bordered input-sm w-full max-w-xs" />

                    <textarea className='mt-3' placeholder="Type here" className="input input-bordered input-lg w-full max-w-xs" />
                    <MainButton>Submit</MainButton>
                </form>
                </div>
                    
            </div>
        </section>
    );
};

export default Contact;