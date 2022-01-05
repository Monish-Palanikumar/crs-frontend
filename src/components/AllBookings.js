import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function AllBookings() {
	const navigate = useNavigate();
	const [bookings, setBookings] = useState([]);
	const [action, setAction] = useState(false);
	const [uname, setUname] = useState('');
	const [cname, setCname] = useState('');
	const [ctype, setCtype] = useState('');
	const [start, setStart] = useState('');
	const [bid, setBid] = useState('');
	const [end, setEnd] = useState('');
	const [searchTermType, setSearchTermType] = useState('');
	const [searchTermDate, setSearchTermDate] = useState('');
	const [description, setDescription] = useState('');
	const [quantity, setQuantity] = useState('');
	const showDashboard = (e) => {
		e.preventDefault();
		navigate("/ownerdashboard");
	}
	useEffect(() => {
		axios.get(`http://localhost:5000/booking/getAllBookings`)
			.then(res => {
				setBookings(res.data);
			})
			.catch(error => console.log(error));
	}, []);

	const takeAction = (e, bid, uname, cname, ctype, start, end, quantity) => {
		e.preventDefault();
		setAction(action => !action);
		setBid(bid);
		setUname(uname);
		setCname(cname);
		setCtype(ctype);
		setStart(start);
		setEnd(end);
		setQuantity(quantity);
	}

	const closeForm = (e) => {
		e.preventDefault();
		setAction(action => !action);
	}

	const approve = (e) => {
		e.preventDefault();
		axios.get(`http://localhost:5000/booking/updateStatus?status=Approved&comments=${description}&bid=${bid}`)
			.then(res => console.log(res))
			.catch(err => console.log(err));
		setDescription('');
		setAction(action => !action);
	}
	const reject = (e) => {
		e.preventDefault();
		axios.get(`http://localhost:5000/booking/updateStatus?status=Rejected&comments=${description}&bid=${bid}`)
			.then(res => console.log(res))
			.catch(err => console.log(err));
		setDescription('');
		setAction(action => !action);
	}

	const renderActionForm = () => {
		return (
			<form className='approval text-center mt-5'>
				<div className='form-row mb-5'>
					<div>
						<p><b>Username:</b>&nbsp; {uname}</p>
						<p><b>Car Name:</b>&nbsp; {cname}</p>
						<p><b>Car Type:</b>&nbsp; {ctype}</p>
						<p><b>Start Date:</b>&nbsp; {start}</p>
						<p><b>End Date:</b>&nbsp; {end}</p>
						<p><b>Quantity:</b>&nbsp; {quantity}</p>
						<input type="text" className='form-control' id="description" value={description} placeholder='Reason' onChange={e => setDescription(e.target.value)} />
						<small id="taskHelp" className="form-text text-muted">Enter the reason for approval/rejection</small>
						<br /><br />

						<div className="col-auto">
							<button type="submit" className="btn btn-success mt-2" onClick={approve}>Approve</button> &nbsp;
							<button type="submit" className="btn btn-danger mt-2" onClick={reject}>Reject</button>
							<br />
							<button type="submit" className="btn btn-primary mt-2 mx-5" onClick={closeForm}>Close</button>
						</div>

					</div>
				</div>
			</form>
		)
	}

	const renderNothing = () => {
		return (
			<p style={{ "display": "none" }}></p>
		)
	}

	return (
		<div>
			<h2 className='mt-5 text-center'>All Bookings</h2>
			<button className='mx-5 btn btn-info' onClick={showDashboard}>Show Dashboard</button>
			<hr />
			<input type="text" className="form-control" placeholder="Search By Car Type" value={searchTermType} onChange={e => setSearchTermType(e.target.value)} />
			<input type="text" className="form-control" placeholder="Search By Booking Date" value={searchTermDate} onChange={e => setSearchTermDate(e.target.value)} />
			<table className='text-center mt-5'>
				<tr className='text-center'>
					<th>Username</th>
					<th>Car Name</th>
					<th>Car Type</th>
					<th className='text-center'>Start Date</th>
					<th className='text-center'>End Date</th>
					<th>Quantity</th>
					<th>Action</th>
				</tr>
				{
					bookings.filter((val) => {
						if (searchTermType === '') {
							return val;
						}
						else if (val.ctype.toLowerCase().includes(searchTermType.toLowerCase())) {
							return val;
						}
					}).filter((val) => {
						if (searchTermDate === '') {
							return val;
						}
						else if (val.start.includes(searchTermDate)) {
							return val;
						}
					}).map((booking, key) => {
						return (
							<tr key={key}>
								<td>{booking.uname}</td>
								<td>{booking.cname}</td>
								<td>{booking.ctype}</td>
								<td>{booking.start}</td>
								<td>{booking.end}</td>
								<td>{booking.quantity}</td>
								<td><button className="btn btn-warning" onClick={(e, bid, uname, cname, ctype, start, end, quantity) => { takeAction(e, booking.bid, booking.uname, booking.cname, booking.ctype, booking.start, booking.end, booking.quantity) }}>Take Action</button></td>
							</tr>
						)
					})
				}
			</table>
			{
				action ? renderActionForm() : renderNothing()
			}
		</div>
	)
}

export default AllBookings
