import React, { useState } from "react";

function Header({ styles }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.headerInner}>
        <img className={styles.headerBrandIcon} alt="" src="/group-15@2x.png" />
      </div>
      <div onClick={() => setShowMenu(!showMenu)} className={styles.togglerRoot} data-show={showMenu}>
        <button className={styles.menuToggler}></button>
      </div>

      <div className={styles.headerMenu} data-show={showMenu}>
        <li className={styles.menuItem}>For Business</li>
        <li className={styles.menuItem}>Pricing</li>
        <li className={styles.menuItem}>Contact</li>
        <li className={styles.menuItem}>Blogs</li>
      </div>
      <div className={styles.headerAuthGroup} data-show={showMenu}>
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
  );
}

export default Header;
