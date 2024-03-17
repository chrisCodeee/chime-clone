import { Link } from "react-router-dom";
import { footerLinks } from "./useFooter";

const Footer = () => {
	return (
		<div className="row">
			{footerLinks.map(({ heading, links }) => (
				<ul className="mb-5 pb-2 col">
					<h3 className=" link-bold" style={{ fontSize: "1.5rem" }}>
						{heading}
					</h3>
					{links.map(({ name, link }) => (
						<li className="mt-3" style={{ fontSize: "1.3rem" }}>
							<Link className="link" to={link}>
								{name}
							</Link>
						</li>
					))}
				</ul>
			))}

			<ul className="mb-5 pb-2 col">
				<h3 className=" link-bold" style={{ fontSize: "1.5rem" }}>
					heading
				</h3>

				<li className="mt-3" style={{ fontSize: "1.4rem" }}>
					<Link className="link" to="">
						link
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Footer;
