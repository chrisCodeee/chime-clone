import { Link } from "react-router-dom";
import { GreenBtn } from "./BtnStyle";

interface Props {
	btnText: string;
	btnLink: string;
}
const BtnGreen = ({ btnText, btnLink }: Props) => {
	return (
		<GreenBtn>
			<Link className="link-bold" to={btnLink}>
				{btnText}
			</Link>
		</GreenBtn>
	);
};

export default BtnGreen;
