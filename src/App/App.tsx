import { Outlet } from "react-router-dom";
import { Header } from "../containers";
import { Container } from "./AppStyle";

const App = () => {
	return (
		<Container>
			<Header />
			<div className="">
				<Outlet />
			</div>
		</Container>
	);
};

export default App;
