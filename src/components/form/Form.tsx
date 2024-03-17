import { useState } from "react";

const Form = () => {
	const [email, setEmail] = useState("");
	return (
		<form>
			<input type="email" value={email} placeholder="Enter your email" className="w-100 py-3 ps-5" style={{ borderRadius: "5px" }} onChange={(e) => setEmail(e.target.value)} />
		</form>
	);
};

export default Form;
