import React from 'react'
import AboutUs from './AboutUs'
import FooterComponent from './layout/FooterComponent'
import NavigationComponent from './layout/NavigationComponent'

function Landing() {
	return (
		<div className='landing text-light'>
			<NavigationComponent />
			<AboutUs />
			<FooterComponent />
		</div>
	)
}

export default Landing
