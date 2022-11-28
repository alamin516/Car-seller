import React  from 'react';
import useTitle from '../../../hooks/useTitle';


const Dashboard = () => {
    useTitle('dashboard')
    return (
        <div className='p-5'>
            <h2 className='text-4xl font-bold'>Dashboard</h2>
        </div>
    );
};

export default Dashboard;