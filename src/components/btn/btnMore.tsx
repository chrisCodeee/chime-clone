import { Link } from "react-router-dom";

const btnMore = () => {
	return (
		<div>
			<button style={{ border: "2px solid rgb(30, 198, 119)", borderRadius: "8px", padding: "1rem 2.4rem", backgroundColor: "#fff" }}>
				<Link to="" className="link-bold">
					Learn more
				</Link>
			</button>
		</div>
	);
};

export default btnMore;
