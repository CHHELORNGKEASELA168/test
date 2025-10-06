import React from "react";
import "../styles/Services.css";

interface Service {
    id: number;
    title: string;
    icon: string; // path to public asset
}

const Services: React.FC = () => {
    const services: Service[] = [
        { id: 1, title: "Landscaping", icon: "/image/services1.svg" },
        { id: 2, title: "Planting", icon: "/image/services2.svg" },
        { id: 3, title: "Watering", icon: "/image/services3.svg" },
        { id: 4, title: "Fence", icon: "/image/services4.svg" },
        { id: 5, title: "Removing", icon: "/image/services5.svg" },
        { id: 6, title: "Lawn Moving", icon: "/image/services6.svg" },
    ];

    return (
        <section id="services" className="services">
            <div className="container">
                <div className="services-content">
                    <div className="services-grid">
                        {services.map((service) => (
                            <div key={service.id} className="service-card">
                                <div className="service-icon">
                                    <img src={service.icon} alt={service.title} />
                                </div>
                                <h3>{service.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
