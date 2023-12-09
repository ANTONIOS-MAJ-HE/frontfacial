// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import homeImage from '../assets/imagenes/home3.jpeg';
import './Home.css';

const Home = () => {
  return (
    <body className='home-body'>
    <div className="home-container">
      <img src={homeImage} alt="Facial Recognition" />
      <h1>Reconocimiento Facial</h1>
      <p>¡Bienvenido al futuro! Inicia sesión para experimentar la revolución del reconocimiento facial.</p>
      <Link to="/login"> {/* Agrega este Link */}
        <button className="home-btn">Login</button>
      </Link>
    </div>
    </body>
  );
};

export default Home;
