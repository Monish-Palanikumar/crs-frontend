import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Landing from "./components/Landing";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sample from "./components/Sample";
import LoginComponent from "./components/LoginComponent";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/sample" element={<Sample />} />
				<Route path="/login" element={<LoginComponent />} />
			</Routes>
		</Router>
	);
}

export default App;
