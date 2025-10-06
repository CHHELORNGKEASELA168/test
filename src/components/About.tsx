import React from 'react';
import '../styles/About.css';
// import { CheckCircle } from "lucide-react"; // icon library
import { HiCheckCircle } from "react-icons/hi2";


interface Feature {
    id: number;
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        id: 1,
        title: "We prefer quality first",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin ante nisl, non feugiat null fermentum lobortis.",
    },
    {
        id: 2,
        title: "We prefer quality first",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin ante nisl, non feugiat null fermentum lobortis.",
    },
    {
        id: 3,
        title: "We prefer quality first",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin ante nisl, non feugiat null fermentum lobortis.",
    },
];

const About: React.FC = () => {
    return (
        <>
            <section id="about" className="about">
                <div className="container">
                    <div className="about-content">
                        <div className="about-text">
                            <p>
                                Check out our list of service for your garden and{" "}
                                <span>
                                    <a href="#">get free quote</a>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="design" className="design">
                <div className="container flex-box">
                    {/* Header Section */}
                    <div className="design-header">
                        <h2>We have been designing gardens since 1990</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                            sollicitudin ante nisl, non feugiat null fermentum lobortis. Aenean
                            placerat ipsum ut velit elementum, in sodales tellus viverra.
                            Phasellus vestibulum, ex non lobortis faucibus.
                        </p>
                        <div className="img-left">
                            <img src="/image/about1.jpg.webp" alt="Garden design" />
                        </div>
                    </div>

                    {/* Mission Sections */}
                    <div className="mission-sections">
                        <div className="mission-item">
                            <h3>Our Mission</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                                sollicitudin ante nisl, non feugiat null fermentum lobortis.
                            </p>
                        </div>

                        <div className="mission-item">
                            <h3>Our Vision</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                                sollicitudin ante nisl, non feugiat null fermentum lobortis.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="design-cta">
                            <button className="cta-button">Learn More About Us</button>
                        </div>

                        <div className="img-right">
                            <img src="/image/about2.jpg.webp" alt="Garden vision" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features">
                <div className="features-grid">
                    {features.map((feature) => (
                        <div key={feature.id} className="feature-card">
                            <div className="feature-icon">
                                {/* <CheckCircle size={40} color="green" /> */}
                                <HiCheckCircle />
                            </div>
                            <h3 className='h3'>{feature.title}</h3>
                            <p className='p'>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default About;
