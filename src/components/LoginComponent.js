import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function LoginComponent() {
	const navigate = useNavigate();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [valid, setValid] = useState(false);
	const HandleSubmit = (e) => {
		e.preventDefault();
		if (username === '' || password === '') {
			alert("Please fill in details");
			window.location.reload();
		}
		else {
			setValid(true);
		}
	}
	useEffect(() => {
		axios.post(`http://localhost:5000/login`, { "uname": username, "pwd": password })
			.then(res => {
				if (res.data === 1) {
					// console.log("Owner");
					navigate("/ownerdashboard");
				}
				else if (res.data === 2) {
					// console.log("Customer");
					navigate("/customerdashboard");
				}
			})
			.catch(error => console.log(error));
	}, [valid]);


	return (
		<React.Fragment>
			<div className='sidebar'>
				<img src="images/icon.png" alt="" className="logo logo-login"></img>
				<br /><br />
				<div className='main-text'>
					<h2>Car Rental System <br />Login Page</h2>
					<p className='mt-5'>You are one step away from booking your freedom !</p>
				</div>
			</div>
			<div className='main'>
				<div className="col-md-6 col-sm-12">
					<div className="login-form">
						<form>
							<div className="form-group">
								<label>Username</label>
								<input type="text" className="form-control" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
							</div><br />
							<div className="form-group">
								<label>Password</label>
								<input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
							</div><br />
							<button type="submit" className="btn-black" onClick={HandleSubmit}>Login</button>
						</form>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}
export default LoginComponent;