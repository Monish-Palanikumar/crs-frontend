import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import CarCardCustomer from './CarCardCustomer';

function CustomerDashboard() {
	const [cars, setCars] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const navigate = useNavigate();
	useEffect(() => {
		axios.get(`http://localhost:5000/car/getAllCars`)
			.then(res => {
				setCars(res.data);
			})
			.catch(error => console.log(error));
	}, []);

	const bookCar = (e, name, type) => {
		e.preventDefault();
		console.log(name);
		console.log(type);
	}

	const logout = (e) => {
		e.preventDefault();
		axios.get("http://localhost:5000/logout")
			.then(res => {
				navigate("/login");
			})
			.catch(error => console.log(error));
	}

	const viewBookings = (e) => {
		e.preventDefault();
		navigate("/mybookings");
	}

	return (
		<span id="cusDash">
			<span>
				<h2 className='mt-3 text-center'>Customer Dashboard</h2>
				<button className='logout btn btn-black' onClick={logout}>Logout</button>
				<button className='booking btn btn-info' onClick={viewBookings}>My Bookings</button>
			</span>
			<hr />
			<div className="form-group has-search">
				<span className="fa fa-search form-control-feedback"></span>
				<input type="text" className="form-control" placeholder="Search" onChange={e => setSearchTerm(e.target.value)} />
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
					<CarCardCustomer key={key} car={car} book={bookCar} />

				))
			}
		</span>
	)
}

export default CustomerDashboard
