import { Outlet } from "react-router-dom";
import { Header } from "../containers";
import { Container } from "./AppStyle";

const App = () => {
	return (
		<div>
			<Header />
			<Container>
				<Outlet />
			</Container>
		</div>
	);
};

export default App;
