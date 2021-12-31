import React, { useState, useEffect } from 'react';
import axios from "axios";

function CustomerDashboard() {
	const [cars, setCars] = useState([]);
	useEffect(() => {
		axios.get(`http://localhost:5000/car/getAllCars`)
			.then(res => {
				setCars(res.data);
			})
			.catch(error => console.log(error));
	}, []);
	return (
		<span>
			<h1 className='text-center'>Customer Dashboard</h1>
			{
				cars.map(car => (
					<div key={car.cid} className='card'>
						<div className='card-body'>
							<h5 className='card-title'>{car.cname}</h5>
							<p className="card-text">Type: {car.ctype}</p>
							<button className='btn btn-primary'>Book</button>
						</div>
					</div>
				))
			}
		</span>
	)
}

export default CustomerDashboard
