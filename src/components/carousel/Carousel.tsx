import Carousel from "react-bootstrap/Carousel";
import CarouselDetails from "./carouselDetails";
import { headingText } from "./useCarousel";

const Carousels = () => {
	return (
		<Carousel>
			{headingText.map(({ heading, number, imageLarge, imageSmall, fontsize, transform }) => (
				<Carousel.Item key={heading}>
					<CarouselDetails heading={heading} number={number} imageLarge={imageLarge} imageSmall={imageSmall} fontsize={fontsize} transform={transform} />
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default Carousels;
