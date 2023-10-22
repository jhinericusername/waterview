import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useEffect, useContext, useRef, useState } from 'react'
import { MyContext } from '../App'
import { CategoryBar, Card, Flex, Text, LineChart, Title } from "@tremor/react";
import { Accordion, AccordionHeader, AccordionBody, AccordionList } from "@tremor/react";
import Map from '../components/Map'
import DataBar from '../components/DataBar'
import CoolAccordion from '../components/CoolAccordion'
import styles from './Dashboard.module.css'
import style from './Home.module.css'

const Dashboard = () => {
    const navigate = useNavigate()
    const { location, setLocation } = useContext(MyContext)
    const [newLocation, setNewLocation] = useState("")
    const [data, setData] = useState([]);

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

    function componentDidMount() {
        axios.get("/api/data") // Assuming your server is running on the same host and port
            .then((response) => {
                this.setState({
                    oldData: response.data.oldData,
                    newData: response.data.newData,
                });
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }

    var oldNumbers = [];
    var newNumbers = [];

    const currentData = [
        {
            "site_no": 1104455,
            "datetime": "7/2/2023",
            "Mean Water Temp (C)": 18.4,
            "Mean Specific Conductance": 941,
            "Turbidity (FNU)": 7.5,
            "pH": 7.155038079003267
        },
        {
            "site_no": 1104455,
            "datetime": "7/8/2023",
            "Mean Water Temp (C)": 16.8,
            "Mean Specific Conductance": 1400,
            "Turbidity (FNU)": 0.3,
            "pH": 6.823724090072246
        }
    ]

    oldNumbers = ["7/2/2023", 18.4, 941, 7.5, 7.155038079003267]
    newNumbers = ["7/8/2023", 16.8, 1400, 0.3, 6.823724090072246]

    return (
        <div>
            <Navbar />

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
                <Map />
                {/* </div> */}

                <div className={styles.dataContainer}>
                    <div className={styles.bottomInfo}>
                        <div className={styles.titleText}>
                            Final Comprehensive Water Index: <span className={styles.green}>84%</span>
                        </div>
                        <div className={styles.improvement}>
                        </div>
                        {/* <Card>
                            <Title>Export/Import Growth Rates (1970 to 2021)</Title>
                            <LineChart
                                className="mt-6"
                                data={chartdata}
                                index="year"
                                categories={["Export Growth Rate", "Import Growth Rate"]}
                                colors={["emerald", "gray"]}
                                valueFormatter={valueFormatter}
                                yAxisWidth={40}
                            />
                        </Card> */}
                    </div>
                    <div className={styles.topInfo}>
                        <div className={styles.before}>
                        <div className={styles.beforeeee}>Before Event</div>

                            {/* <div>Before</div> */}
                            <div className={styles.dataBar}>
                                <DataBar title="Mean Water Temperature (C) (7/2)" values={[10, 20, 30, 40]}
                                    colors={["rose", "lime", "green", "rose"]} marker={18.4} />
                            </div>
                            <div className={styles.dataBar}>
                                <DataBar className={styles.dataBar} title="Mean Specific Conductance (7/2)" values={[600, 900, 1200, 1500]}
                                    colors={["emerald", "lime", "orange", "rose"]} marker={941} />
                            </div>
                            <div className={styles.dataBar}>
                                <DataBar className={styles.dataBar} title="Turbidity (normalized) (FNU) (7/2)" values={[0, 2, 4, 8]}
                                    colors={["emerald", "yellow", "orange", "rose"]} marker={0.3} />
                            </div>
                            <div className={styles.dataBar}>
                                <DataBar className={styles.dataBar} title="Mean pH (7/2)" values={[0, 4, 7, 10, 14]}
                                    colors={["rose", "lime", "green", "rose"]} marker={7.16} />
                            </div>

                        </div>
                        <div className={styles.after}>
                        <div className={styles.afterrrr}>After Event</div>

                        {/* <div>After</div> */}

                            <div className={styles.dataBar}>
                                <DataBar className={styles.dataBar} title="Mean Water Temperature (C) (7/8)" values={[10, 20, 30, 40]}
                                    colors={["rose", "lime", "green", "rose"]} marker={16.8} />
                            </div>
                            <div className={styles.dataBar}>
                                <DataBar className={styles.dataBar} title="Mean Specific Conductance (7/8)" values={[600, 900, 1200, 1500]}
                                    colors={["emerald", "lime", "orange", "rose"]} marker={1400} />
                            </div>
                            <div className={styles.dataBar}>
                                <DataBar className={styles.dataBar} title="Turbidity (normalized) (FNU) (7/8)" values={[0, 2, 4, 8]}
                                    colors={["emerald", "yellow", "orange", "rose"]} marker={0.3} />
                            </div>
                            <div className={styles.dataBar}>
                                <DataBar className={styles.dataBar} title="Mean pH (7/8)" values={[0, 4, 7, 10, 14]}
                                    colors={["rose", "lime", "green", "rose"]} marker={6.82} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.metrics}>
                        <div><CoolAccordion title="Turbidity" content='Cloudiness/particulate ratio of water. Clear water is healthier for aquatic life.'/></div>
                        <div><CoolAccordion title='Conductance' content='Ability of water to conduct electric current. Elevated conductance indicates salinity issues.'/></div>
                        <div><CoolAccordion title='Temperature' content='The warmth/coolness of water, affecting metabolism of aquatic life. Stable temperature crucial for growth.'/></div>
                        <div><CoolAccordion title="pH" content='Acidity/alkalinity of water. Balanced pH is crucial for health ecosystems.'/></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dashboard