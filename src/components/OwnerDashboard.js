import React, { useState, useEffect } from 'react';
import axios from "axios";

function OwnerDashboard() {
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
			<h1 className='text-center'>Owner Dashboard</h1>
			<div className='row'>
				{
					cars.map(car => (
						<div className="m-4">
							<span key={car.cid} className='card text-center'>
								<div className='card-body'>
									<h5 className='card-title'>{car.cname}</h5>
									<p className="card-text">Type: {car.ctype}</p>
									<button className='btn btn-warning'>Update</button>
									<br /><br />
									<button className='btn btn-danger'>Delete</button>
								</div>
							</span>
						</div>
					))
				}
			</div>
		</span>
		// <div className='card'>
		// 	<div className='card-body'>
		// 		<h5 className='card-title'>{cars[0].cname}</h5>
		// 		<p className="card-text">Type: {cars[0].ctype}</p>
		// 		<button className='btn btn-primary'>Book</button>
		// 	</div>
		// </div>

		// <ul>
		// 	{
		// 		cars.map(car => (<li key={car.cid}>{car.cname}</li>))
		// 	}
		// </ul>
	)
}

export default OwnerDashboard
