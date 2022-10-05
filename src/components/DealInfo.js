import React from "react";
import { Link } from "react-router-dom";
import "./DealInfo.css";

function DealInfo() {
	return (
		<div className="pricing">
			<div className="card-container">
				<div className="card">
					<h3>- Binge Evening-</h3>
					<span className="bar"></span>
					<p className="price">19.99 €</p>
					<p>- Any two pizzas -</p>
					<p>- Side of Fries -</p>
					<p>- With a drink of your choice -</p>
					<Link to="" className="btn">
						Order
					</Link>
				</div>
				<div className="card">
					<h3>- Three's company -</h3>
					<span className="bar"></span>
					<p className="price">29.99 €</p>
					<p>- Any three pizzas -</p>
					<p>- Three Sides of Fries -</p>
					<p>- Three drinks of choice -</p>
					<Link to="" className="btn">
						Order
					</Link>
				</div>
				<div className="card">
					<h3>- Party time -</h3>
					<span className="bar"></span>
					<p className="price">49.99 €</p>
					<p>- Any five pizzas -</p>
					<p>- Five sides of choice -</p>
					<p>- Five drinks of choice -</p>
					<Link to="" className="btn">
						Order
					</Link>
				</div>
			</div>
		</div>
	);
}

export default DealInfo;
