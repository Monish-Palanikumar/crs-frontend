import axios from 'axios';
import React, { useState } from 'react';

function AddCar() {
	const [name, setName] = useState('');
	const [type, setType] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		axios.get(`http://localhost:5000/car/add?cname=${name}&ctype=${type}`)
			.then(res => console.log(res))
			.catch(error => console.log(error));

		window.location.reload();
	}

	return (
		<div id="issue-form" className='mb-5'>
			<form className='mt-5' onSubmit={handleSubmit}>
				<div className='form-row align-items-center'>
					<div className='col-lg-6'>
						<label htmlFor='carName'>Car Name</label>
						<input type="text" className="form-control" id="carName" value={name} onChange={(e) => setName(e.target.value)} />
						<small id="taskHelp" className="form-text text-muted">Enter the car name</small>

						<br /><br />

						<label htmlFor='carName'>Car Type</label>
						<input type="text" className="form-control" id="carType" value={type} onChange={(e) => setType(e.target.value)} />
						<small id="taskHelp" className="form-text text-muted">Enter car type (Sedan/SUV/MUV/LUV/Hatchback)</small>
						<br /><br />
						<div className="col-auto">
							<button type="submit" className="btn btn-success mt-2">Submit</button>
						</div>

					</div>
				</div>
			</form>
		</div>
	)
}

export default AddCar
