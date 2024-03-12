import { Link } from "react-router-dom";
import { GreenBtn } from "./BtnStyle";

interface Props {
	btnText: string;
	btnLink: string;
	padding?: string;
}
const BtnGreen = ({ btnText, btnLink, padding }: Props) => {
	return (
		<GreenBtn style={{ padding: padding }}>
			<Link className="link-bold" to={btnLink}>
				{btnText}
			</Link>
		</GreenBtn>
	);
};

export default BtnGreen;
