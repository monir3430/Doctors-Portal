import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Reviews from './Reviews';

const Testimonials = () => {
    const comments =[
        {
            _id:1,
            name:'Monir',
            location: 'Brahmanbari',
            img: people1,
            des: 'The staff on the (orthopedics) ward are some of the nicest people that I have met!!.'
        },
        {
            _id:2,
            name:'Sharmin',
            location: 'Cumilla',
            img: people2,
            des: 'Nursing staff on 7 West were the absolute best!!.'
        },
        {
            _id:3,
            name:'Runa',
            location: 'Sylhet',
            img: people3,
            des: 'Marianna Ruhl was a special nurse, her treatment and care for me was far and above normal.'
        }

    ]
    return (
        <section className='my-28 p-10'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-primary font-bold '>Testimonials</h3>
                    <h1 className='text-2xl'>What Our Patients Say</h1>
                </div>
                <div>
                    <img className='w-24 p-4 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    comments.map(c=><Reviews key={c._id} c={c}></Reviews>)
                }
            </div>

        </section>
    );
};

export default Testimonials;