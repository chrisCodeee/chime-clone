import { Link } from "react-router-dom";
import { BtnMoreContainer } from "./BtnStyle";

interface Props {
	link: string;
}

const btnMore = ({ link }: Props) => {
	return (
		<div>
			<BtnMoreContainer>
				<Link to={link} className="link-bold">
					Learn more
				</Link>
			</BtnMoreContainer>
		</div>
	);
};

export default btnMore;
