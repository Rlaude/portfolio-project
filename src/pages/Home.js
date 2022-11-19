import React from 'react';
import { Link } from 'react-router-dom';
import porkbbq from '../assets/porkbbq.webp';
import '../styles/Home.css';

function Home() {
  return (
    <div>
        <div className="home" style={{ backgroundImage: `url(${porkbbq})`}}>
            <div className="headerContainer" >
                <h1>PinoyBBQ</h1>
                <p>Taste of the Philippines</p>
                <Link to="/menu">
                    <button> Order Now </button>
                </Link>
            </div>
        </div>    
    </div>
  )
}

export default Home;