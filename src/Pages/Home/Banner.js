import React from 'react';
import chair from "../../assets/images/chair.png"

const Banner = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6 pr-5">It is generally recommended that everyone, including young children, visit the dentist twice every year. Modern techniques mean that dental treatment is fairly comfortable.</p>
                    <button className="btn btn-primary text-white b-700 font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;