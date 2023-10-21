import React from 'react'

import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div>
        {/* title */}
    
        <nav className={styles.nav}>
            <ul>
                <li className={styles.title}>
                    <div><span className={styles.water}>Water</span><span className={styles.view}>View</span></div>
                </li>
                <li className={styles.subtitle}>
                    Workspace
                </li>
                <li className={styles.subtitle}>
                    About Us
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar