import Carousel from "react-bootstrap/Carousel";
import { imageLarge1, imageLarge2, imageLarge3, imageLarge4, imageLarge5, imageSmall1, imageSmall2, imageSmall3, imageSmall4, imageSmall5 } from "../../assets";
import CarouselDetails from "./carouselDetails";

const Carousels = () => {
	const headingText = [
		{ heading: "The #1 most loved banking app", number: "TM", imageLarge: imageLarge1, imageSmall: imageSmall1 },
		{ heading: "Build credit history with no annual fees or interest", number: "1", imageLarge: imageLarge2, imageSmall: imageSmall2, position: "10%" },
		{ heading: "Fee-free overdraft up to $200", number: "2", imageLarge: imageLarge3, imageSmall: imageSmall3 },
		{ heading: "Get paid up to 2 days early with direct deposit", number: "3", imageLarge: imageLarge4, imageSmall: imageSmall4, position: "15%" },
		{ heading: "No monthly fees", number: "", imageLarge: imageLarge5, imageSmall: imageSmall5 },
	];
	return (
		<Carousel>
			{headingText.map(({ heading, number, imageLarge, imageSmall, position }) => (
				<Carousel.Item key={heading}>
					<CarouselDetails heading={heading} number={number} imageLarge={imageLarge} imageSmall={imageSmall} position={position} />
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default Carousels;
