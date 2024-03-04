import { Link } from "react-router-dom";
import { BtnGreen } from "../btn";
import { CarouselTextContainer, ImageContainer, ImageDesktop, ImageMobile } from "./CarouselStyles";
import { Container } from "../../App/AppStyle";

interface Props {
	heading: string;
	number?: string;
	imageLarge: string;
	imageSmall: string;
	position?: string;
}
const carouselDetails = ({ heading, number, imageLarge, imageSmall, position }: Props) => {
	return (
		<>
			<Container>
				<CarouselTextContainer style={{ top: position }}>
					<h1 className="pb-4">
						{heading}
						<span style={{ fontSize: "30px", transform: "translateY(-15px)", display: "inline-block" }}>{number}</span>
					</h1>
					<div className="d-flex justify-content-between mt-5">
						<form action="#" style={{ flexGrow: "1" }} className="me-4">
							<input type="email" placeholder="Enter your email" className="w-100 py-3 ps-5" style={{ borderRadius: "50px" }} />
						</form>
						<BtnGreen btnLink="" btnText="Sign Up" />
					</div>

					<div className="mt-5">
						<p>
							<Link to="">Already have an account?</Link>
						</p>
						<p className="mt-4">
							Learn how we collect and use your information by visiting our <Link to="">Privacy Notice</Link>
						</p>
						<p className="mt-4">Chime is a financial technology company, not a bank. Banking services provided by The Bancorp Bank, N.A. or Stride Bank, N.A.; Members FDIC</p>
					</div>
				</CarouselTextContainer>
			</Container>
			<ImageContainer>
				<ImageDesktop src={imageLarge} alt="image" />
				<ImageMobile src={imageSmall} alt="image" />
			</ImageContainer>
		</>
	);
};

export default carouselDetails;
