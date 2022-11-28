import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Loading from '../Shared/Loading/Loading';
import Car from './Car';
import OrderModal from './OrderModal/OrderModal';

const AllCars = () => {
    const category = useLoaderData();
    const [product, setProduct] = useState(null)
    const { _id } = category;
    useTitle('all cars')

    const { data: cars = [], isLoading, refetch } = useQuery({
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
                            setProduct={setProduct}
                        >
                        </Car>

                    )
                }
            </div>

            {
                product && <OrderModal
                    key={product._id}
                    product={product}
                    setProduct={setProduct}
                    refetch={refetch}
                >
                </OrderModal>
            }
        </div>
    );
};

export default AllCars;