import React from 'react';
import { useLoaderData } from 'react-router';
import BillsCard from '../Components/BillsCard';

const Bills = () => {
    const data = useLoaderData()
    // console.log(data);
    
    return (
        <div className='space-y-10'>
                <title>PayBill || Bills</title>

            {
                data.map(bill => <BillsCard key={bill.id} bill={bill}></BillsCard>)
            }
        </div>
    );
};

export default Bills;