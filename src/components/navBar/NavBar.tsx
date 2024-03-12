import { Link } from "react-router-dom";
import { BtnGreen } from "../btn";
import { CgMenu } from "react-icons/cg";
import { navLinks } from "./useNavParams";
import { Logo } from "..";
import { useNavBar } from "../../state-mangement";

const NavBar = () => {
	const { openMenu } = useNavBar();
	return (
		<>
			<nav className="d-flex justify-content-between align-items-center">
				<div className="d-flex align-items-center">
					<Logo />
					<ul className="ms-2 pt-3 mobile-view">
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
					<li className="mobile-view me-5">
						<Link to="" className="link link-bold">
							Log in
						</Link>
					</li>
					<BtnGreen btnLink="/" btnText="Sign Up" />
					<div className="menu ms-3">
						<CgMenu size={30} color="#1ec677" onClick={openMenu} />
					</div>
				</ul>
			</nav>
		</>
	);
};

export default NavBar;
