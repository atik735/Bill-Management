import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import PayBillCard from "../Components/PayBillCard";

const PayBill = () => {
  const data = useLoaderData();
  console.log(data);
  const { id } = useParams();
  const [paybill, setPayBill] = useState({});
  console.log(paybill);

  useEffect(() => {
    const PayBills = data.find((bill) => bill.id == id);
    setPayBill(PayBills);
  }, [data, id]);
  return (
    <div className="border w-8/12 mx-auto">
      <title>PayBills || PayBill</title>
      <PayBillCard paybill={paybill}></PayBillCard>
    </div>
  );
};

export default PayBill;
