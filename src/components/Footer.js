import React from "react";
import "./Footer.css";
import { TiSocialFacebook, TiSocialInstagram, TiSocialPinterest, TiSocialTwitter } from "react-icons/ti";
import { FiMail } from "react-icons/fi";
import { FaPhone } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

function Footer() {
	return (
		<div className="footer">
			<div className="footer-container">
				<div className="left">
					<div className="location">
						<GoLocation size={20} style={{ color: "#e0e0e2", marginRight: "2rem" }} />
						<div>
							<p>123 Fake St.</p>
							<h4>Riga, Latvia</h4>
						</div>
					</div>
					<div className="phone">
						<h4>
							<FaPhone size={20} style={{ color: "#e0e0e2", marginRight: "2rem" }} />
							+371-222-222-22
						</h4>
					</div>

					<div className="email">
						<h4>
							<FiMail size={20} style={{ color: "#e0e0e2", marginRight: "2rem" }} />
							chef@fakepizza.com
						</h4>
					</div>
				</div>
				<div className="right">
					<h4>About the company</h4>
					<p>Long time ago, in a galaxy, far, far away... This pizza joint was created.</p>
					<div className="social">
						<TiSocialFacebook size={30} style={{ color: "#e0e0e2", marginRight: "1rem" }} />
						<TiSocialInstagram size={30} style={{ color: "#e0e0e2", marginRight: "1rem" }} />
						<TiSocialPinterest size={30} style={{ color: "#e0e0e2", marginRight: "1rem" }} />
						<TiSocialTwitter size={30} style={{ color: "#e0e0e2", marginRight: "1rem" }} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
