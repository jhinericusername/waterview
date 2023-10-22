'use client'

import { motion } from 'framer-motion'
import { useEffect, useContext, useRef } from 'react'
import { MyContext } from '../layout.js'
// import { AiOutlineSearch } from 'react-icons/ai'
import Map from '../components/Map.js'
import { CategoryBar } from "@tremor/react";
import { useState } from 'react'

import styles from './Dashboard.module.css'
import style from '../Home.module.css'

const Page = () => {
    const { location, setLocation } = useContext(MyContext)
    const [newLocation, setNewLocation] = useState("")

    const data = useRef(null)

    function handleSearch(e) {
        e.preventDefault()
        // setTimeout(() => {
        //     navigate('/dashboard');
        // }, 3000);
        setLocation(newLocation)
        // window.location.reload()
    }

    const handleChange = (e) => {
        e.preventDefault()
        setNewLocation(e.target.value) // get provided "location"
        console.log(location)
    }

    const scrollToDivBelow = () => {
        // Use the scrollIntoView method to scroll to the div below
        data.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <div className={styles.largeContainer}>
                <div className={styles.search}>
                    {/* <AiOutlineSearch className={styles.searchIcon} /> */}
                    <input type='text' className={styles.searchBar}
                        onChange={handleChange} placeholder="Enter Area" />
                    <button className={styles.searchButton} onClick={handleSearch}>
                        <span>Search</span>
                    </button>
                </div>
                <div className={styles.container}>
                    <div className={styles.descriptor}>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.75 }}
                        >
                            <div className={styles.location}>
                                <div>Location: {location}</div>
                                <div className={styles.subtitle1}>Massachussetts, United States</div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.75 }}
                        >
                            <div className={styles.basicData}>
                                <div>
                                    Size: <span className={styles.gray}>40.7 km<sup>2</sup></span>
                                </div>
                                <div>
                                    Population: <span className={styles.gray}>117,090 (2022)</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* <div onClick={scrollToDivBelow}> */}
                {/* <Map /> */}
                {/* </div> */}

                <div className={styles.dataContainer}>
                    <div className={styles.topInfo}>
                        <div className={styles.dataBars}>
                            <CategoryBar
                                values={[40, 30, 20, 10]}
                                colors={["emerald", "yellow", "orange", "rose"]}
                                markerValue={62}
                                className="mt-3"
                            />
                        </div>
                        <div className={styles.bigNumber}>

                        </div>
                    </div>
                    <div className={styles.bottomInfo}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page