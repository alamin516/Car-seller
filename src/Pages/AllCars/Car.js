import React from 'react';

const Car = ({ car }) => {
    const { _id, name, img, location, price, resale_price, descriptions } = car;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    <div className="badge badge-secondary rounded-sm text-2xl h-10">{name}</div>
                </h2>
                <div >
                    {
                        resale_price ? <>
                            <p><span className='text-2xl font-bold'>${resale_price} </span><del>${price}</del></p>
                        </> :
                            <p className='text-2xl'>${price}</p>
                    }
                </div>
                <p>{descriptions}</p>
                <p>{location}</p>
                <p></p>

                <div className="card-actions justify-center w-12/12">
                    <button className='btn btn-md btn-secondary'>Booked Now</button>
                </div>
            </div>
        </div>
    );
};

export default Car;