import React from 'react';
import { Link } from 'react-router';

const BillsCard = ({bill}) => {
    // console.log(bill);
    
    return (
<div className="md:flex justify-around items-center p-4 outline shadow-lg gap-5">
<div className="relative">
<img className='w-52 h-48 place-self-center' src={bill.organization_logo} alt="" />
        <span className='absolute bottom-0 right-0 max-sm:right-10 bg-base-300 p-1 rounded-full '>
            <img className='w-[50px] h-[50px] bg-base-200 rounded-full p-1' src={bill.bill_type_icon} alt="" />
            </span>
            </div>
            <div className=" text-center md:flex justify-around items-center gap-5">
        <h1 className="font-bold text-lg text-blue-700">{bill.organization}</h1>
        <p>{bill.bill_type}</p>
        <p>Amount: {bill.amount}</p>
        <p>Due Date :{bill.due_date}</p>
        <Link className=" btn rounded-full bg-blue-500 text-white mb-2" to={`/paybill/${bill.id}`}>See Deatils</Link>
        </div>
        </div>
    );
};

export default BillsCard;
