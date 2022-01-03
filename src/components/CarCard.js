import axios from 'axios';
import React, { useState } from 'react';

function CarCard(props) {
	const [edit, toggleEdit] = useState(false);
	const [newCar, setnewCar] = useState('');
	const toggleEditForm = (e) => {
		e.preventDefault();
		toggleEdit(edit => !edit);
		// console.log(edit);
	}

	const updateCar = (e, cname, newCar) => {
		e.preventDefault();
		axios.get(`http://localhost:5000/car/update?cname1=${cname}&cname2=${newCar}`)
			.then(res => {
				console.log(res);
				toggleEdit(!edit);
				window.location.reload();
			})
			.catch(error => console.log(error));
	}

	const renderEditForm = () => {
		return (
			<div className='card text-center mb-3' id="update-car">
				<form onSubmit={(e) => { updateCar(e, props.car.cname, newCar) }}>
					<div className="form-row text-center">
						<div>
							<br />
							<h5 className="card-title" htmlFor="carName">Car Name</h5>
							<input type="text" className="form-control" id="carName" defaultValue={props.car.cname} onChange={(e) => setnewCar(e.target.value)} />
						</div>
						<div className="col-auto">
							<button type="submit" className="btn btn-warning mt-4">
								Update
							</button>
							<br />
							<button type="submit" className="btn btn-primary mt-4" onClick={(e) => {
								e.preventDefault();
								toggleEdit(!edit);
							}}>
								Cancel
							</button>
							<br /><br />
						</div>
					</div>
				</form>
			</div>
		);
	}

	const renderNormalCard = () => {
		return (
			<div className="m-4">
				<span key={props.car.cid} className='card text-center'>
					<div className='card-body'>
						<h5 className='card-title'>{props.car.cname}</h5>
						<p className="card-text">Type: {props.car.ctype}</p>
						<button className='btn btn-warning' onClick={(e) => { toggleEditForm(e) }}>Update</button>
						<br /><br />
						<button className='btn btn-danger' onClick={(e) => { props.deleteCar(e, props.car.cname) }}>Delete</button>
					</div>
				</span>
			</div>
		);
	}

	return (
		<div>
			{
				edit ? renderEditForm() : renderNormalCard()
			}
		</div>
	)
}

export default CarCard
