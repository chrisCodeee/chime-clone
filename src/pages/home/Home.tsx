import { Container } from "../../App/AppStyle";
import { NTY, SpotMe, TC, USAToday, WSJ, forbes } from "../../assets";
import { Carousels, TextContainer } from "../../components";

const Home = () => {
	const images = [WSJ, forbes, NTY, USAToday, TC];
	return (
		<>
			<div style={{ maxWidth: "2000px", margin: "auto" }}>
				<Carousels />
			</div>
			<Container className="px-0 px-md-5 py-4 py-md-5 d-flex flex-wrap justify-content-center justify-content-md-between">
				{images.map((image) => (
					<div key={image} className="mt-4 me-4 me-md-5 image-container">
						<img src={image} alt="Forbes" />
					</div>
				))}
			</Container>

			<Container>
				<TextContainer heading="Overdraft fee-free with SpotMe" text="We'll spot you up to $200 on debit card purchases with no overdraft fees. Eligibility requirements apply." image={SpotMe} number="2" />
			</Container>
		</>
	);
};

export default Home;
