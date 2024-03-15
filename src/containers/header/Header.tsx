import { Container } from "../../App/AppStyle";
import { NavBar } from "../../components";

const Header = () => {
	return (
		<header
			style={{
				backgroundColor: "rgba(255, 255, 255, 0.98)",
				boxShadow: "rgba(0, 0, 0, 0.5) 0px 0px 5px",
				padding: "0 2rem 1rem 2rem",
				position: "sticky",
				top: "0%",
				zIndex: "2000",
			}}>
			<Container>
				<NavBar />
			</Container>
		</header>
	);
};

export default Header;
