import React from 'react';
import '../styles/Design.css';

const Design: React.FC = () => {
    return (
        <section id="design" className="design">
            <div className="container flex-box">
                {/* Header Section */}
                <div className="design-header">
                    <div className="section-divider"></div>
                    <h2>We have been designing gardens since 1990</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin ante nisl,
                        non feugiat null fermentum lobortis. Aenean placerat ipsum ut velit elementum, in sodales
                        tellus viverra. Phasellus vestibulum, ex non lobortis faucibus.
                    </p>
                    <div className='img-left'>
                        <img src='/image/about1.jpg.webp' alt=''></img>
                    </div>
                </div>

                {/* Mission Sections */}
                <div className="mission-sections">
                    <div className="mission-item">
                        <h3>Our Mission</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin ante nisl,
                            non feugiat null fermentum lobortis.
                        </p>
                    </div>

                    <div className="mission-item">
                        <h3>Our Vision</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin ante nisl,
                            non feugiat null fermentum lobortis.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div className="design-cta">
                        <button className="cta-button">Learn More About Us</button>
                    </div>

                    <div className='img-right'>
                        <img src='/image/about2.jpg.webp' alt=''></img>
                    </div>
                </div>

                
            </div>
        </section>
    );
};

export default Design;