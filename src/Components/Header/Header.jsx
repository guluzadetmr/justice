import React from 'react'
import styles from "./Header.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
      <div className={styles.header}>
        <div className={styles.container}>
          <h1>
             Justice<span>.</span>
          </h1>
          <div className={styles.navBar}>
            <a  href="" className={styles.a}>
              HOME
            </a>
            <a href="" className={styles.a}>
              Practice Areas
            </a>
            <a href="" className={styles.a}>
              Services
            </a>
            <a href="" className={styles.a}>
              Attorneys
            </a>
            <a href="" className={styles.a}>
              About
            </a>
            <a href="" className={styles.a}>
              Contact Us
            </a>
          </div>
        </div>
        <FontAwesomeIcon icon={faBurger} className={styles.icon}/>

      </div>
    );
  };
  
  export default Header;

