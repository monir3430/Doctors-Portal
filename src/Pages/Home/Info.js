import React from 'react';
import InfoCart from './InfoCart';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    const text = {
        open: '8:00 AM',
        location: 'Brahmanbaria, Sarail',
        contact: '+8801719983249'
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 p-10'>
            <InfoCart text = {text.open} bgColor="text-white b-700 font-bold bg-gradient-to-r from-secondary to-primary" CartTitle="Opening Hours" img={clock}></InfoCart>
            <InfoCart text ={text.location} bgColor="bg-[#3A4256]" CartTitle="Visit Our Location" img={marker}></InfoCart>
            <InfoCart text = {text.contact} bgColor="text-white b-700 font-bold bg-gradient-to-r from-secondary to-primary" CartTitle="Contact Us Now" img={phone}></InfoCart>
        </div>
    );
};

export default Info;