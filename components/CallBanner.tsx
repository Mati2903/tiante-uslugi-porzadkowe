import { FaPhoneAlt } from "react-icons/fa";

const CallBanner = () => {
	return (
		<div className="call-banner">
			<a href="tel:+48530447423" className="call-banner__number">
				<FaPhoneAlt className="call-banner__icon" /> Zadzwoń do nas!
			</a>
		</div>
	);
};

export default CallBanner;
