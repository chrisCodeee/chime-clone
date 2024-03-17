import { Link } from "react-router-dom";
import { BtnGreen } from "../btn";
import { CarouselTextContainer, ImageContainer, ImageDesktop, ImageMobile } from "./CarouselStyles";
import { Container } from "../../App/AppStyle";
import { Form } from "..";

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
					<h1>
						{heading}
						<span style={{ fontSize: fontsize, transform: `translateY(${transform})` }}>{number}</span>
					</h1>
					<div>
						<div className="mt-4 form-container">
							<Form />

							<div className="btn-container">
								<BtnGreen btnLink="" btnText="Sign Up" padding="1.1rem 4rem" />
							</div>
						</div>
						<div className="mt-5">
							<p style={{ fontSize: "15px", fontWeight: "500" }}>
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
				<ImageDesktop src={imageLarge} alt="image" style={{ height: "100%" }} />
				<ImageMobile src={imageSmall} alt="image" style={{ height: "100%" }} />
			</ImageContainer>
		</>
	);
};

export default carouselDetails;
