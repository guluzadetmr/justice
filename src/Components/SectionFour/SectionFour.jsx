import React from "react";
import styles from "./SectionFour.module.css";
import companyLogo from "../../About/images/Screenshot 2024-04-28 194904.jpg";
import companyLogoTwo from "../../About/images/Screenshot 2024-04-28 195011.jpg";
import companyLogoThree from "../../About/images/Screenshot 2024-04-28 195036.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const SectionFour = () => {
  return (
    <div className={styles.sectionFour}>
      <div className={styles.fourContainer}>
        <div className={styles.fourTop}>
          <h4>
            <span>Happy </span> Clients
          </h4>
        </div>
        <div className={styles.fourBoss}>
        <FontAwesomeIcon icon={faAngleLeft}  className={styles.fourIcon}/>
          <img src={companyLogo} alt="" />
          <img src={companyLogoTwo} alt="" />
          <img src={companyLogoThree} alt="" />
          <FontAwesomeIcon icon={faChevronRight}  className={styles.fourIcon}/>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
