import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointService from './AppointService';
import BookingModal from './BookingModal';


const AvailableAppointment = ({date, setDate}) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data=>setServices(data));
    }, [])
    return (
        <div>
           <h1 className='text-xl text-secondary font-bold text-center'>Available Services on {format(date, 'PP')} </h1> 

           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10'>
               {
                   services.map(service=><AppointService key = {service._id} service ={service}
                   setTreatment ={setTreatment}
                   ></AppointService>)
               }
           </div>
           {
               treatment && <BookingModal 
               key={treatment._id} 
               treatment={treatment} 
               date={date}
               setTreatment={setTreatment}
               
               ></BookingModal>
           }
        </div>
    );
};

export default AvailableAppointment;