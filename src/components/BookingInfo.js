import React from "react";
import "./BookingInfo.js";
import { Link } from "react-router-dom";

import "./BookingInfo.css";

import Chef from "../assets/chef.jpg";
import Fire from "../assets/fire.jpg";

function BookingInfo() {
	return (
		<div className="booking">
			<div className="left">
				<h1>Booking</h1>
				<p>Booking is available. Please call in advance, or feel free to contact us through our website.</p>
				<Link to="/contact">
					<button className="btn">Contact</button>
				</Link>
			</div>
			<div className="right">
				<div className="img-container">
					<div className="image-stack top">
						<img src={Chef} className="img" alt="" />
					</div>
					<div className="image-stack bottom">
						<img src={Fire} className="img" alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default BookingInfo;
