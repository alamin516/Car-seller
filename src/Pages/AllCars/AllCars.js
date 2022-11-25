import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import Car from './Car';

const AllCars = () => {
    const category = useLoaderData();
    const { _id } = category;

    const { data: cars = [], isLoading } = useQuery({
        queryKey: ['cars'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products?id=${_id}`);
            const data = await res.json();
            return data
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='container p-6'>
            <h1 className='text-3xl text-center'>All Products</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 my-20'>
                {
                    cars.map(car => 
                        <Car
                        key={car._id}
                        car={car}
                        >
                        </Car>
                        
                        )
                }
            </div>
        </div>
    );
};

export default AllCars;