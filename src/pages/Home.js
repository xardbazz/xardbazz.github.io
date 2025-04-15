
import React, { useState } from "react"; // Added useState import
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css"


function Home() {
  const [imageError, setImageError] = useState(false);
  
  return (
    <div className= "home">
      <div className = "about">
        <div className="wrapper">
            {imageError ? (
              <div className="image-fallback">Error loading image</div>
            ) : (
              <img 
                className="image--cover" 
                src={process.env.PUBLIC_URL + "/images/Personal.PNG"} 
                alt="Kamal Issa"
                onError={() => setImageError(true)}
              />
            )}
          </div>
          <h2>Hi, my name is kamal</h2>
          <div className="prompt">
            <p>
              A software developer with a passion for learning and creating
            </p>
              <a href="https://www.linkedin.com/in/kamal-issa-075636204/"><LinkedInIcon /></a>
              <a href="https://mail.google.com/mail/u/1/#inbox?compose=CllgCJvqsPsFrLtsFCqjLXGbnWkMxFbtlCsdVMbvqpZscVNlhLRkjBffTZGZlfCssZNZgLSmBKg"><EmailIcon /></a>
              <a href="https://github.com/xardbazz"><GithubIcon /></a>
          </div>
        </div>
        <div className = "skills">
          <h1>Skills</h1>
            <ol className = "list">
              <li className = "item">
                <h2>Front-End</h2>
                <span>
                  HTML, CSS, React Native, BootStrap, MaterialUI, Yarn, JavaScript,
                  StyledComponents, jQuery
                  </span>
              </li>
              <li className = "item">
                <h2>Back-End</h2>
                <span>
                  C++, C#, .NET, MySQL, PHP, Java, Python, Node.js
                </span>
              </li>
              <li className = "item">
                <h2>Softwares</h2>
                <span>
                  Windows, Adobe Full, Microsoft Office, Android, Microsoft Visual Studio,
                  Android Studio, Sublime Text, and various social media platforms
                </span>
              </li>
            </ol>
        </div>
    </div>
  )
}

export default Home