import React from 'react';
import treatment from '../../assets/images/treatment.png'
import MainButton from '../Shared/MainButton';

const Care = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
                <div className='p-7'>
                    <h1 className="text-5xl font-bold">HEALTHIER FOR YOUR SMILE</h1>
                    <p className="py-6">New bone forms around dental implants, which then fuses them permanently in place. This enhances the natural shape of the jaw, and prevents the “sunken in” facial profile that is typically associated with tooth loss.Living with implants is easier than wearing a removable denture, because an implant is designed to: <br /> <br />
                        <li className='list-none'><input type="radio" name="radio-4" className=" radio-2 w-5 radio-primary "  />Provide a permanent alternative</li>
                        <li className='list-none'><input type="radio" name="radio-4" className=" radio-2 w-5 radio-primary "  />Be stronger than natural teeth</li>
                        <li className='list-none'><input type="radio" name="radio-4" className=" radio-2 w-5 radio-primary "  />Blend in with the teeth around it</li>
                        <li className='list-none'><input type="radio" name="radio-4" className=" radio-2 w-5 radio-primary "  />Last for life</li>
                        <li className='list-none'><input type="radio" name="radio-4" className=" radio-2 w-5 radio-primary "  />Strengthen the bone</li>
                        
                    </p>
                    <MainButton>Get Start</MainButton>
                </div>
            </div>
        </div>
    );
};

export default Care;