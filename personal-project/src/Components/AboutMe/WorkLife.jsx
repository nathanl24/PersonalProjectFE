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

const WorkLife= () => {
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
            <div className="worklife-container">
         <div className="worklife-content">
            <Slideshow images={images} />
          </div>
          </div>
        );
      }; 

export default WorkLife;


