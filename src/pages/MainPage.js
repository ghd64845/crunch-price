import React from 'react';
import Header from '../components/common/Header';
import Carousel from '../components/carousel/Carousel';
import Contents from '../components/contents/Constents';
import Footer from '../components/common/Footer';

const MainPage = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Contents />
      <Footer />
    </>
  );
};

export default MainPage;
