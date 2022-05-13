import React from 'react';
import chair from "../../assets/images/chair.png"
import bg from "../../assets/images/bg.png"
import MainButton from '../Shared/MainButton';

const Banner = () => {
    return (
        <div style={{
            background: `url(${bg}) `,
            backgroundRepeat: 'no-repeat',
        }} className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Implants At First Impressions Dental</h1>
                    <p className="py-6 pr-5">It is generally recommended that everyone, including young children, visit the dentist twice every year. Modern techniques mean that dental treatment is fairly comfortable.</p>
                    <MainButton>Get Start</MainButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;