import { Link } from "react-router-dom";
import chimeLogo from "../../assets/chime-logo.svg";

const Logo = () => {
	return (
		<div style={{ width: "89.29px" }}>
			<Link to="">
				<img src={chimeLogo} alt="Chime-Logo" />
			</Link>
		</div>
	);
};

export default Logo;
