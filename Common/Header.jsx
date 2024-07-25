import React from 'react'

function Header({styles}) {
    return (
        <div className={styles.header}>
            <div className={styles.headerInner}>
                <img className={styles.frameChild12} alt="" src="/group-15@2x.png" />
            </div>
            <div className={styles.menu}>
                <li className={styles.discord}>For Business</li>
                <li className={styles.discord}>Pricing</li>
                <li className={styles.discord}>Contact</li>
                <li className={styles.discord}>Blogs</li>
            </div>
            <div className={styles.cta}>
                {/* <div className={styles.signInWrapper}> */}
                    <button className={`${styles.signUpWrapper} ${styles.platform}`}>Sign In</button>
                {/* </div> */}
                {/* <div className={styles.signUpWrapper}> */}
                    <button className={`${styles.signUpWrapper} ${styles.platform}`}>Sign Up</button>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Header