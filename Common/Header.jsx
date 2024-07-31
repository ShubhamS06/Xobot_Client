import React, { useState } from "react";

function Header({ styles }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={styles.header} data-show={showMenu}>
      <div className={styles.headerInner}>
        <img className={styles.headerBrandIcon} alt="" src="/group-15@2x.png" />
      </div>
      <div
        onClick={() => setShowMenu(!showMenu)}
        className={styles.togglerRoot}
      >
        <button className={styles.menuToggler}></button>
      </div>

      <div className={styles.headerContent}>
        <div className={styles.headerMenu}>
          <li className={styles.menuItem}>For Business</li>
          <li className={styles.menuItem}>Pricing</li>
          <li className={styles.menuItem}>Contact</li>
          <li className={styles.menuItem}>Blogs</li>
        </div>
        <div className={styles.headerAuthGroup}>
          <button
            className={`${styles.signUpWrapper} ${styles.footerLinksHeader}`}
          >
            Sign In
          </button>
          <button
            className={`${styles.signUpWrapper} ${styles.footerLinksHeader}`}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
