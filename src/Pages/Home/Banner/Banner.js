import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../assets/images/Banner/Banner.png'

const Banner = () => {
    const user = {}
    return (
        <div className="hero min-h-screen h-1/2  relative" style={{ backgroundImage: `url(${banner})` }}>
            <div className='hero-overlay bg-opacity-20 bg-primary'></div>
            <div className="container">
                <div className="w-50 absolute  top-1/4 p-6">
                    <h1 className='lg:text-6xl text-2xl font-extrabold text-white mb-4'>Welcome to Car Seller</h1>
                    <p className='text-2xl text-white mb-2'><span className='w-6 h-2 mr-2 bg-white'>.....</span> Get excusive offers first</p>
                    <p className='text-2xl text-white mb-6'> <span className='w-6 h-6 bg-white mr-2'>.....</span> Volume discounts for buyers</p>
                    
                    {
                        user?.email ? <button className="btn btn-secondary">Get Started</button> : <Link to='/login'><button className="btn btn-secondary">Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Banner;