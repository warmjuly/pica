import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./routes/Home";
import Deals from "./routes/Deals";
import Booking from "./routes/Booking";
import Contact from "./routes/Contact";

function App() {
	return (
		<div className="App">
			<HashRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/deals" element={<Deals />} />
					<Route path="/booking" element={<Booking />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</HashRouter>
		</div>
	);
}

export default App;
