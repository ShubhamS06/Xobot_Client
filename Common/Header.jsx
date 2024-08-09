import React, { useEffect, useState } from "react";

function Header({ styles }) {
  const ADMIN_URL = `${process.env.NEXT_PUBLIC_ADMIN_URL}`;
  const [showMenu, setShowMenu] = useState(false);
  const [clientLoaded, setClientLoaded] = useState(false);
  const [showLoggedIn, setShowLoggedIn] = useState(false);

  const getCookie = (cname) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  useEffect(() => {
    setClientLoaded(true);
  }, [])

  useEffect(() => {
    if(clientLoaded){
      var isLoggedIn = getCookie('XobotLoggedIn');
      if(isLoggedIn === 'true'){
        setShowLoggedIn(true);
      } 
    }
  }, [clientLoaded])
  

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
        <div className={styles.headerAuthGroup} hidden={showLoggedIn}>
          <a
            className={`${styles.signUpWrapper} ${styles.footerLinksHeader}`}
            href={ADMIN_URL}
          >
            Sign In
          </a>
          <a
            className={`${styles.signUpWrapper} ${styles.footerLinksHeader}`}
            href={ADMIN_URL}
          >
            Sign Up
          </a>
        </div>
        <div className={styles.headerAuthGroup} hidden={!showLoggedIn}>
          <a
            className={`${styles.signUpWrapper} ${styles.footerLinksHeader}`}
            href={ADMIN_URL}
          >
            Dashboard
          </a>
          <a
            className={`${styles.signUpWrapper} ${styles.footerLinksHeader}`}
            href={`${ADMIN_URL}/logout`}
          >
            Sign Out
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
