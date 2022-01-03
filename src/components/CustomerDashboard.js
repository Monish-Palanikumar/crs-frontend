import React, { useState, useEffect } from 'react';
import axios from "axios";

function CustomerDashboard() {
	const [cars, setCars] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	useEffect(() => {
		axios.get(`http://localhost:5000/car/getAllCars`)
			.then(res => {
				setCars(res.data);
			})
			.catch(error => console.log(error));
	}, []);
	return (
		<span id="cusDash">
			<span>
				<h2 className='mt-3 text-center'>Customer Dashboard</h2>
				<button className='logout btn btn-black'>Logout</button>
			</span>
			<hr />
			<div class="form-group has-search">
				<span class="fa fa-search form-control-feedback"></span>
				<input type="text" class="form-control" placeholder="Search" onChange={e => setSearchTerm(e.target.value)} />
			</div>
			{
				cars.filter((val) => {
					if (searchTerm === '') {
						return val;
					}
					else if (val.cname.toLowerCase().includes(searchTerm.toLowerCase())) {
						return val;
					}
				}).map((car, key) => (
					<div key={key} className='card text-center mb-3'>
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
