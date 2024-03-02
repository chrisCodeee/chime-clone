import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import { NavBar } from "../../components";

const ErrorPage = () => {
	const error = useRouteError();

	return (
		<div className="container">
			<NavBar />
			<h1>Oops...</h1>
			<p>{isRouteErrorResponse(error) ? "Invalid Page" : "Unexpected error"}</p>
		</div>
	);
};

export default ErrorPage;
