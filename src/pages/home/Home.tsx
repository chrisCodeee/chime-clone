import { Link } from "react-router-dom";
import { Container } from "../../App/AppStyle";
import { APY_200, Alert, ChimeReview, CreditBuilder, Lock, NTY, NoFees, PaidEarly, PayAnyoneDesktop, SpotMe, TC, USAToday, WSJ, forbes } from "../../assets";
import { Carousels, Form, ImageWrapper, TextContainer, TextWrapperLeft, TextWrapperRight } from "../../components";
import { BtnGreen } from "../../components/btn";
import { Security } from "../../containers";

const Home = () => {
	const images = [WSJ, forbes, NTY, USAToday, TC];
	return (
		<>
			<div style={{ maxWidth: "2000px", margin: "auto" }}>
				<Carousels />
			</div>

			<div style={{ backgroundColor: "rgba(74, 74, 74, 0.03)" }} className="py-4 py-md-5">
				<Container className="px-0 px-md-5 d-flex flex-wrap justify-content-center justify-content-md-between">
					{images.map((image) => (
						<div key={image} className="mt-4 me-4 me-md-5 image-container">
							<img src={image} alt="Forbes" />
						</div>
					))}
				</Container>
			</div>

			<div>
				<Container>
					<TextContainer>
						<TextWrapperLeft heading="Overdraft fee-free with SpotMe" text="We'll spot you up to $200 on debit card purchases with no overdraft fees. Eligibility requirements apply." number="2" />
						<ImageWrapper image={SpotMe} />
					</TextContainer>
				</Container>
			</div>

			<div style={{ backgroundColor: "rgba(74, 74, 74, 0.03)" }} className="py-3">
				<Container>
					<TextContainer>
						<ImageWrapper image={PaidEarly} scale="1" />
						<TextWrapperRight heading="Get paid early" text="Set up direct deposit and get your paycheck up to 2 days earlier than some of your co-workers!" number="3" />
					</TextContainer>
				</Container>
			</div>

			<div>
				<Container>
					<TextContainer>
						<TextWrapperLeft heading="Say goodbye to monthly fees" text="No overdraft. No minimum balance. No monthly fees. No foreign transaction fees. 60,000+ fee-free ATMs at stores you love, like Walgreens, CVS, 7-Eleven, and Circle K. Out-of-network fees apply." />
						<ImageWrapper image={NoFees} scale="0.85" />
					</TextContainer>
				</Container>
			</div>

			<div style={{ backgroundColor: "rgba(74, 74, 74, 0.03)" }} className="py-3">
				<Container>
					<TextContainer>
						<ImageWrapper image={CreditBuilder} scale="0.95" />
						<TextWrapperRight heading="A new way to build credit" text="Help increase your FICO Score by an average of 30 points with our new secured credit card. No interest, no annual fees, no credit check to apply. Eligibility requirements apply." number="6" text_2="Regular on-time payment history can have a positive impact on your credit score." />
					</TextContainer>
				</Container>
			</div>

			<div>
				<Container>
					<TextContainer>
						<TextWrapperLeft heading="Pay anyone the fast, fee-free way" text="Pay friends and family fee-free, no matter what bank account they use. They can cash out instantly and securely, no sign-up needed." />
						<ImageWrapper image={PayAnyoneDesktop} scale="0.9" />
					</TextContainer>
				</Container>
			</div>

			<div style={{ backgroundColor: "rgba(74, 74, 74, 0.03)" }} className="py-3">
				<Container>
					<TextContainer>
						<ImageWrapper image={APY_200} />
						<TextWrapperRight heading="Make your money grow fast" text="2.00% Annual Percentage Yield (APY). Set money aside with Automatic Savings features. And never pay a fee on your Savings Account." />
					</TextContainer>
				</Container>
			</div>

			<div>
				<Container>
					<TextContainer>
						<TextWrapperLeft heading="Stay in control with alerts" text="You’re always in-the-know with daily balance notifications and transaction alerts" />
						<ImageWrapper image={Alert} scale="1" />
					</TextContainer>
				</Container>
			</div>

			<div style={{ backgroundColor: "rgba(74, 74, 74, 0.03)" }} className="">
				<Container className="mt-big ">
					<h2 className="text-center">Security & support you can trust</h2>
					<div className="row px-3 px-md-0 mx-0">
						<div className="col-12 my-5 my-md-0 col-md align-self-center text-center">
							<div className="mx-auto securityImageContainer">
								<img src={Lock} alt="Lock Image" />
							</div>
						</div>

						<Security />
					</div>
				</Container>
			</div>

			<div style={{ backgroundColor: "rgba(166, 245, 219, 0.2)" }}>
				<Container>
					<TextContainer>
						<div className="col-12 col-md d-flex flex-column justify-content-center">
							<h2 className="link-bold col-md-9">Get started</h2>
							<p className="mb-4 mt-3 col-md-10" style={{ fontSize: "1.5rem", fontWeight: "600" }}>
								Applying for an account is free and takes less than 2 minutes. It won’t affect your credit score!
							</p>
							<div className="col-md-10">
								<Form />
							</div>
							<div className="d-md-flex mt-3">
								<BtnGreen btnLink="" btnText="Sign up" padding=".7rem 2.5rem" />
							</div>
							<p className="mt-1 col-12 col-md-10" style={{ fontSize: "1.15rem" }}>
								Learn how we collect and use your information by visiting our
								<Link to="">
									<strong> Privacy Notice </strong>
								</Link>
							</p>
						</div>
						<ImageWrapper image={ChimeReview} scale="1" />
					</TextContainer>
				</Container>
			</div>
		</>
	);
};

export default Home;
