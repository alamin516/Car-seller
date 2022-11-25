import React from 'react';
import { Link } from 'react-router-dom';

const HomeCategory = ({ category }) => {
    const { category: name, categoryImg, _id } = category;


    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
               <Link to={`/category/${_id}`}> <img src={categoryImg} alt="" /></Link>
                <div className="card-actions justify-center">
                    <Link to={`/category/${_id}`}><button className="btn btn-secondary w-full">{name}</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HomeCategory;