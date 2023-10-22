'use client'

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useEffect } from 'react';

const Map = () => {
	const mapContainerStyle = {
		width: '100%',
		height: '600px',
		marginTop: '7em',
	};
	
	const center = {
		lat: 42.363444, // Latitude of your map center
		lng: -71.125154, // Longitude of your map center
	};

	const markers = [
		{ lat: 42.353425, lng: -71.085361 }, // Marker 1
		{ lat: 42.353060, lng: -71.104463 }, // Marker 2
		{ lat: 42.366948, lng: -71.116715 }, // Marker 3
		{ lat: 42.369872, lng: -71.131877 }, // Marker 4
		{ lat: 42.358522, lng: -71.162909 }, // Marker 5
	];

	const mapOptions = {

		// mapTypeId: 'satellite', // Set the map type to satellite view
		styles: [
		  {
			featureType: 'poi',
			elementType: 'labels',
			stylers: [{ visibility: 'off' }],
		  },
		  {
			featureType: 'transit',
			elementType: 'labels',
			stylers: [{ visibility: 'off' }],
		  },
		  {
			featureType: 'road',
			elementType: 'labels',
			stylers: [{ visibility: 'off' }],
		  },
		],
	  };

	return (
		<LoadScript googleMapsApiKey="AIzaSyAteY9Km-IWhxfhogo_e5bYpSeGcFsEozE">
			<GoogleMap
				mapContainerStyle={mapContainerStyle}
				center={center}
				zoom={13} // Adjust the zoom level as needed
				options={mapOptions}
			>
				{markers.map((position, index) => (
					<Marker key={index} position={position} />
				))}

				{markers.map((position, index) => (
					<Marker key={index} position={position} />
				))}
			</GoogleMap>
		</LoadScript>
	);
};

export default Map;
// import Bubble from './Bubble'

// import styles from './Navbar.module.css'

// const Map = () => {
// 	const bubbleData = [
// 		{ id: 1, top: '1000px', left: '200px', data: { /* Your bubble data */ } },
// 		{ id: 2, top: '1500px', left: '300px', data: { /* Your bubble data */ } },
// 		// Add more bubble data with different positions
// 	]

// 	return (
// 		<div >
// 			<img className={styles.map} src='/cambridge.png' alt='map' />
// 			{bubbleData.map((bubble) => {
// 				<Bubble
// 					className={styles.bubble}
// 					key={bubble.id}
// 					data={bubble.data}
// 					style={{ top: bubble.top, left: bubble.left }}
// 				/>
// 			})}
// 		</div>
// 	)
// }


// export default Map