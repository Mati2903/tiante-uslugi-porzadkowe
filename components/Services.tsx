import React from "react";
import { GiCheckMark } from "react-icons/gi";

const Services = () => {
	return (
		<section id="services" className="services">
			<h1 className="services__header">Usługi</h1>
			<h3 className="services__subheader">W zakres naszych usług wchodzi:</h3>
			<ul className="services__list-items">
				<li className="services__list-item">
					<GiCheckMark className="services__check" />
					Mycie witryn sklepowych
				</li>
				<li className="services__list-item">
					<GiCheckMark className="services__check" />
					Sprzątanie domów, biur i sklepów
				</li>
				<li className="services__list-item">
					<GiCheckMark className="services__check" />
					Pranie dywanów i tapicerek
				</li>
			</ul>
		</section>
	);
};

export default Services;
