import { Container } from "../../App/AppStyle";
import { NTY, TC, USAToday, WSJ, forbes } from "../../assets";
import { Carousels, TextContainer } from "../../components";

const Home = () => {
	const images = [WSJ, forbes, NTY, USAToday, TC];
	return (
		<>
			<div style={{ maxWidth: "2000px", margin: "auto" }}>
				<Carousels />
			</div>
			<Container className="px-5 px-md-0 py-5 d-flex flex-wrap justify-content-between" style={{ borderBottom: "2px solid rgb(13, 64, 41)" }}>
				{images.map((image) => (
					<div style={{ height: "30px" }} key={image} className="mt-4 me-4">
						<img src={image} alt="Forbes" />
					</div>
				))}
			</Container>

			<Container>
				<TextContainer />
			</Container>
		</>
	);
};

export default Home;
