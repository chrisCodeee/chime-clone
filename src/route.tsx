import { createBrowserRouter } from "react-router-dom";
import { AboutUs, Account, Benefit, ErrorPage, Home, Learn } from "./pages";
import App from "./App/App";

const route = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "", element: <Home /> },
			{ path: "", element: <Account /> },
			{ path: "", element: <Learn /> },
			{ path: "online-banking", element: <Benefit /> },
			{ path: "about-us", element: <AboutUs /> },
		],
	},
]);
export default route;
