import { useContext, useMemo } from "react";

import { ChallengesContext } from "../contexts/ChallengesContext";

import styles from "../styles/components/ExperienceBar.module.css";

const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel = useMemo(
    () => Math.round((currentExperience * 100) / experienceToNextLevel),
    [currentExperience, experienceToNextLevel]
  );

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>

      <div>
        <div style={{ width: `${percentToNextLevel}%` }}></div>

        <span className={styles.currentExperience} style={{ left: "50%" }}>
          {currentExperience}xp
        </span>
      </div>

      <span>{experienceToNextLevel}xp</span>
    </header>
  );
};

export default ExperienceBar;
