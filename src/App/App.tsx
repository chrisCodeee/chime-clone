import { Outlet } from "react-router-dom";
import { Header } from "../containers";

const App = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};

export default App;
