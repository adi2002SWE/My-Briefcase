import React from "react";
import "./ContactBar.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const ContactBar = () => {
  return (
    <div className="contact_bar_wrapper">
      <div className="contact_bar">
        <a
           href="https://www.linkedin.com/in/aditya-verma-3741291b7"
          target="_blank"
          className="contact_bar_icon"
          rel="noreferrer"
        >
         <LinkedInIcon />
        </a>
        <a
          href="https://github.com/adi2002SWE"
          target="_blank"
          className="contact_bar_icon"
          rel="noreferrer"
        >
         <GitHubIcon />
        </a>
        <a
          href="https://www.instagram.com/verma_complicated_boy"
          target="_blank"
          className="contact_bar_icon"
          rel="noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://twitter.com/AdityaV51270627"
          target="_blank"
          className="contact_bar_icon"
          rel="noreferrer"
        >
          <TwitterIcon />
        </a>
        <div className="contact_bar_line"></div>
      </div>
      <div className="contact_bar">
        <a href="mailto:avermaav2002@gmail.com" className="contact_bar_email">
          avermaav2002@gmail.com
        </a>
        <div className="contact_bar_line"></div>
      </div>
    </div>
  );
};

export default ContactBar;
