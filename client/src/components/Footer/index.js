import "./style.css";
import Typography from "@mui/material/Typography";

import React from "react";

// Icon imports
import {
  AiOutlineHome,
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id='footer'>
      <div className='footerContainer'>
        <div className='leftFooter'>
          <div className='location'>
            <AiOutlineHome
              size={20}
              style={{ color: "#d97777", marginRight: "2rem" }}
            />
            <Typography variant='body1' id='footer-body1'>
              United States
            </Typography>
          </div>
          <div className='phone'>
            <a href='tel:17728342342' className='left-details'>
              <AiOutlinePhone
                size={20}
                style={{ color: "#d97777", marginRight: "2rem" }}
              />
              <Typography variant='body1' id='footer-body1'>
                1 (772) 834 2342
              </Typography>
            </a>
          </div>
          <div className='email'>
            <a
              href='mailto:mary.panda.jackson@gmail.com'
              className='left-details'
            >
              <AiOutlineMail
                size={20}
                style={{ color: "#d97777", marginRight: "2rem" }}
              />
              <Typography variant='body1' id='footer-body1'>
                mary.panda.jackson@gmail.com
              </Typography>
            </a>
          </div>
        </div>
        <div className='rightFooter'>
          <div className='socialIcons'>
            <Link to={`https://www.linkedin.com/in/404pandas`}>
              <AiOutlineLinkedin
                size={20}
                style={{ color: "#d97777", marginRight: "2rem" }}
              />
            </Link>
            <Link to={`https://www.maryelenius.com`}>
              <FiExternalLink
                size={20}
                style={{ color: "#d97777", marginRight: "2rem" }}
              />
            </Link>
            <Link to={`https://www.github.com/404pandas`}>
              <AiOutlineGithub
                size={20}
                style={{ color: "#d97777", marginRight: "2rem" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
