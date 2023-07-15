import React from 'react'
import './Components/style.scss'

function Services() {
    return (
        <section className="content " id="servicios">
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Personalized Assistance
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>
                                Our team of experienced travel experts is here to guide and assist you every step of the way. Let us guide you through these captivating locations, creating memories that will last a lifetime. Discover the world’s most sought-after destinations with Airfarerush, where every trip is a remarkable adventure.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Expert Recommendations
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>
                                From hidden gems to must-see attractions, we help you discover the essence of each place.
                                Each travel package is carefully designed to provide you with seamless logistics, hand-picked accommodations, and expertly planned activities, allowing you to focus on creating lifelong memories.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Great Support
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>
                                24/7 Customer Support. Your peace of mind is important to us. We're just a phone call or email away, ready to assist you.
                                Travel with confidence, knowing that we are dedicated to delivering an outstanding travel experience tailored to your needs and preferences.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Services;