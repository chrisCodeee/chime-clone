import { ReactNode } from "react";

interface Props {
	children?: ReactNode;
}

const TextContainer = ({ children }: Props) => {
	return <div className="row mx-0 mt-big px-3 px-md-0">{children}</div>;
};

export default TextContainer;
