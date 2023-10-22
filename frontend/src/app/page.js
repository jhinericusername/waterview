'use client'
import { motion } from 'framer-motion'
import { createContext, useState, useEffect, useContext } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdOutlineLocationOn } from 'react-icons/md'
import { MyContext } from './layout.js'
import Link from 'next/link.js'
import styles from './Home.module.css'

const Home = () => {
	// const navigate = useNavigate();
	const { location, setLocation } = useContext(MyContext)
	// const Context = createContext()
	// const [isFirstMount, setIsFirstMount] = useState(false);

	// useEffect(() => {
	//     setIsFirstMount(true);
	// }, []);

	// function handleSearch(e) {
	//     e.preventDefault()
	//     // setTimeout(() => {
	//     //     navigate('/dashboard');
	//     //   }, 3000);
	//     navigate('/dashboard');
	// }

	const handleChange = (e) => {
		e.preventDefault()
		setLocation(e.target.value) // get provided "location"
		console.log(location)
	}

	return (
		<div className={styles.body}>
			<div className={styles.heroContainer}>
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<div className={styles.tagLine}>
						<div>
							<div className={styles.water}>Water's Health,</div>
							<div className={styles.visible}>Simply Visible.</div>
						</div>
						<div className={styles.subtitle1}>Find water health for your city.</div>
						<div className={styles.actions}>
							<div className={styles.search}>
								<AiOutlineSearch className={styles.searchIcon} />
								<input type='text' className={styles.searchBar}
									onChange={handleChange} placeholder="Enter Area" />
								<Link href='/dashboard'>
									<button className={styles.searchButton} >
										<span>Search</span>
									</button>
								</Link>
							</div>
							<div className={styles.location}>
								<span>or <MdOutlineLocationOn /></span>
								<Link href='/dashboard'>
									<span className={styles.locationBridge} >Use my current location</span>
								</Link>
							</div>
						</div>

					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<img src='/waterGraphic.png' alt='water graphic' className={styles.waterGraphic} />
				</motion.div>
			</div>
		</div>
	)
}

export default Home

// import Image from 'next/image'

// export default function Home() {
// 	return (
// 		<div>

// 		</div> 
//   )
// }
