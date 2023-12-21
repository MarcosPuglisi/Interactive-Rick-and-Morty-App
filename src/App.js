import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';



function App() {

  return (
    <div className='ecommerce-main'>
      <div className='header'>
        <Header />
      </div>
      <div className='body'>
        <Body />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;