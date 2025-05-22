import React from "react";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { FaLocationArrow } from "react-icons/fa";
const slides = [
  {
    id: 1,
    title: "Easy Bill Payment",
    description: "Pay DESCO, WASA, Titas and more with just one click!",
    image:
      "https://i.ibb.co.com/xqLPyZT8/credit-card-payment-landing-page-concept-52683-24893.jpg",
  },
  {
    id: 2,
    title: "Secure Transactions",
    description: "Your information is fully protected and encrypted.",
    image: "https://i.ibb.co.com/gMBC119Z/phishing-illustration-hacker-stealing-credit-card-from-app-cybercrime-1150-37365.jpg",
  },
  {
    id: 3,
    title: "Smart Banking",
    description: "Connect with multiple banks and bank smarter.",
    image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0",
  },
  {
    id: 4,
    title: "Electricity Bill",
    description: "Easily pay your electricity bills from anywhere.",
    image: "https://i.ibb.co.com/PszGGjb0/planning-utility-costs-monthly-budget-197463-873.jpg",
  },
  {
    id: 5,
    title: "Gas Bill",
    description: "Pay your gas bill securely and without hassle.",
    image: "https://i.ibb.co.com/dwLJJLmy/counting-euro-banknotes-near-burning-gas-stove-506452-17566.jpg",
  },
  {
    id: 6,
    title: "Internet Bill",
    description: "Stay connected by paying your internet bills online.",
    image:
      "https://i.ibb.co.com/B5HVpDRn/premium-photo-1675024298717-02d612d9cc82.jpg",
  },
  {
    id: 7,
    title: "Water Bill",
    description: "Manage your water usage payments with ease.",
    image: "https://images.unsplash.com/photo-1521207418485-99c705420785",
  },
  {
    id: 8,
    title: "Credit Card Bill",
    description: "Clear your credit card dues with a few simple taps.",
    image: "https://i.ibb.co.com/0NY44cz/car-model-calculator-bank-statement-credit-card-wooden-table-43314-2069.jpg",
  },
  {
    id: 9,
    title: "Tuition / School / College",
    description:
      "Pay educational fees quickly for school, college, or university.",
    image:
      "https://i.ibb.co.com/Xks5cpDb/mentor-training-students-business-school-1262-15004.jpg",
  },
];

const Banner = () => {
  return (
    <div className="w-full h-[550px]">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover  bg-center flex items-center justify-start px-10 text-white"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className=" flex flex-col justify-center items-center bg-opacity-50  gap-3 rounded-lg ">
                <h2 className="text-4xl font-bold text-blue-700">{slide.title}</h2>
                <p className="mt-4 text-lg text-blue-500 font-medium">{slide.description}</p>
                <Link
                  to="/bills"
                  className="btn w-[200px] rounded-full text-xl text-blue-700 px-5 py-2"
                >
                  {" "}
                  Bill <FaLocationArrow size={20} />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
