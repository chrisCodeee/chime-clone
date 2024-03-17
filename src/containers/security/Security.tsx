import { Text } from "../../components";
import { securityText } from "./useSecurityDetails";

const Security = () => {
	return (
		<div className="col-12 col-md mt-md-5">
			{securityText.map(({ heading, text }) => (
				<Text key={heading} heading={heading} text={text} />
			))}
		</div>
	);
};

export default Security;
