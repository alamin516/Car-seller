import React from 'react';

const MyOrders = () => {
    const orders = []

    const handleOrderPay = () =>{

    }

    return (
        <div className='p-5'>
            <h2 className='text-3xl mb-5'>All Orders : {}</h2>
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
                            orders.map((order, i) => <tr key={order._id}>
                                <th>{i + 1}</th>
                                <td>{order?.name}</td>
                                <td>{order?.email}</td>
                                <td><button onClick={() => handleOrderPay(order._id)} className='btn btn-sm bg-red-600 border-red-600 text-white'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;