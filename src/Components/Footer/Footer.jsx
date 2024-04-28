import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketballBall } from '@fortawesome/free-solid-svg-icons'; 
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerAbout}>
          <div className={styles.footerAboutNav}>
            <p>Home</p>
            <nav>
              <ul>
                <li>
                  <a href="" >About us</a>
                  <a href="">Practice Area</a>
                  <a href="">Services</a>
                  <a href="">Attorneys</a>
                  <a href="">Terms</a>
                  <a href="">Privacy</a>
                </li>
              </ul>
            </nav>
    
          </div>
          <div className={styles.footerAboutNav}>
            <p>Practice Area</p>
            <nav>
              <ul>
                <li>
                  <a href="">Banking Law</a>
                  <a href="">Commercial Law</a>
                  <a href="">Corporate Law</a>
                  <a href="">Family Law</a>
                  <a href="">Media Law</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.footerAboutNav}>
            <p>Services</p>
            <nav>
              <ul>
                <li>
                  <a href="">Labor Law</a>
                  <a href="">Employment</a>
                  <a href="">Property Law</a>
                  <a href="">Prosecution</a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <div className={styles.footerAboutNav}>
              <p>Contact</p>
              <p> 43 Raymouth Rd. Baltemoer, London 3910</p>
              <nav>
                <ul>
                  <li>
                    <a href="">+1(123)-456-7890</a>
                    <a href="">+1(123)-456-7890</a>
                    <a href="">info@mydomain.com</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={styles.footerIcon}>
                
              <p>Connect</p>
              <FontAwesomeIcon icon={faBasketballBall} className={styles.footerIcons} />
              <FontAwesomeIcon icon={faBasketballBall} className={styles.footerIcons} />
              <FontAwesomeIcon icon={faBasketballBall} className={styles.footerIcons} />
              <FontAwesomeIcon icon={faBasketballBall} className={styles.footerIcons} />
              <FontAwesomeIcon icon={faBasketballBall} className={styles.footerIcons} />

              
            </div>
          </div>
        </div>
        <div className={styles.footerEnd}>
          <h6>
            Copyright ©2024 All rights reserved | This template is made with ❤️
            by <span>𝙏𝙖𝙢𝙖𝙧𝙖</span>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
