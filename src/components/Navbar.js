import React, { useState } from "react";
import { FaPizzaSlice, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	const [color, setColor] = useState(false);
	const changeColor = () => {
		if (window.scrollY >= 100) {
			setColor(true);
		} else {
			setColor(false);
		}
	};

	window.addEventListener("scroll", changeColor);

	return (
		<div className={color ? "header header-bg" : "header"}>
			<Link to="/">
				<h1>
					<span>
						<FaPizzaSlice />
						Fake
					</span>
					Pizza
				</h1>
			</Link>
			<ul className={click ? "nav-menu active" : "nav-menu"}>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/deals">Deals</Link>
				</li>
				<li>
					<Link to="/booking">Booking</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
			<div className="hamburger" onClick={handleClick}>
				{click ? <FaTimes size={20} style={{ color: "#e0e0e2" }} /> : <FaBars size={20} style={{ color: "#e0e0e2" }} />}
			</div>
		</div>
	);
}

export default Navbar;
