import { Logo } from "..";
import { IoCloseOutline } from "react-icons/io5";
import { useNavBar } from "../../state-mangement";

const NavMenu = () => {
	const { closeMenu } = useNavBar();
	const style = {
		height: "100vh",
		backgroundColor: "rgba(255, 255, 255, 0.98)",
		padding: ".4rem 1.5rem 1rem 2rem",
	};

	return (
		<div style={style}>
			<div className="d-flex justify-content-between align-items-center">
				<Logo />
				<IoCloseOutline onClick={closeMenu} size={30} className="mt-2" />
			</div>
		</div>
	);
};

export default NavMenu;
