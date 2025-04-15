import React from 'react';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Footer.css";


function Footer() {
  return( 
  <div className="footer">
    <div className="socialMedia">
        <a href="https://www.linkedin.com/in/kamaloissa/"><LinkedInIcon /></a>
        <a href="https://mail.google.com/mail/?view=cm&to=kamalissa96@gmail.com"><EmailIcon /></a>
        <a href="https://github.com/xardbazz"><GithubIcon /></a>
    </div>
    <p>&copy; 2024 kamalissa.com</p>
  </div>
  );
}

export default Footer