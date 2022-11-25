import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyer = () => {

    const {data : buyers = []} = useQuery({
        queryKey: ['buyers'],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/users/buyer?role=buyer');
            const data = await res.json();
            return data
        }
    })

    const handlebuyerDelete = id =>{
        console.log(id)
    }


    return (
        <div className='p-5'>
            <h2 className='text-3xl mb-5'>All Buyers : {buyers.length}</h2>
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
                            buyers.map((buyer, i )=> <tr key={buyer._id}>
                            <th>{i + 1}</th>
                            <td>{buyer?.name}</td>
                            <td>{buyer?.email}</td>
                            <td><button onClick={()=> handlebuyerDelete(buyer._id)} className='btn btn-sm bg-red-600 border-red-600 text-white'>Delete</button></td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyer;