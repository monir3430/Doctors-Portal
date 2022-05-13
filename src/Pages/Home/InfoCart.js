import React from 'react';

const InfoCart = ({img, CartTitle, bgColor, text}) => {
    return (
        <div className={`card pt-2 lg:card-side bg-base-100 shadow-xl ${bgColor}`}>
            <figure className='pl-3' >
                <img src={img} alt="Album"/>
            </figure  >
            <div className="card-body text-white">
                <h2 className="card-title ">{CartTitle}</h2>
                <p>{text}</p>

            </div>
        </div>
    );
};

export default InfoCart;