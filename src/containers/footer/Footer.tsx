import { Link } from "react-router-dom";
import { footerLinks } from "./useFooter";
import { AppStore, FaceBook, GooglePlay, InstaGram, Twitter } from "../../assets";

const Footer = () => {
	return (
		<div className="row justify-content-center ps-5 ps-lg-0 m-0">
			{footerLinks.map(({ heading, links }) => (
				<ul className="mb-5 pb-2 col-12 col-md-6 col-lg">
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

			<div className=" col-12 col-xl py-5 py-xl-0 px-0 d-flex flex-column flex-lg-row flex-xl-column appWrapper">
				<div className="d-flex flex-column flex-lg-row flex-xl-column align-items-start me-lg-5 me-xl-0">
					<div className="appContainer me-lg-4 mx-xl-auto">
						<Link to="https://apps.apple.com/us/app/chime-mobile-banking/id836215269" target="_blank">
							<img src={AppStore} alt="AppStore" />
						</Link>
					</div>
					<div className="mt-4 mt-lg-0 mt-xl-3 appContainer">
						<Link to="https://play.google.com/store/apps/details?id=com.onedebit.chime&hl=en&pli=1" target="_blank">
							<img src={GooglePlay} alt="GooglePlay" />
						</Link>
					</div>
				</div>

				<div className="d-flex justify-content-xl-between align-items-center mt-5 mt-lg-0 mt-xl-3 pt-xl-5 px-xl-3 pb-4 pb-lg-0">
					<div className="iconContainer me-5 me-xl-0">
						<Link to="https://www.facebook.com/chime" target="_blank">
							<img src={FaceBook} alt="FaceBook" />
						</Link>
					</div>
					<div className="iconContainer me-5 me-xl-0">
						<Link to="https://twitter.com/chime" target="_blank">
							<img src={Twitter} alt="Twitter" />
						</Link>
					</div>
					<div className="iconContainer">
						<Link to="https://www.instagram.com/Chime/" target="_blank">
							<img src={InstaGram} alt="InstaGram" />
						</Link>
					</div>
				</div>
			</div>

			<p></p>
		</div>
	);
};

export default Footer;
