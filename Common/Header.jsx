import React from 'react'

function Header({ styles }) {
    return (
        <div className={styles.header}>
            <div className={styles.headerInner}>
                <img className={styles.headerBrandIcon} alt="" src="/group-15@2x.png" />
            </div>
            <div className={styles.togglerRoot}>
                <button className={styles.menuToggler}></button>
            </div>

            <div className={styles.headerMenu}>
                <li className={styles.menuItem}>For Business</li>
                <li className={styles.menuItem}>Pricing</li>
                <li className={styles.menuItem}>Contact</li>
                <li className={styles.menuItem}>Blogs</li>
            </div>
            <div className={styles.cta}>
                <button className={`${styles.signUpWrapper} ${styles.platform}`}>Sign In</button>
                <button className={`${styles.signUpWrapper} ${styles.platform}`}>Sign Up</button>
            </div>
        </div>
    )
}

export default Header