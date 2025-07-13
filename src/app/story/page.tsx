'use client';

import { useState } from 'react';

const DATA = [
  {
    "id": "kd8k82nun",
    "title": "+120EXP –  Frontend Developer for media buying team",
    "date": "2023+",
    "location": "Research Facility, Planet X-17",
    "status": "Active"
  },
  {
    "id": "ypb54aahn",
    "title": "+20 SKILLS – html5/css3/JavaScript Fundamentals by SoftServe",
    "date": "2022",
    "location": "Online",
    "status": "completed"
  },
  {
    "id": "w6mgx5s2k",
    "title": "+100EXP – Marketing Odyssey",
    "date": "2017-2022",
    "location": "Research Facility, Planet X-17",
    "status": "completed"
  },
  {
    "id": "gzfjmpfe9",
    "title": "+10 SKILLS – Computerised control systems and automatics (Master) - KNU",
    "date": "2015-2017",
    "location": "University, Sun YNT-08",
    "status": "completed"
  },
  {
    "id": "cc2nh2krn",
    "title": "BASIC SKILLS ACHIEVED – System Engineering (Bachelor) - KNU",
    "date": "2011-2015",
    "location": "University, Sun YNT-08",
    "status": "completed"
  }
];


export default function StoryPage() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setActiveItem(prevIndex => (prevIndex === id ? null : id));
  };


  return (
    <div className="content-container">
      <div className="small-corners"><div></div><div></div><div></div><div></div></div>
      <div className="section-title">
        <h2>data log dump initialized.</h2>
      </div>
      <div className="section-content">
        <div className="accordion">
          { DATA && DATA.map( (item) => (
            
            <div className={ activeItem === item.id ? "accordion-item active" : "accordion-item"} key={item.id}
            onClick={() => handleClick(item.id)}
            >
              <div className="accordion-title">
                <div className="text">LOG ENTRY: {[item.title]}</div>
                <div className="date">DATE: {item.date}</div>
              </div>
              <div className="accordion-content">
                <p>
                  <span>LOCATION:</span> {item.location}
                  <br />
                  <span>PROJECT STATUS:</span> {item.status}
                </p>
              </div>
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
}
