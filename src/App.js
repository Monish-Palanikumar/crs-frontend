import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Landing from "./components/Landing";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sample from "./components/Sample";
import LoginComponent from "./components/LoginComponent";
import OwnerDashboard from "./components/OwnerDashboard";
import CustomerDashboard from "./components/CustomerDashboard";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/sample" element={<Sample />} />
				<Route path="/login" element={<LoginComponent />} />
				<Route path="/ownerdashboard" element={<OwnerDashboard />} />
				<Route path="/customerdashboard" element={<CustomerDashboard />} />
			</Routes>
		</Router>
	);
}

export default App;
