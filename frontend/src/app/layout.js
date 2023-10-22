"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/app/components/Navbar'

const inter = Inter({ subsets: ['latin'] })
import { createContext, useState } from 'react';

export const MyContext = createContext();

// export const metadata = {
// 	title: 'WaterView',
// 	description: 'Effortlessly harness data from various sources and time periods, gaining real-time insights that facilitate intelligent decision-making and heightened environmental consciousness.'
// }

export default function RootLayout({ children }) {
	const [ location, setLocation ] = useState("Cambridge");

	return (
		<MyContext.Provider value={{ location, setLocation }}>
			<html lang="en">
				<body className={inter.className}>
					<Navbar />
					{children}
				</body>
			</html>
		</MyContext.Provider>

	)
}
