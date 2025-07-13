export default function AboutPage() {
  return (
    <div className="content-container">
      <div className="small-corners"><div></div><div></div><div></div><div></div></div>
      <div className="section-title">
        <h2>Who is Marharyta</h2>
      </div>
      <div className="section-content">
        <div className="about">
          <div className="about-author">
            <div className="about-item">
              <div className="about-title">The short introduction of my life</div>
              <div className="about-text">I've long been captivated by the boundless potential of digital interfaces to enhance human experiences. Transitioning into UI/UX design, my goal is to craft compelling and intuitive web experiences that not only solve intricate challenges but also leave a meaningful impact on users' lives.</div>
            </div>
            <div className="about-item">
              <div className="about-title">Career and development</div>
              <div className="about-text">Throughout my career, I have worked with a wide range of design tools, from Figma and Photoshop to Illustrator and DaVinci Resolve. I am passionate about staying up-to-date with the latest industry trends and tools, continually learning new skills to enhance my craft.</div>
            </div>
            <div className="about-item">
              <div className="about-title">More can be added in the left side for summary</div>
              <div className="about-text">As a UI/UX designer, my primary focus is on delivering user-centric, visually appealing, and intuitive digital experiences. I thrive on collaborating with diverse teams and engaging closely with clients to grasp their requirements, ensuring that I deliver optimal solutions tailored to their needs.</div>
            </div>
          </div>
          <div className="about-img">
            <div className="small-corners"><div></div><div></div><div></div><div></div></div>
            <img src="/shape.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
