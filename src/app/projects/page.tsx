"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

type Project = {
  id: number;
  date: string;
  image: string;
  title: string;
  description: string;
  content: string;
  link: string;
};

const projects: Project[] = [
  {
    id: 1,
    date: 'published 1 months ago',
    image: '/projects/portfolio-7.png',
    title: 'Tweet_IT',
    description: 'Twitter variation',
    content: 'HTML/SCSS/React JS. React Context API, login, mocking APIs with Mirage JS',
    link: 'https://github.com/Polkan37/twitter-variation'
  },
  {
    id: 3,
    date: 'published 15 months ago',
    image: '/projects/portfolio-3.jpg',
    title: 'Dartovich',
    description: 'Photographer webpage',
    content: 'HTML/SCSS/React JS',
    link: 'https://polkan37.github.io/portfolio/'
  },
  {
    id: 5,
    date: 'published 19 months ago',
    image: '/projects/portfolio-5.jpg',
    title: 'Beer boutique',
    description: 'Bar website',
    content: 'HTML/CSS/JS Team project on SoftServe fundamentals course.',
    link: 'https://koldovsky.github.io/698-team-4/'
  },
  {
    id: 6,
    date: 'published 15 months ago',
    image: '/projects/portfolio-6.jpg',
    title: 'leather crafties',
    description: 'Online shop website',
    content: 'HTML5/CSS3 adaptable page',
    link: 'https://polkan37.github.io/leather-crafties/'
  }
];

export default function ProjectsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerPage = 3;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev === 0) return projects.length - 1;
      return prev - 1;
    });
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev === projects.length - 1) return 0;
      return prev + 1;
    });
  }, []);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      console.log('Key pressed:', event.key); // для дебагу
      if (event.key === 'ArrowLeft') {
        handlePrev();
      } else if (event.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handlePrev, handleNext]);

  const getVisibleProjects = () => {
    const visibleProjects: Project[] = [];
    
    for (let i = 0; i < projectsPerPage; i++) {
      const index = (currentIndex + i) % projects.length;
      visibleProjects.push(projects[index]);
    }
    
    return visibleProjects;
  };

  const visibleProjects = getVisibleProjects();


  return (
    <div className="content-container">
      <div className="small-corners"><div></div><div></div><div></div><div></div></div>
      <div className="section-title">
        <h2>Creations</h2>
      </div>
      <div className="section-content">
        <div className="creations move">
          {visibleProjects.map((project) => (
            <div className="creations-item" key={project.id}>
              <div className="creations-card">
                <div className="creations-background">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="blur-overlay"></div>
                </div>
                <div className="large-corners"><div></div><div></div><div></div><div></div></div>
                <div className="creations-card-content">
                  <p>{project.date}</p>
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    width={300}
                    height={200}
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="buttons">
                    <a href={project.link} target="_blank" rel="norefferrer">view live</a>
                  </div>
                </div>
              </div>
              <div className="creations-description">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div>{project.content}</div>
              </div>
              <Image 
                src="/decoration.png" 
                alt="decoration"
                width={1000}
                height={100}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          ))}
        </div>
        <div className="creations-buttons">
          <button className="prev" onClick={handlePrev}>&#12296;</button>
          <button className="next" onClick={handleNext}>&#12297;</button>
        </div>
      </div>
    </div>
  );
}
