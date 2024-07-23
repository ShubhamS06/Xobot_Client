import React from 'react'

function Header({styles}) {
    return (
        <div className={styles.header}>
            <div className={styles.headerInner}>
                <img className={styles.frameChild12} alt="" src="/group-15@2x.png" />
            </div>
            <div className={styles.menu}>
                <div className={styles.discord}>For Business</div>
                <div className={styles.discord}>Pricing</div>
                <div className={styles.discord}>Contact</div>
                <div className={styles.discord}>Blogs</div>
            </div>
            <div className={styles.cta}>
                <div className={styles.signInWrapper}>
                    <div className={styles.platform}>Sign In</div>
                </div>
                <div className={styles.signUpWrapper}>
                    <div className={styles.platform}>Sign Up</div>
                </div>
            </div>
        </div>
    )
}

export default Header