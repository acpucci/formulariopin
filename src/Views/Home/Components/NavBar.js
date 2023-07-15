import React from 'react';
import './style.scss'
import logo from './img/top-logo.png'
import imagen1 from './img/Home-img.png'


function NavBar() {
    return (
        <header className="head">
            <div className="logo">
                <a href=""><img className="imglogo" src={logo} alt="logo" /></a>
            </div>
            <nav className="navbar">
                <a href="#inicio">Home</a>
                <a href="#nosotros">About</a>
                <a href="#productos">Products</a>
                <a href="#servicios">Services</a>
                <a href="#contacto">Contact</a>
            </nav>
            <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={imagen1} class="fondito" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src={imagen1} class="fondito" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src={imagen1} class="fondito" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                            </div>
                    </div>
                </div>

            </div>

        </header>
 
    );
}

export default NavBar;