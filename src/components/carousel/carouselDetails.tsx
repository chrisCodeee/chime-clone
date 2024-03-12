import { Link } from "react-router-dom";
import { BtnGreen } from "../btn";
import { CarouselTextContainer, ImageContainer, ImageDesktop, ImageMobile } from "./CarouselStyles";
import { Container } from "../../App/AppStyle";

interface Props {
	heading: string;
	number?: string;
	imageLarge: string;
	imageSmall: string;
	fontsize?: string;
	transform?: string;
}
const carouselDetails = ({ heading, number, imageLarge, imageSmall, fontsize, transform }: Props) => {
	return (
		<>
			<Container>
				<CarouselTextContainer>
					<h1 className="pb-4">
						{heading}
						<span style={{ fontSize: fontsize, transform: `translateY(${transform})` }}>{number}</span>
					</h1>
					<div>
						<div className="mt-5 form-container">
							<form action="#">
								<input type="email" placeholder="Enter your email" className="w-100 py-3 ps-5" style={{ borderRadius: "5px" }} />
							</form>
							<div className="btn-container">
								<BtnGreen btnLink="" btnText="Sign Up" />
							</div>
						</div>
						<div className="mt-5">
							<p style={{ fontSize: "15px", fontWeight: "lighter" }}>
								<Link to="">Already have an account?</Link>
							</p>

							<p className="mt-4">Chime is a financial technology company, not a bank. Banking services provided by The Bancorp Bank, NA or Stride Bank, N.A.; Members FDIC</p>
							<p>
								Learn how we collect and use your information by visiting our <Link to="">Privacy Notice</Link>
							</p>
						</div>
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
