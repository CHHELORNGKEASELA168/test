// ProjectSwiper.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "../styles/ProjectSwiper.css"

interface Project {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  image: string;
}

interface ProjectSwiperProps {
  projects?: Project[];
}

const ProjectSwiper: React.FC<ProjectSwiperProps> = ({ 
  projects = defaultProjects 
}) => {
  return (
    <div className="project-swiper-container">
      <h2 className="section-title">Feature Projects</h2>
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="projects-swiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="project-card">
              <div className="project-image">
                {/* Add your image here */}
                <div className="image-placeholder">
                  {/* <span>{project.image}</span> */}
                  <img src={project.image} alt=''></img>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <button className="view-button">
                  {project.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
  );
};

// Default projects data
const defaultProjects: Project[] = [
  {
    id: 1,
    image: "/image/project1.jpg.webp",
    title: "Lawn removing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sellitcitudin ante.",
    buttonText: "View"
  },
  {
    id: 2,
    image: "/image/project2.jpg.webp",
    title: "Lawn removing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sellitcitudin ante.",
    buttonText: "View"
  },
  {
    id: 3,
    image: "/image/project3.jpg.webp",
    title: "Garden Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sellitcitudin ante.",
    buttonText: "View"
  },
  {
    id: 4,
    image: "/image/project4.jpg.webp",
    title: "Landscape Project",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sellitcitudin ante.",
    buttonText: "View"
  }
];

export default ProjectSwiper;