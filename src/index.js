import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Route, HashRouter } from "react-router-dom";
import Home from "./routes/Home";
import Deals from "./routes/Deals";
import Booking from "./routes/Booking";
import Contact from "./routes/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<HashRouter basename="process.env.PUBLIC_URL">
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/deals" element={<Deals />} />
			<Route path="/booking" element={<Booking />} />
			<Route path="/contact" element={<Contact />} />
		</Routes>
	</HashRouter>
);
