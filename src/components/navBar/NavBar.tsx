import { Link } from "react-router-dom";
import chimeLogo from "../../assets/chime-logo.svg";
import { BtnGreen } from "../btn";
import { CgMenu } from "react-icons/cg";
import { navLinks } from "./useNavParams";

const NavBar = () => {
	return (
		<nav className="d-flex justify-content-between align-items-center">
			<div className="d-flex align-items-center">
				<div style={{ width: "89.29px" }}>
					<Link to="">
						<img src={chimeLogo} alt="Chime-Logo" />
					</Link>
				</div>

				<ul className="ms-2 pt-3 d-none d-lg-flex">
					{navLinks.map(({ name, link }) => (
						<li className="me-4 me-lg-5" key={name}>
							<Link to={link} className="link link-bold">
								{name}
							</Link>
						</li>
					))}
				</ul>
			</div>

			<ul className="d-flex align-items-center pt-3">
				<li className="d-none d-lg-flex me-5">
					<Link to="" className="link link-bold">
						Log in
					</Link>
				</li>
				<BtnGreen btnLink="/" btnText="Sign Up" />

				<div className="d-flex d-lg-none ms-4 ms-lg-5">
					<CgMenu size={30} color="#1ec677" />
				</div>
			</ul>
		</nav>
	);
};

export default NavBar;
