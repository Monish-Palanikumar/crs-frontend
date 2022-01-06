import axios from 'axios';
import React, { useState } from 'react';
// import axios from "axios";

function CarCardCustomer(props) {
	const [book, toggleBook] = useState(false);
	const [start, setStart] = useState('');
	const [end, setEnd] = useState('');
	const [quantity, setQuantity] = useState('');
	const toggleBookForm = (e) => {
		e.preventDefault();
		toggleBook(book => !book);
	}

	const bookCar = (e, cname, ctype, start, end, quantity) => {
		e.preventDefault();
		const username = localStorage.getItem("uname");
		axios.post("http://localhost:5000/booking/insert", { "cname": cname, "uname": username, "ctype": ctype, "start": start, "end": end, "quantity": quantity })
			.then(res => {
				toggleBook(book => !book);
				alert("Booking confirmed ! Sit back and relax !");
			})
			.catch(err => console.log(err));
	}
	const renderBookingForm = () => {
		return (
			<div className="card text-center mb-3">
				<div className='card-body'>
					<h5 className='card-title'>Book your car !</h5>
					<form onSubmit={e => { bookCar(e, props.car.cname, props.car.ctype, start, end, quantity) }}>
						<div>
							<br />
							<h5 className="card-title" htmlFor="start">Start Date</h5>
							<input type="date" className="form-control" id="start" onChange={(e) => setStart(e.target.value)} />
							<h5 className="card-title" htmlFor="end">End Date</h5>
							<input type="date" className="form-control" id="end" onChange={(e) => setEnd(e.target.value)} />
							<h5 className="card-title" htmlFor="quantity">Quantity</h5>
							<input type="text" className="form-control" id="quantity" placeholder="Quantity" onChange={(e) => setQuantity(e.target.value)} />
							<div className='col-auto'>
								<button type="submit" className="btn btn-success mt-4">Book</button>
								<button type="submit" className="btn btn-primary mt-2" onClick={(e) => {
									e.preventDefault();
									toggleBook(!book);
								}}>Cancel</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
	const renderList = () => {
		return (
			<div className='card text-center mb-3'>
				<div className='card-body'>
					<h5 className='card-title'>{props.car.cname}</h5>
					<p className="card-text">Type: {props.car.ctype}</p>
					<button type="button" className='btn btn-primary' onClick={e => toggleBookForm(e)}>Book</button>
				</div>
			</div>
		);
	}
	return (
		<div className='col'>
			{
				book ? renderBookingForm() : renderList()
			}
		</div>
	)
}

export default CarCardCustomer
