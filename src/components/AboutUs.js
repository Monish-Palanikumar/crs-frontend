import React from 'react';
// import { Link } from 'react-router-dom';

function AboutUs() {
	return (
		<div className='aboutUs container mt-5'>
			<h1>Renting cars, Made easier</h1>
			<h3 className='mt-3'>Now rent cars at your convinience !!</h3>
			<div className='row mt-4'>
				<div className='works-step'>
					<div>1</div>
					<p>Choose the car model you need and the number of cars needed.</p>
				</div>
				<div className='works-step'>
					<div>2</div>
					<p>Select the number of days.</p>
				</div>
				<div className='works-step'>
					<div>3</div>
					<p>Book your ride and enjoy your journey !</p>
				</div>
			</div>
		</div>
	)
}

export default AboutUs
