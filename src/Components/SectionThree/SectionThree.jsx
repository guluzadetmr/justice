import React from "react";
import styles from "./SectionThree.module.css";

const SectionThree = () => {
  return (
    <div className={styles.sectionThree}>
      <div className={styles.sectionContainer}>
        <div className={styles.years}>
          <h1>
            <span>50 Years</span> of Experience in Various Cases
          </h1>
        </div>
        <div className={styles.clientsSec}>
          <div>
            <h1>
              <span>90</span>+
            </h1>
            <h4>Awards</h4>
            <p>
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics.
            </p>
          </div>
          <div>
            <h1>
              <span>2k</span>+
            </h1>
            <h4>Clients</h4>
            <p>
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics.
            </p>
          </div>
        </div>
        <div className={styles.clientsSec}>
          <div>
            <h1>
              <span>3k</span>+
            </h1>
            <h4>Cases Wins</h4>
            <p>
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics.
            </p>
          </div>
          <div>
            <h1>
              <span>200</span>+
            </h1>
            <h4>Attorneys</h4>
            <p>
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
