import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import AddCar from './AddCar';
import CarCard from './CarCard';

function OwnerDashboard() {
	const [cars, setCars] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
		axios.get(`http://localhost:5000/car/getAllCars`)
			.then(res => {
				setCars(res.data);
			})
			.catch(error => console.log(error));
	}, []);

	const deleteCar = (e, cname) => {
		e.preventDefault();
		axios.get(`http://localhost:5000/car/delete?cname=${cname}`)
			.then(res => console.log(res))
			.catch(error => console.log(error));
		window.location.reload();

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
		navigate("/allbookings");
	}
	return (
		<span>
			<span>
				<h2 className='mt-3 text-center'>Owner Dashboard</h2>
				<button className='logout btn btn-black' onClick={logout}>Logout</button>
				<button className='booking btn btn-info' onClick={viewBookings}>View All Bookings</button>
			</span>

			<hr />
			<AddCar />
			<hr />
			<h3 className='my-5 text-center'>Available Cars</h3>
			<div className='row'>
				{
					cars.map((car, index) => {
						return (
							<CarCard key={index} index={index} car={car} deleteCar={deleteCar} />
						)
					})
				}
			</div>
		</span>
	)
}

export default OwnerDashboard
