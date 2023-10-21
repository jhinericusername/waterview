import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { createContext, useState, useEffect, useContext } from 'react'
import { MyContext } from '../App'

const Dashboard = () => {
    const navigate = useNavigate()
    const { location, setLocation } = useContext(MyContext)

    function handleBack(e) {
        e.preventDefault()
        navigate('/')
    }

    return (
        <div>
            <Navbar/>
            <div>{location}</div>
            <div className='map'>
                map goes here
            </div>
        </div>
    )
}

export default Dashboard