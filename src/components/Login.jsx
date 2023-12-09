// src/components/Login.jsx
import React from 'react';
import slide1 from '../assets/imagenes/mujer.jpg';
import slide2 from '../assets/imagenes/slide2.png';
import './Login.css';

const Login = () => {
  return (
    <body className='login-body'>
    <div className="container">
        <div className="brand-section">
            <div id="imageCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slide1} alt="Slide 1" />
                    </div>
                    <div className="carousel-item">
                        <img src={slide2} alt="Slide 2" />
                    </div>
                    {/* Add more images as needed */}
                </div>
            </div>
            <br />
            <div className="intro-text">
                <h4>¡Bienvenido a IdealRoom!</h4>
                <p>Tu solución para una búsqueda de alojamiento estudiantil más fácil y conveniente. Encuentra tu lugar ideal cerca de Tecsup de manera rápida y eficiente con nuestra aplicación. ¡Comienza a explorar ahora y simplifica la búsqueda de alojamiento estudiantil!</p>
            </div>
        </div>
        <div className="login-container">
            <h1 className="text-center">Inicio de Sesión</h1>
            <form>
                <div className="form-group">
                    <div className="form-registro">
                        <i className="fas fa-envelope fa-lg"></i>
                        <input type="email" className="span-derecha form-control" id="email" aria-describedby="emailHelp" placeholder="Correo Electrónico" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-registro btn-password">
                        <i className="fas fa-lock fa-lg"></i>
                        <input className="span-derecha form-control" name="password" title="Ingrese su contraseña" type="password" id="password" formControlName="password" placeholder="Contraseña" />
                    </div>
                </div>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btnstar btn btn-primary" type="submit" disabled={true /* Coloca la lógica apropiada aquí */}>Iniciar Sesión</button>
                </div>
                <div className="create-account">
                    <p>¿Aún no tienes una cuenta? <a href="#">Regístrate aquí</a></p>
                </div>
            </form>
            <div className="social-login">
                <button type="button" className="btn btn-google"><i className="fab fa-google"></i> Iniciar sesión con Google</button>
            </div>
        </div>
    </div>
    </body>
  );
};

export default Login;
