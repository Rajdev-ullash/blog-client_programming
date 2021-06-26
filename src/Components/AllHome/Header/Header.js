import React from 'react';
import HomeSlider from './HomeSlider/HomeSlider';
import Navbar from './Navbar'

const Header = () => {
    return (
        <div>
          <Navbar />
          <HomeSlider></HomeSlider>
        </div>
    );
};

export default Header;