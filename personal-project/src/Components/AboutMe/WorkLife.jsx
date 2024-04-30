import React from 'react';
import Slideshow from 'C:/Users/User/PersonalProject/FrontEnd/PersonalProjectFE/personal-project/src/Components/Slideshow/Slideshow.jsx';
import Github from 'C:/Users/User/PersonalProject/FrontEnd/PersonalProjectFE/personal-project/src/Pictures/GitHub.png';
import GitBash from 'C:/Users/User/PersonalProject/FrontEnd/PersonalProjectFE/personal-project/src/Pictures/GitBash.jpg';
import HTML from 'C:/Users/User/PersonalProject/FrontEnd/PersonalProjectFE/personal-project/src/Pictures/HTML.jpg';
import CSS from 'C:/Users/User/PersonalProject/FrontEnd/PersonalProjectFE/personal-project/src/Pictures/CSS.png';
import Javascript from 'C:/Users/User/PersonalProject/FrontEnd/PersonalProjectFE/personal-project/src/Pictures/Javascript.webp';
import VSCode from 'C:/Users/User/PersonalProject/FrontEnd/PersonalProjectFE/personal-project/src/Pictures/VSCode.webp';
import Java from 'C:/Users/User/PersonalProject/FrontEnd/PersonalProjectFE/personal-project/src/Pictures/Java.png';
import Springboot from 'C:/Users/User/PersonalProject/FrontEnd/PersonalProjectFE/personal-project/src/Pictures/Springboot.png';
import Eclipse from 'C:/Users/User/PersonalProject/FrontEnd/PersonalProjectFE/personal-project/src/Pictures/Eclipse.png';
import Selenium from 'C:/Users/User/PersonalProject/FrontEnd/PersonalProjectFE/personal-project/src/Pictures/Selenium.webp';
import Jenkins from 'C:/Users/User/PersonalProject/FrontEnd/PersonalProjectFE/personal-project/src/Pictures/Jenkins.png';

const WorkLife = () => {
  // Array of image URLs
  const images = [
    Github,
    GitBash,
    HTML,
    CSS,
    Javascript,
    VSCode,
    Java,
    Springboot,
    Eclipse,
    Selenium,
    Jenkins,
  ];

  return (
    <div>
      <br/>
      <br/>
      <h3>Professional Profile</h3>
      <p>
        Currently undertaking a reskilling/ bootcamp oppurtunity to learn how to operate as a full stack engineer.
        Built foundation of knowledge across front and back end development.
      </p>
      <br/>
      <h3>Recent Achievements, Skills and Experience</h3>
      <p>
        Being able to secure my spot on the reskilling bootcamp oppurtunity is a massive achievement for me as 
        it has allowed me to experience a whole new area of a work environment and be able to experience a non 
        customer facing side to also learn new ways of working when not set on compact hours and timings. 
        Started my journey by learning a variety of GitHub, Git Bash, CSS, HTML, Javascript, ReactJs, Java, 
        Springboot, SQL alongside other features and applications. This has allowed to massively increase my 
        knowledge making me more open to new oppurtunities.
      </p>
      <br/>
      <h3>Career Ambitions</h3>
      <p>
        Short term my plan is to absorb and develop my knowledgeas much as possible whilst still undertaking my
        reskilling oppurtunity. Within the near future I would be looking to secure a tech based role where I can
        use my learning and actively implement this into a working environment. Being able to make a positive contirbution
        and learning the workplace infrastructure.
        <br />
        <br />
        Long term I am looking to become profficient in a range of different skills and applications used within software
        engineering. I would want to be pushing myself to becoming a mentor or team lead to be able to support other engineers
        and to be able to provide a more positive impact within a workplace.
      </p>

      <div className="worklife-container">
        <div className="worklife-content">
          <h3>My Techstack</h3>
          <Slideshow images={images} />
        </div>
      </div>
    </div>
  );
};

export default WorkLife;


