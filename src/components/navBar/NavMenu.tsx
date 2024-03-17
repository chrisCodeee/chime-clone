import { Logo } from "..";
import { IoCloseOutline } from "react-icons/io5";
import { useNavBar } from "../../state-mangement";
import { Link } from "react-router-dom";
import { BtnGreen } from "../btn";
import { navMenuLinks } from "./useNavParams";

const NavMenu = () => {
	const { closeMenu } = useNavBar();

	return (
		<div style={{ backgroundColor: "rgba(255, 255, 255, 0.98)", height: "100vh" }} className="animate__animated animate__fadeInRight">
			<div className="d-flex justify-content-between align-items-center" style={{ borderBottom: "2px solid rgb(30, 198, 119)", padding: ".4rem 1.5rem 1rem 2rem" }}>
				<Logo />

				<IoCloseOutline onClick={closeMenu} size={30} className="mt-2" />
			</div>

			<div className="pt-5 pb-1">
				{navMenuLinks.map(({ heading, links }) => (
					<ul className="mb-5 pb-2">
						<h3 className="mb-5 fs-1 link-bold">{heading}</h3>
						{links.map(({ name, link }) => (
							<li className="mt-4">
								<Link className="link" to={link}>
									{name}
								</Link>
							</li>
						))}
					</ul>
				))}
			</div>

			<div className="row px-3 pb-3" style={{ position: "sticky", bottom: "0%", zIndex: "1", backgroundColor: "rgba(255, 255, 255, 0.98)" }}>
				<div className="col me-2">
					<BtnGreen btnLink="/" btnText="Log In" padding="1.2rem 1rem" />
				</div>
				<div className="col">
					<BtnGreen btnLink="/" btnText="Sign Up" padding="1.2rem 1rem" />
				</div>
			</div>
		</div>
	);
};

export default NavMenu;
