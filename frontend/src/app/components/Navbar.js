"use client"
// import { useNavigate } from 'react-router-dom'
import Link from "next/link";
import { useRouter } from 'next/navigation'
import styles from './Navbar.module.css'

const Navbar = () => {
    const router = useRouter()

    // function goHome(e) {
    //     e.preventDefault();
    //     navigate('/')
    // }

    function goWorkspace(e) {
        e.preventDefault()
        navigate('/workspace')
    }

    return (
        <div>
            {/* title */}

            <nav className={styles.nav}>
                <ul>
                    <Link href='/'>
                        <li className={styles.title}>
                            <div><span className={styles.water}>Water</span><span className={styles.view}>View</span></div>
                        </li>
                    </Link>
                    <Link href='/workspace'>
                        <li className={styles.subtitle}>
                            Workspace
                        </li>
                    </Link>
                    <Link href='/dashboard'>
                        <li className={styles.subtitle}>
                            About Us
                        </li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar