import { Logo } from "..";
import { IoCloseOutline } from "react-icons/io5";
import { useNavBar } from "../../state-mangement";
import { Link } from "react-router-dom";
import { BtnGreen } from "../btn";

const NavMenu = () => {
	const { closeMenu } = useNavBar();

	const navMenuLinks = [
		{
			heading: "Benefits",
			links: [
				{ name: "No Monthly Fees", link: "" },
				{ name: "Free Debit Card", link: "" },
				{ name: "Fee-Free Overdraft", link: "" },
				{ name: "Build Credit", link: "" },
				{ name: "Get Paid Early", link: "" },
				{ name: "60,000+ Fee-Free ATMs", link: "" },
				{ name: "High Yield Savings Account", link: "" },
				{ name: "Send and Receive Money", link: "" },
				{ name: "Security and Control", link: "" },
			],
		},

		{
			heading: "Accounts",
			links: [
				{ name: "Checking Account", link: "" },
				{ name: "Credit Builder", link: "" },
				{ name: "Savings Account", link: "" },
			],
		},

		{
			heading: "Who We are",
			links: [
				{ name: "About Us", link: "" },
				{ name: "In the News", link: "" },
				{ name: "Chime Financial, Inc.", link: "" },
				{ name: "In the Community", link: "" },
				{ name: "Careers", link: "" },
			],
		},

		{
			heading: "Learn",
			links: [
				{ name: "Blog", link: "" },
				{ name: "Help Center", link: "" },
				{ name: "FAQs", link: "" },
				{ name: "Online Banking", link: "" },
				{ name: "Second Chance Banking", link: "" },
				{ name: "Tax Refund", link: "" },
				{ name: "Mobile Banking", link: "" },
			],
		},
	];

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
