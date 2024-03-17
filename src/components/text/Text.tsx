interface SecurityProps {
	heading: string;
	text: string;
}
const Text = ({ heading, text }: SecurityProps) => {
	return (
		<div className="pb-5">
			<h3 className="link-bold pb-3" style={{ fontSize: "2.2rem" }}>
				{heading}
			</h3>
			<p style={{ fontWeight: "600" }}>{text}</p>
		</div>
	);
};

export default Text;
