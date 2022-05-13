import React from 'react';
import Service from './Service';
import cavity from '../../assets/images/cavity.png';
import fluoride from '../../assets/images/fluoride.png';
import whitening from '../../assets/images/whitening.png';


const Services = () => {
    const services = [
        {_id: 1,
            name: "Fluoride Treatment",
            img: fluoride,
            des: "Fluoride is a natural mineral that builds strong teeth and prevents cavities."
        },
        {_id: 2,
            name: "Cavity Filling",
            img: cavity,
            des: "Fillings are also used to repair cracked or broken teeth and teeth that have been worn down"
        },
        {_id: 3,
            name: "Teeth Whitening",
            img: whitening,
            des: "Teeth whitening is a simple process. Whitening products contain one of two tooth bleaches."
        }
    ]

    return (
        <div className='my-20 p-10 '>
            <div className='text-center text-xl font-bold uppercase'>
                <h1 className='text-primary text-2xl'>Our Services</h1>
                <h2>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service=><Service key ={service._id} service = {service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;