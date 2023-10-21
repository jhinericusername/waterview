import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { createContext, useState, useEffect, useContext } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { MyContext } from '../App'
import styles from './Home.module.css'

const Home = () => {
    const navigate = useNavigate();
    const { location, setLocation } = useContext(MyContext)
    // const Context = createContext()
    // const [isFirstMount, setIsFirstMount] = useState(false);

    // useEffect(() => {
    //     setIsFirstMount(true);
    // }, []);
    function handleSearch(e) {
        e.preventDefault()
        navigate('/dashboard')
    }

    const handleChange = (e) => {
        e.preventDefault()
        setLocation(e.target.value) // get provided "location"
        console.log(location)
    }

    return (
        <div className={styles.body}>
            <Navbar />
            <div className={styles.heroContainer}>
                <motion.div
                    initial={{ opacity: 0, y: -30}}
                    animate={{ opacity: 1, y: 0}}
                    transition={{duration: 0.75}}
                >
                    <div className={styles.tagLine}>
                        <div>
                            <div className={styles.water}>Water's Health,</div>
                            <div className={styles.visible}>Simply Visible.</div>
                        </div>
                        <div className={styles.subtitle1}>Find water health for your city.</div>
                        <div className={styles.search}>
                            <AiOutlineSearch className={styles.searchIcon}/>
                            <input type='text' className={styles.searchBar} 
                                onChange={handleChange} placeholder="Enter Area" />
                            <button className={styles.searchButton} onClick={handleSearch}>
                                <span>Search</span>
                            </button>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.75}}
                >
                    <img src='/waterGraphic.png' alt='water graphic' className={styles.waterGraphic} />
                </motion.div>
            </div>
        </div>
    )
}

export default Home