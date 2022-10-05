import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import DealInfo from "../components/DealInfo";

function Deals() {
	return (
		<div>
			<Navbar />
			<HeroImage heading="DEALS" text="Choose what your heart desires" />
			<DealInfo />
			<Footer />
		</div>
	);
}

export default Deals;
