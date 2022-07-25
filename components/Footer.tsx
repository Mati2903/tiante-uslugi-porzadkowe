import React from "react";

const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<section className="footer">
			<p className="footer__copyright">Copyright &#169; {year} Tiante</p>
		</section>
	);
};

export default Footer;
