import React, { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { toast } from "react-toastify";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const PayBillCard = ({ paybill }) => {
  const [success, setSuccess] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const { payAmount, setPayAmount } = useContext(AuthContext);

  const handlePayBill = (amount) => {
    const convertAmount = parseInt(amount);
    setPayAmount((prev) => prev - convertAmount);

    toast("Bill paid successfully!");
    setSuccess(true);
    setIsDisabled(true);
  };
  return (
    <div className="flex max-sm:flex-col max-sm:text-center items-center justify-around">
      <div className="relative px-5">
        <img className="w-56 mb-3" src={paybill.organization_logo} alt="" />
        <span className="absolute bottom-0 -right-0 bg-base-300 p-1 rounded-full ">
          <img
            className="w-[50px] h-[50px] bg-base-200 rounded-full p-1"
            src={paybill.bill_type_icon}
            alt=""
          />
        </span>
      </div>
      <div className="p-5 space-y-2">
        <h1 className="text-xl font-bold">{paybill.organization}</h1>
        <p>{paybill.bill_type}</p>
        <p>Amount: {paybill.amount}</p>
        <p>Due Date: {paybill.due_date}</p>
        {success && (
          <p
            className="text-green-500 font-bold flex items-center justify-center
                    "
          >
            <IoCheckmarkCircleOutline fill="green" size={20} />
            Payment Successfull
          </p>
        )}
        <button
          onClick={() => handlePayBill(paybill.amount)}
          className="btn text-white bg-blue-700"
          disabled={isDisabled}
        >
          Pay Bill
        </button>
      </div>
    </div>
  );
};

export default PayBillCard;
