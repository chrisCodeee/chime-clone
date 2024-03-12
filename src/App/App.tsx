import { Outlet } from "react-router-dom";
import { Header } from "../containers";
import NavMenu from "../components/navBar/NavMenu";
import { useNavBar } from "../state-mangement";

const App = () => {
	const { state } = useNavBar();
	return (
		<>
			{state && <NavMenu />}
			{!state && (
				<>
					<Header />
					<Outlet />
				</>
			)}
		</>
	);
};

export default App;
