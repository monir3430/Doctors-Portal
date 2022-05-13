import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import MainButton from '../Shared/MainButton';


const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center m-10'>
            <div className='flex-1 '>
                <img className='mt-[-120px] hidden lg:block' src={doctor} alt="" />
            </div>
            <div className='flex-1 '>
                <h3 className='text-xl text-primary text-bold '>Appointment</h3>
                <h2 className='text-3xl text-white p-5'>Make an appointment Today</h2>
                <p className='text-white p-5'>Your first meeting is a good time to talk with the doctor and the office staff about some communication basics.</p>
                <MainButton>Get Start</MainButton>
            </div>
        </section>
    );
};

export default MakeAppointment;