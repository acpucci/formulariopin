import React from 'react'
import './Components/style.scss'

function About(){
    return(
        <section className="sobre" id="nosotros">

            <div className="bordecito">
                <div className="pad">
                    <h1 className="titlee">We Help People<br/>
                    <span>Our Mission</span></h1>
                    <p>
                    At 25Watts, our mission is to make travel dreams a reality. We are dedicated to providing our customers with unparalleled service, expert guidance, and access to a world of possibilities. We believe in delivering exceptional value by offering competitive prices without compromising on quality. Through our commitment to sustainable and responsible travel practices, we aim to contribute positively to the destinations we visit. Whether you're seeking a relaxing getaway, an adventurous expedition, or a culturally immersive experience, our mission is to curate tailor-made itineraries that exceed expectations and create memories that will last a lifetime.
                    </p>
                </div>
            </div>

        </section>
    );
}

export default About;