import React from "react";
import { Link } from "react-router-dom";
import "./Video.css";

import pizza from "../assets/pizza.mp4";

function Video() {
	return (
		<div className="hero">
			<video autoPlay loop muted id="video">
				<source src={pizza} type="video/mp4" />
			</video>
			<div className="content">
				<h1>Fake Pizza</h1>
				<p>Best you'll never have.</p>
				<div>
					<Link to="menu.jpg" target="_blank" download className="btn">
						Menu
					</Link>
					<Link to="/booking" className="btn btn-light">
						Booking
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Video;
