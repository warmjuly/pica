import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Route, HashRouter } from "react-router-dom";

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
