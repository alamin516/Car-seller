import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllCars = () => {
    const category = useLoaderData();
    const {_id} = category;
    console.log(_id)

    const { data: cars = []} = useQuery({
        queryKey: ['cars'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/cars?id=${_id}`);
            const data = await res.json();
            return data
        }
    })

    return (
        <div className='container p-6'>
            <h1>{cars.length}</h1>
            {
                cars.map(car => <li key={car._id}>{car.name}</li>)
            }
        </div>
    );
};

export default AllCars;