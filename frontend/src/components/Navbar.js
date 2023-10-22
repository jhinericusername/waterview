import React from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './Navbar.module.css'

const Navbar = () => {
    const navigate = useNavigate();

    function goHome(e) {
        e.preventDefault();
        navigate('/')
    }

    function goWorkspace(e) {
        e.preventDefault()
        navigate('/workspace')
    }

    return (
        <div>
            {/* title */}

            <nav className={styles.nav}>
                <ul>
                    <li className={styles.title} onClick={goHome}>
                        <div><span className={styles.water}>Water</span><span className={styles.view}>View</span></div>
                    </li>
                    <li className={styles.subtitle} onClick={goWorkspace}>
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