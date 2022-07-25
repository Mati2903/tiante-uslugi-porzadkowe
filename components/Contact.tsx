import React from "react";
import {
	MdPhoneInTalk,
	MdAlternateEmail,
	MdHomeWork,
	MdFacebook,
} from "react-icons/md";
import { Button } from "react-bootstrap";

const Contact = () => {
	return (
		<section className="contact" id="contact">
			<h1 className="contact__header">Kontakt</h1>
			<h3 className="contact__subheader">Skontaktuj się z nami!</h3>
			<a href="tel:+48530447423" className="contact__item">
				<MdPhoneInTalk className="contact__icon" />
				530 447 423
			</a>
			<a href="mailto:tianteinfo@gmail.com" className="contact__item">
				<MdAlternateEmail className="contact__icon" />
				tianteinfo@gmail.com
			</a>
			<p className="contact__item">
				<MdHomeWork className="contact__icon" />
				Jabłonna Pierwsza 138
				<br />
				23-114 Jabłonna
			</p>

			<a
				href="https://www.facebook.com/tiantemycieokien/"
				className="contact__item"
				target="_blank"
			>
				<MdFacebook className="contact__icon" />
				Znajdź nas na Facebooku
			</a>
		</section>
	);
};

export default Contact;
