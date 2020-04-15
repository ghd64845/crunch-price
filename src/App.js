import React from 'react';
import MainPage from './pages/MainPage';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <>
      <Helmet>
        <title>가격 만본다면, 크프</title>
      </Helmet>
      <MainPage />
    </>
  );
}

export default App;
