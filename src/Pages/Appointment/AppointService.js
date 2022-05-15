import React from 'react';

const AppointService = ({ service, setTreatment }) => {
    const {name, slots} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>
                    {
                        slots.length?<span>{slots[0]}</span> : <span className='text-red-500'>Try another days</span>
                    }

                </p>
                <p>{slots.length} {slots.length >1 ? 'spaces': 'space'} available</p>
                <div className="card-actions justify-center">
                    <button 
                    
                    >
                    </button>
                    <label disabled = {slots.length === 0}
                    onClick ={()=>setTreatment(service)} className="btn btn-primary text-white modal-button" htmlFor="booking-modal">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointService;