// CommitmentSection.tsx
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import '../styles/CommitmentSection.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

interface FormData {
    name: string;
    email: string;
    landscaping: string;
    message: string;
}

const CommitmentSection: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        landscaping: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    // Slide content data
    const slides = [
        {
            title: "Quality Service",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin ante nisl, non feugiat null fermentum lobortis. Aenean placerat ipsum ut velit elementum, in sodales tellus viverra. Phasellus vestibulum, ex non lobortis faucibus, odio nibh luctus massa, id volutpat risus nibh ac felis.",
            ceoName: "Chhel Orngkeasela",
            ceoTitle: "CEO of Gardening"
        },
        {
            title: "Quality Service",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin ante nisl, non feugiat null fermentum lobortis. Aenean placerat ipsum ut velit elementum, in sodales tellus viverra. Phasellus vestibulum, ex non lobortis faucibus, odio nibh luctus massa, id volutpat risus nibh ac felis.",
            ceoName: "Chhel Orngkeasela",
            ceoTitle: "CEO of Gardening"
        },
        {
            title: "Expert Team",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin ante nisl, non feugiat null fermentum lobortis. Aenean placerat ipsum ut velit elementum, in sodales tellus viverra. Phasellus vestibulum, ex non lobortis faucibus, odio nibh luctus massa, id volutpat risus nibh ac felis.",
            ceoName: "Chhel Orngkeasela",
            ceoTitle: "CEO of Gardening"
        },
        {
            title: "Quality Service",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin ante nisl, non feugiat null fermentum lobortis. Aenean placerat ipsum ut velit elementum, in sodales tellus viverra. Phasellus vestibulum, ex non lobortis faucibus, odio nibh luctus massa, id volutpat risus nibh ac felis.",
            ceoName: "Chhel Orngkeasela",
            ceoTitle: "CEO of Gardening"
        }
    ];

    return (
        <div className="commitment-sections">
            {/* Left Image Section */}
            <section className="commitment-content-l">
                <img src='public/image/moun.jpg' alt='Gardening project' />
            </section>

            {/* Center Swiper Section */}
            <section className="commitment-content-c">
                <div className="swiper-container">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        // navigation={{
                        //     nextEl: '.swiper-button-next',
                        //     prevEl: '.swiper-button-prev',
                        // }}
                        pagination={{
                            clickable: true,
                            el: '.swiper-pagination',
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        className="commitment-swiper"
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="slide-content">
                                    <div className="content-block">
                                        <h1 className="slide-title">{slide.title}</h1>
                                        <p className="slide-text">
                                            {slide.text}
                                        </p>
                                    </div>

                                    <div className="ceo-block">
                                        <div>
                                            <img src="public/image/user.jpg" alt="" />
                                        </div>
                                        <div>
                                            <p className="text-user ceo-name">{slide.ceoName}</p>
                                            <p className="text-user ceo-title">{slide.ceoTitle}</p>
                                        </div>
                                    </div>



                                    {/* <div className="cta-block">
                                        <button className="cta-button">View Services</button>
                                    </div> */}
                                </div>

                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation */}
                    <div className="swiper-navigation">
                        <button className="cta-button_box">View Services</button>
                    </div>
                </div>
            </section>

            {/* Right Form Section */}
            <section className="quote-section-content-left">
                <div className="quote-section-r">
                    <h2 className="quote-header-r">Get Free Quote</h2>

                    <form onSubmit={handleSubmit} className="quote-form">
                        <div className="form-group">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Your Name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <select
                                id="landscaping"
                                name="landscaping"
                                value={formData.landscaping}
                                onChange={handleInputChange}
                                className="form-select"
                                required
                            >
                                <option value="">Select a service</option>
                                <option value="lawn-care">Lawn Care</option>
                                <option value="garden-design">Garden Design</option>
                                <option value="landscape-maintenance">Landscape Maintenance</option>
                                <option value="irrigation">Irrigation Systems</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows={4}
                                className="form-textarea"
                                placeholder="Message"
                                required
                            />
                        </div>

                    </form>
                </div>
                <div className="button-group">
                    <button
                        type="submit"
                        className="button button-primary"
                    >
                        Sent Request
                    </button>
                </div>
            </section>
        </div>
    );
};

export default CommitmentSection;