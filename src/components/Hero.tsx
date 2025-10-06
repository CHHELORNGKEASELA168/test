import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';

interface Slide {
    id: number;
    title: string;
    description: string;
    backgroundImage: string;
    ctaText: string;
}

const Hero: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides: Slide[] = [
        {
            id: 1,
            title: 'We provide best gardening service',
            description: 'Trust The Grounds Guys professionals to take care of your commercial or residential grounds',
            backgroundImage: 'https://jimsmowing.com.au/wp-content/uploads/2024/11/Golf-Course-Grass-Jims-Mowing-1.jpg',
            ctaText: 'View Our Services'
        },
        {
            id: 2,
            title: 'Transform Your Outdoor Space',
            description: 'Create beautiful, sustainable landscapes that enhance your property value and quality of life',
            backgroundImage: 'https://www.customhomegroup.com/wp-content/uploads/2017/10/how-to-prune-your-garden.jpg',
            ctaText: 'Our Projects'
        },
        {
            id: 3,
            title: 'Expert Landscape Design',
            description: 'Custom designs that blend beauty with functionality for your perfect outdoor oasis',
            backgroundImage: 'https://www.skh.com/wp-content/uploads/2025/01/image2-e1597082437309-1024x682.jpg',
            ctaText: 'Get Free Quote'
        },
        {
            id: 4,
            title: 'Seasonal Garden Care',
            description: 'Year-round maintenance to keep your garden thriving in every season',
            backgroundImage: 'https://www.guanoboost.co.za/cdn/shop/articles/6-simple-tips-for-keeping-your-grass-green-during-the-summer-months-703859.png?v=1683583664',
            ctaText: 'Learn More'
        }
    ];

    // Auto-advance slides
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, [slides.length]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="hero">
            <div className="hero-slideshow">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.backgroundImage})`
                        }}
                    >
                        <div className="container">
                            <div className="hero-content">
                                <h1 className="slide-titleWW">{slide.title}</h1>
                                <p className="slide-description">{slide.description}</p>
                                <button className="cta-button">{slide.ctaText}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button className="slide-nav slide-prev" onClick={prevSlide}>
                ‹
            </button>
            <button className="slide-nav slide-next" onClick={nextSlide}>
                ›
            </button>

            {/* Slide Indicators */}
            <div className="slide-indicators">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;