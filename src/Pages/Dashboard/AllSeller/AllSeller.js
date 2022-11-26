import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const AllSeller = () => {

    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/seller?role=seller');
            const data = await res.json();
            return data
        }
    })

    const handleSellerDelete = seller => {

        fetch(`http://localhost:5000/users/seller/${seller?._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success(`${seller?.name} deleted successfully`)
                    refetch()
                }
            })
    }


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='p-5'>
            <h2 className='text-3xl mb-5'>All Sellers : {sellers.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, i) => <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <td>{seller?.name}</td>
                                <td>{seller?.email}</td>
                                <td><button onClick={() => handleSellerDelete(seller._id)} className='btn btn-sm bg-red-600 border-red-600 text-white'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;