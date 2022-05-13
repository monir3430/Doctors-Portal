import React from 'react';

const Reviews = ({ c }) => {
    return (
        <div className="card w-96  bg-base-100 shadow-xl">
            <div className="card-body">

                <p>{c.des}</p>
                <div className="card-actions">
                    <div class="avatar">
                        <div class="w-25 rounded-full ring ring-primary ">
                            <img className='p-1' src={c.img} />
                        </div>
                        <div className='p-3'>
                            <p>{c.name}</p>
                            <p>{c.location}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Reviews;