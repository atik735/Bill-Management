import React from 'react';
import Banner from '../Components/Banner';
import GridCard from '../Components/GridCard';
import BankingFeatures from '../Components/BankingFeatures';

const Home = () => {
    return (
        <>
                  <title>PayBill || Home</title>
          <Banner></Banner>  
          <GridCard></GridCard>
          <BankingFeatures></BankingFeatures>
        </>
    );
};

export default Home;