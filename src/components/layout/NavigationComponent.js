import React from 'react'

function NavigationComponent() {
	return (
		<nav className='container'>
			<div className="row">
				<img src="images/icon.png" alt="" className="logo"></img>
				<ul className="main-nav">
					<li><a href="http://localhost:3000/">About Us</a></li>
					<li><a href="http://localhost:3000/sample">Signup</a></li>
					<li><a href="http://localhost:3000/login">Login</a></li>
				</ul>
			</div>
		</nav>
	)
}

export default NavigationComponent
