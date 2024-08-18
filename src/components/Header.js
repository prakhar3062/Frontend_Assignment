import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel CSS
import '../styles/Header.css'; // Import custom CSS for the header

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">MyStore</Link>
        </div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/product">Products</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/">About</Link></li>
        </ul>
      </nav>

      <div className="slider-container">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={3000}
        >
          <div>
            <img src="/images/slider1.jpg" alt="Slider 1" />
          </div>
          <div>
            <img src="/images/slider2.webp" alt="Slider 2" />
          </div>
          <div>
            <img src="/images/slider3.webp" atl="Slider 3"/>
          </div>
        </Carousel>
      </div>
    </header>
  );
};

export default Header;
