import { BtnMore } from "../btn";
import { Props } from "./textWrapper";

const textWrapperRight = ({ heading, text, number, text_2 }: Props) => {
	return (
		<div className="col-12 col-md d-flex order-1 flex-column justify-content-center textWrapperRight">
			<h2 className="link-bold col-md-11">{heading}</h2>
			<p className="mb-5 mt-3" style={{ fontSize: "1.6rem", fontWeight: "600" }}>
				{text}
				<sup>{number}</sup>
			</p>
			<BtnMore link="" />

			<p style={{ fontSize: "1.2rem" }} className="mt-2">
				{text_2}
			</p>
		</div>
	);
};

export default textWrapperRight;
