import React from 'react';
import { Link } from 'react-router-dom';

const HomeCategory = ({ category }) => {
    const { category: name, categoryImg, id } = category;


    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <img src={categoryImg} alt="" />
                <div className="card-actions justify-center">
                    <Link to={`/category/${id}`}><button className="btn btn-secondary">{name}</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HomeCategory;