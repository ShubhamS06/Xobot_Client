import React from "react";
import compStyles from "./connect.module.css";

function ConnectToolsSection({ styles }) {
  return (
    <div className={compStyles.connectParent}>
      <div className={compStyles.rectangleParent21}>
        <div className={styles.sectionHeader}>
          <b className={styles.sectionMainHeading}>Connect to tools you use</b>
          <div className={styles.sectionSubHeading}>
            Within a Couple of Steps your AI Voice Bot is ready to be used.
          </div>
        </div>

        <img className={compStyles.toolImage} src="/connect-tools.svg" alt="" />
      </div>
    </div>
  );
}

export default ConnectToolsSection;
