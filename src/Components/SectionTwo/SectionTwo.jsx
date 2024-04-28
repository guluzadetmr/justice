// import React from "react";
// import styles from "./SectionTwo.module.css";
// const SectionTwo = () => {
//   return (
//     <div className={styles.sectionTwo}>
//       <div className={styles.container}>
//         <div className={styles.description}>
//           <h1>
//             Our <span>Practice Areas</span>
//           </h1>
//           <p>
//             Far far away, behind the word mountains, far from the countries
//             Vokalia and Consonantia, there live the blind texts. Separated they
//             live in.
//           </p>
//           <p>
//             Separated they live in Bookmarksgrove right at the coast of the
//             Semantics, a large language ocean.
//           </p>
//           <button>Learn More</button>
//         </div>

//         <div className={styles.right}>

//         <div className={styles.options}>
//           <div className={styles.icons}>
//             <i class="fa-solid fa-suitcase"></i>
//           </div>
//           <div className={styles.optionsec}>
//             <h2>Banking and Finance Law</h2>
//             <p>
//               Far far away, behind the word mountains, far from the countries
//             </p>
//           </div>
//           </div>

//           <div className={styles.options}>
//           <div className={styles.icons}>
//             <i class="fa-solid fa-people-group"></i>
//           </div>
//           <div className={styles.optionsec}>
//             <h2>Commercial Law</h2>
//             <p>
//               Far far away, behind the word mountains, far from the countries
//             </p>
//           </div>
//         </div>

//           <div className={styles.options}>
//           <div className={styles.icons}>
//             <i class="fa-solid fa-people-arrows"></i>
//           </div>
//           <div className={styles.optionsec}>
//             <h2>Corporate Law</h2>
//             <p>
//               Far far away, behind the word mountains, far from the countries
//             </p>
//           </div>
//           </div>

//           <div className={styles.options}>
//           <div className={styles.icons}>
//             <i class="fa-solid fa-users-viewfinder"></i>
//           </div>
//           <div className={styles.optionsec}>
//             <h2>Criminal Law</h2>
//             <p>
//               Far far away, behind the word mountains, far from the countries
//             </p>
//           </div>
//           </div>
//         </div>

//           <div className={styles.more}>
//             <a href="https://preview.colorlib.com/theme/justice/practice-areas.html">More Practice Areas</a>
//             <i class="fa-solid fa-arrow-right"></i>
//           </div>
//       </div>
//     </div>
//   );
// };

// export default SectionTwo;
import React from "react";
import styles from "./SectionTwo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faPersonChalkboard } from "@fortawesome/free-solid-svg-icons";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
const SectionTwo = () => {
  return (
    <div className={styles.sectionTwo}>
      <div className={styles.container}>
        <div className={styles.description}>
          <h1>
            Our <span>Practice Areas</span>
          </h1>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in.
          </p>
          <p>
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.
          </p>
          <button>Learn More</button>
        </div>
        <div className={styles.options}>
          <div className={styles.optionsec}>
            <div>
              <FontAwesomeIcon icon={faEnvelope} className={styles.iconsss} />
              <div>
                <h2>Banking and Finance Law</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries
                </p>
              </div>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faPeopleGroup}
                className={styles.iconsss}
              />
              <div>
                <h2>Banking and Finance Law</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries
                </p>
              </div>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faPersonChalkboard}
                className={styles.iconsss}
              />
              <div>
                <h2>Banking and Finance Law</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries
                </p>
              </div>
            </div>
            <div>
              <FontAwesomeIcon icon={faBullseye} className={styles.iconsss} />
              <div>
                <h2>Banking and Finance Law</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries
                </p>
              </div>
            </div>
            <nav>
              <ul className={styles.more}>
                <li>
                  <a href="">
                    More Practice Areas
                    <FontAwesomeIcon icon={faRightLong} />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          {/* <div className={styles.optionsec}>
            <i class="fa-solid fa-people-group"></i>
            <h2>Commercial Law</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
            </p>
          </div> */}
          {/* <div className={styles.optionsec}>
            <i class="fa-solid fa-people-arrows"></i>
            <h2>Corporate Law</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
            </p>
          </div> */}
          {/* <div className={styles.optionsec}>
            <i class="fa-solid fa-users-viewfinder"></i>
            <h2>Criminal Law</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
            </p>
          </div>
          <div className={styles.more}>
            <a href="https://preview.colorlib.com/theme/justice/practice-areas.html">
              More Practice Areas
            </a>
            <i class="fa-solid fa-arrow-right"></i>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
