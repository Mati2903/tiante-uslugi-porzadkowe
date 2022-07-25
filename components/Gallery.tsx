import {
	ReactCompareSlider,
	ReactCompareSliderImage,
} from "react-compare-slider";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

const Gallery = () => {
	const [imgFirst, setImgFirst] = useState("assets/11.jpg");
	const [imgSec, setImgSec] = useState("assets/22.jpg");

	const handleClick = () => {
		if (imgFirst === "assets/11.jpg" && imgSec === "assets/22.jpg") {
			setImgFirst("assets/1.jpg");
			setImgSec("assets/2.jpg");
		} else {
			setImgFirst("assets/11.jpg");
			setImgSec("assets/22.jpg");
		}
	};

	return (
		<section className="slider" id="gallery">
			<h1 className="slider__header">Nasze realizacje</h1>
			<ReactCompareSlider
				portrait={false}
				className="slider__container"
				onlyHandleDraggable={true}
				itemOne={
					<ReactCompareSliderImage
						src={imgFirst}
						// srcSet="..."
						alt="Image one"
						className="slider__image"
					/>
				}
				itemTwo={
					<ReactCompareSliderImage
						src={imgSec}
						// srcSet="..."
						alt="Image two"
						className="slider__image"
					/>
				}
			/>
			<div className="slider__arrows-container">
				<FaArrowLeft
					className="slider__arrow arrow-left"
					onClick={handleClick}
				/>
				<FaArrowRight
					className="slider__arrow arrow-right"
					onClick={handleClick}
				/>
			</div>
		</section>
	);
};

export default Gallery;
