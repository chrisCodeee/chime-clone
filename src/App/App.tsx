import { Outlet } from "react-router-dom";
import { Footer, Header } from "../containers";
import NavMenu from "../components/navBar/NavMenu";
import { useNavBar } from "../state-mangement";
import { Container } from "./AppStyle";

const App = () => {
	const { state } = useNavBar();
	return (
		<>
			{state && <NavMenu />}
			{!state && (
				<>
					<Header />
					<Outlet />

					<Container className="mt-big">
						<Footer />
					</Container>
				</>
			)}
		</>
	);
};

export default App;
