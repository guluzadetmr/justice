import React from "react";
import styles from "./SectionFive.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";

const SectionFive = () => {
  return (
    <div className={styles.sectionFive}>
      <div className={styles.fiveContainer}>
        <div className={styles.fiveTop}>
          <h4>
            More <span>Expertise</span>
          </h4>
        </div>
        <div className={styles.fiveBoss}>
        <div className={styles.card}>
            <FontAwesomeIcon icon={faSuitcase} className={styles.fiveIcon} />
            <h1>Labor and Employment</h1>
            <p>
              Separated they live in. Separated they live in Bookmarksgrove
              right at the coast of the Semantics, a large language ocean.
            </p>
            <nav>
              <ul>
                <li>
                  <a href="">Learn More </a><FontAwesomeIcon icon={faRightLong}  className={styles.iconRight}/>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.card}>
            <FontAwesomeIcon icon={faSuitcase} className={styles.fiveIcon} />
            <h1>Labor and Employment</h1>
            <p>
              Separated they live in. Separated they live in Bookmarksgrove
              right at the coast of the Semantics, a large language ocean.
            </p>
            <nav>
              <ul>
                <li>
                  <a href="">Learn More </a><FontAwesomeIcon icon={faRightLong}  className={styles.iconRight}/>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.card}>
            <FontAwesomeIcon icon={faSuitcase} className={styles.fiveIcon} />
            <h1>Labor and Employment</h1>
            <p>
              Separated they live in. Separated they live in Bookmarksgrove
              right at the coast of the Semantics, a large language ocean.
            </p>
            <nav>
              <ul>
                <li>
                  <a href="">Learn More </a><FontAwesomeIcon icon={faRightLong}  className={styles.iconRight}/>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.card}>
            <FontAwesomeIcon icon={faSuitcase} className={styles.fiveIcon} />
            <h1>Labor and Employment</h1>
            <p>
              Separated they live in. Separated they live in Bookmarksgrove
              right at the coast of the Semantics, a large language ocean.
            </p>
            <nav>
              <ul>
                <li>
                  <a href="">Learn More </a><FontAwesomeIcon icon={faRightLong}  className={styles.iconRight}/>
                </li>
              </ul>
            </nav>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
