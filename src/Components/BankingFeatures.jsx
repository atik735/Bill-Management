import React from 'react';
import circulars from '../assets/circulars.jpg';
import services from '../assets/services.jpg';
import support from '../assets/support.jpg';
import market from '../assets/market.jpeg';

const BankingFeatures = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-800">Explore Our Banking Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card Template */}
          {[{
            img: circulars,
            title: "Latest Notices & Circulars",
            type: "list",
            items: [
              "Notice: Update on Foreign Exchange Guidelines",
              "Policy Circular: Revised Banking Hours During Ramadan",
              "Announcement: New Loan Schemes for SMEs"
            ]
          },
          {
            img: services,
            title: "Digital Services & Portals",
            type: "list",
            items: [
              "Online Loan Application",
              "Mobile Banking Dashboard",
              "Foreign Remittance Tracker"
            ]
          },
          {
            img: support,
            title: "Customer Support & Help Center",
            type: "paragraph",
            text: "Access FAQs, get help with account issues, and connect with our 24/7 customer service team for any inquiries or support needs."
          },
          {
            img: market,
            title: "Market Updates & Economic Insights",
            type: "list",
            items: [
              "Interest Rate Changes: Latest updates",
              "Inflation Reports: Impact on savings",
              "Economic Forecasts: Expert predictions"
            ]
          }].map((card, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-l-4 border-blue-500 text-center"
            >
              <img src={card.img} alt="" className="w-68 h-48 mx-auto mb-4 rounded-xl" />
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">{card.title}</h3>
              {card.type === "list" ? (
                <ul className=" pl-5 space-y-2 text-gray-700">
                  {card.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700">{card.text}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BankingFeatures;
