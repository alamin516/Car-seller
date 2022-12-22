import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import icon from '../../assets/icon/icons8-ok-48.png'

const Car = ({ car}) => {
    const { _id, name, img, location, price, resale_price, description, email, seller, condition, used_time, verified_seller } = car;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    <div className="text-2xl h-10">{name}</div>
                </h2>
                <div >
                    {
                        resale_price ? <>
                            <p><span className='text-xl font-bold'>Price:  ${resale_price} </span><del>${price}</del></p>
                        </> :
                            <p><span className='text-xl font-bold'>Price: ${price} </span></p>
                    }
                </div>
                <p>{description.slice(0, 80) + '.....'}</p>

                <div className="card-actions justify-center mt-4">
                    <button className='btn btn-secondary border-none w-full'><Link to={`/product/${_id}`}>View Now</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Car;