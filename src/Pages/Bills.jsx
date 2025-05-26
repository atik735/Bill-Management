import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import BillsCard from "../Components/BillsCard";

const Bills = () => {
  const data = useLoaderData();
  // console.log(data);
  const [type,setType] = useState('')
  const [billData,setBillsData] = useState([])
  console.log(type)

  useEffect(() =>{

    if (type === '') {
      setBillsData(data)
    }

    else{
      const filterData = data.filter(item => item.bill_type == type )
      setBillsData(filterData)
    }

  },[type])

  return (
    <div className="space-y-10">
      
        <title>PayBill || Bills</title>
      <select onChange={(e) => setType(e.target.value)} className="border p-1">
        <option value="">Select Type</option>
        <option value="electricity">Electricity</option>
        <option value="water">Water</option>
        <option value="gas">Gas</option>
        <option value="internet">Internet</option>
        <option value="credit_card">Credit Card</option>
      </select>

      {billData.map((bill) => (
        <BillsCard key={bill.id} bill={bill}></BillsCard>
      ))}
    </div>
  );
};

export default Bills;
