import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Deals from "./routes/Deals";
import Booking from "./routes/Booking";
import Contact from "./routes/Contact";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/deals" element={<Deals />} />
				<Route path="/booking" element={<Booking />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;
