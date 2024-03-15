import { Link } from "react-router-dom";

interface Props {
	link: string;
}

const btnMore = ({ link }: Props) => {
	return (
		<div>
			<button style={{ border: "2px solid rgb(30, 198, 119)", borderRadius: "8px", padding: "1rem 2.4rem", backgroundColor: "#fff" }}>
				<Link to={link} className="link-bold">
					Learn more
				</Link>
			</button>
		</div>
	);
};

export default btnMore;
