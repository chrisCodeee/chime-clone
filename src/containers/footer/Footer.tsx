import { Link } from "react-router-dom";
import { footerLinks } from "./useFooter";
import { AppStore, FaceBook, GooglePlay, InstaGram, Twitter } from "../../assets";

const Footer = () => {
	return (
		<div className="row justify-content-center px-4 ps-lg-0 m-0">
			{footerLinks.map(({ heading, links }) => (
				<ul className="mb-5 pb-2 col-12 col-md-6 col-lg">
					<h3 className=" link-bold" style={{ fontSize: "1.5rem" }}>
						{heading}
					</h3>
					{links.map(({ name, link }) => (
						<li className="mt-3" style={{ fontSize: "1.3rem" }}>
							<Link className="link" to={link} style={{ color: "rgb(116, 117, 140)", fontWeight: "500" }}>
								{name}
							</Link>
						</li>
					))}
				</ul>
			))}

			<div className=" col-12 col-xl py-lg-4 py-xl-0 px-0 d-flex flex-column align-items-start align-items-lg-center flex-lg-row flex-xl-column appWrapper">
				<div className="appContainer d-flex flex-column flex-lg-row flex-xl-column align-items-start me-lg-0 me-xl-0">
					<div className="me-lg-4 mx-xl-auto">
						<Link to="https://apps.apple.com/us/app/chime-mobile-banking/id836215269" target="_blank">
							<img src={AppStore} alt="AppStore" />
						</Link>
					</div>
					<div className="mt-5 mt-lg-0 mt-xl-3">
						<Link to="https://play.google.com/store/apps/details?id=com.onedebit.chime&hl=en&pli=1" target="_blank">
							<img src={GooglePlay} alt="GooglePlay" />
						</Link>
					</div>
				</div>

				<div className="socialMediaWrapper d-flex justify-content-xl-between align-items-center mt-xl-5">
					<div className="iconContainer me-md-1 me-xl-0">
						<Link to="https://www.facebook.com/chime" target="_blank">
							<img src={FaceBook} alt="FaceBook" />
						</Link>
					</div>
					<div className="iconContainer me-md-1 me-xl-0">
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

			<div className="footer_copywrite-container py-4 mt-5" style={{ color: "rgb(116, 117, 140)", fontWeight: "500", fontSize: "1.08rem", borderTop: "1px solid rgba(116, 117, 140, .3)" }}>
				<p className="pt-5">
					Chime<sup className="fs-6">®</sup> is a financial technology company, not a bank. Banking services are provided by The Bancorp Bank, N.A. or Stride Bank, N.A., Members FDIC. The Chime Visa® Debit Card and the Chime Credit Builder Visa<sup className="fs-6">®</sup> Credit Card are issued by The Bancorp Bank, N.A. or Stride Bank pursuant to a license from Visa U.S.A. Inc. and may be used
					everywhere Visa debit and credit cards are accepted. Please see the back of your Card for its issuing bank.
				</p>
				<p> While Chime doesn’t issue personal checkbooks to write checks, Chime Checkbook gives you the freedom to send checks to anyone, anytime, from anywhere. See your issuing bank’s Deposit Account Agreement for full Chime Checkbook details.</p>
				<p> By clicking on some of the links above, you will leave the Chime website and be directed to a third-party website. The privacy practices of those third parties may differ from those of Chime. We recommend you review the privacy statements of those third party websites, as Chime is not responsible for those third parties' privacy or security practices.</p>
				<p> Opinions, advice, services, or other information or content expressed or contributed here by customers, users, or others are those of the respective author(s) or contributor(s) and do not necessarily state or reflect those of The Bancorp Bank, N.A. and Stride Bank, N.A. (“Banks”). Banks are not responsible for the accuracy of any content provided by author(s) or contributor(s).</p>
				<p>Third-party trademarks referenced for informational purposes only; no endorsements implied.</p>
				<p>#1 Most Loved Banking App Source: Chime received the highest 2022 Qualtrics® NPS score.</p>
				<p>
					<sup>1</sup> Out-of-network ATM withdrawal and OTC advance fees may apply. View The{" "}
					<Link to="" style={{ fontWeight: "500", textDecoration: "underline" }}>
						Bancorp agreement
					</Link>{" "}
					or{" "}
					<Link to="" style={{ fontWeight: "500", textDecoration: "underline" }}>
						Stride agreement
					</Link>{" "}
					for details; see back of card for issuer.
				</p>
				<p>
					<sup>2</sup> SpotMe® on Credit is an optional, no interest / no fee overdraft line of credit tied to the Secured Deposit Account available to qualifying members with an active Chime Credit Builder Account. SpotMe on Debit is an optional, no fee overdraft service attached to the Chime Checking Account available to qualifying members after Visa debit card activation. Both SpotMe on Credit
					and SpotMe on Debit are sometimes collectively referred to as "SpotMe" or, if you have signed up to use SpotMe with only one account, "SpotMe" means the elected service. To qualify for SpotMe, you must receive $200 or more in qualifying direct deposits to your Chime Checking Account each month. <br /> Qualifying members will be allowed to overdraw their Chime Checking Account and/or
					Secured Deposit Account (associated with your Chime Credit Builder credit card) up to $20, but may be later eligible for a higher limit of up to $200 or more based on Chime account history, direct deposit frequency and amount, spending activity and other risk-based factors. The SpotMe limit will be displayed within the Chime mobile app and is subject to change at any time, at Chime’s
					sole discretion. Although Chime does not charge any overdraft fees for SpotMe, there may be out-of-network or third-party fees associated with ATM transactions. SpotMe Debit{" "}
					<Link to="" style={{ fontWeight: "500", textDecoration: "underline" }}>
						Terms and Conditions
					</Link>{" "}
					and SpotMe on Credit{" "}
					<Link to="" style={{ fontWeight: "500", textDecoration: "underline" }}>
						Terms and Conditions.
					</Link>{" "}
				</p>
				<p>
					<sup>3</sup> Early access to direct deposit funds depends on the timing of the submission of the payment file from the payer. We generally make these funds available on the day the payment file is received, which may be up to 2 days earlier than the scheduled payment date.
				</p>
				<p>
					<sup>4</sup> Out-of-network ATM withdrawal fees may apply except at MoneyPass ATMs in a 7-Eleven, or any Allpoint or Visa Plus Alliance ATM.
				</p>
				<p>
					<sup>5</sup> Based on a representative study conducted by Experian®, members who made their first purchase with Credit Builder between June 2020 and October 2020 observed an average FICO® Score 8 increase of 30 points after approximately 8 months. On-time payment history can have a positive impact on your credit score. Late payment may negatively impact your credit score.
				</p>
				<p>
					<sup>6</sup> To apply for Credit Builder, you must have received a single qualifying direct deposit of $200 or more to your Chime Checking Account. The qualifying direct deposit must be from your employer, payroll provider, gig economy payer, or benefits payer by Automated Clearing House (ACH) deposit OR Original Credit Transaction (OCT). Bank ACH transfers, Pay Anyone transfers,
					verification or trial deposits from financial institutions, peer-to-peer transfers from services such as PayPal, Cash App, or Venmo, mobile check deposits, cash loads or deposits, one-time direct deposits, such as tax refunds and other similar transactions, and any deposit to which Chime deems to not be a qualifying direct deposit are not qualifying direct deposits.
				</p>
				<p>
					<sup>7</sup> Sometimes instant transfers can be delayed. The recipient must use a valid debit card to claim funds. See your issuing bank’s Deposit Account Agreement for full Pay Anyone Transfers details.{" "}
					<Link to="" style={{ fontWeight: "500", textDecoration: "underline" }}>
						See Terms and Conditions
					</Link>{" "}
					<Link to="" style={{ fontWeight: "500", textDecoration: "underline" }}>
						See Terms and Conditions
					</Link>{" "}
				</p>
				<p>
					<sup>8</sup> The Annual Percentage Yield ("APY") for the Chime Savings Account is variable and may change at any time. The disclosed APY is effective as of September 20, 2023. No minimum balance required. Must have $0.01 in savings to earn interest.
				</p>
				<p>
					<Link to="" style={{ fontWeight: "500", textDecoration: "underline" }}>
						Licenses
					</Link>{" "}
					<br /> Chime Capital, LLC, Nationwide Multistate Licensing System ("NMLS") ID 2316451
				</p>
				<p>Address: 101 California Street, Floor 5, San Francisco, CA 94111, United States.</p>
				<p>
					<b>No customer support available at HQ.</b> Customer support details available on the website.
				</p>
				<p>© 2013-2024 Chime Financial, Inc. All rights reserved.</p>
			</div>
		</div>
	);
};

export default Footer;
