import { Link } from "react-router-dom";
import { BtnGreen } from "../../components/btn";
import { Form } from "../../components";

const GetStarted = () => {
	return (
		<div className="col-12 col-md d-flex flex-column justify-content-center">
			<h2 className="link-bold col-md-9">Get started</h2>
			<p className="mb-4 mt-3 col-md-10" style={{ fontSize: "1.5rem", fontWeight: "600" }}>
				Applying for an account is free and takes less than 2 minutes. It won’t affect your credit score!
			</p>
			<div className="col-md-10">
				<Form />
			</div>
			<div className="d-md-flex mt-3">
				<BtnGreen btnLink="" btnText="Sign up" padding=".7rem 2.5rem" />
			</div>
			<p className="mt-1 col-12 col-md-10" style={{ fontSize: "1.15rem" }}>
				Learn how we collect and use your information by visiting our
				<Link to="">
					<strong> Privacy Notice</strong>
				</Link>
			</p>
		</div>
	);
};

export default GetStarted;
