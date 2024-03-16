import { BtnMore } from "../btn";

export interface Props {
	heading?: string;
	text?: string;
	image?: string;
	number?: string;
	text_2?: string;
	scale?: string;
}

const textWrapperLeft = ({ heading, text, number }: Props) => {
	return (
		<div className="col-12 col-md d-flex flex-column justify-content-center">
			<h2 className="link-bold col-md-9">{heading}</h2>
			<p className="mb-5 mt-3 col-md-9" style={{ fontSize: "1.5rem", fontWeight: "600" }}>
				{text}
				<sup>{number}</sup>
			</p>
			<BtnMore link="" />
		</div>
	);
};

export default textWrapperLeft;
