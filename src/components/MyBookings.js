import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function MyBookings() {
	const [bookings, setBookings] = useState([]);
	const username = localStorage.getItem("uname");
	const navigate = useNavigate();
	useEffect(() => {
		axios.get(`http://localhost:5000/booking/getBookingByUname?uname=${username}`)
			.then(res => {
				setBookings(res.data);
			})
			.catch(error => console.log(error));
	}, []);

	const showDashboard = (e) => {
		e.preventDefault();
		navigate("/customerdashboard");
	}
	return (
		<div>
			<h2 className='mt-5 text-center'>Your Bookings</h2>
			<button className='mx-5 btn btn-info' onClick={showDashboard}>Show Dashboard</button>
			<hr />
			<table className='text-center mt-5'>
				<tr className='text-center'>
					<th className='text-center'>Car Name</th>
					<th className='text-center'>Car Type</th>
					<th className='text-center'>Start Date</th>
					<th className='text-center'>End Date</th>
					<th className='text-center'>Quantity</th>
					<th className='text-center'>Status</th>
					<th className='text-center'>Comments</th>
				</tr>
				{
					bookings.map(booking => {
						return (
							<tr>
								<td>{booking.cname}</td>
								<td>{booking.ctype}</td>
								<td>{booking.start}</td>
								<td>{booking.end}</td>
								<td>{booking.quantity}</td>
								<td>{booking.status}</td>
								<td>{booking.comments}</td>
							</tr>
						)
					})
				}
			</table>
		</div>
	)
}

export default MyBookings
