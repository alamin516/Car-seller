import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import icon from '../../assets/icon/icons8-ok-48.png'

const Car = ({ car, setProduct }) => {
    const { user } = useContext(AuthContext)
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
                <p><strong>Location: </strong>{location}</p>
                <p><strong>Condition:</strong> {condition}</p>
                <p><strong>Used:</strong> {used_time} yrs</p>
                <div className='flex items-center'>
                    <span className='mr-4'><strong>Seller:</strong> {seller}</span>
                    <span>{verified_seller && <img className='w-8 h-8' src={icon} alt="" />}</span>
                    
                </div>
                <p><strong>email:</strong> {email}</p>

                <div className="card-actions justify-center mt-4">
                    {user?.email ? <label htmlFor="order-modal"
                        className="btn btn-secondary text-white"
                        onClick={() => setProduct(car)}
                    >Purchase Now</label> : <Link to='/login'><button className='btn btn-md btn-secondary'>Purchase Now</button></Link>}
                </div>
            </div>
        </div>
    );
};

export default Car;