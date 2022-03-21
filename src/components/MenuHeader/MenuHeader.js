import { useState } from "react";
import Menu from "../Menu/Menu";
import NavBar from "../NavBar/NavBar";

const MenuHeader = ({ bgActive }) => {
	const [isActive, setActive] = useState(null)
	const onClickButton = () => {
		setActive(prevState => !prevState);
	};

	return (
		<>
			<NavBar isActive={isActive} onClickButton={onClickButton} bgActive={bgActive} />
			<Menu isActive={isActive} onClickButton={onClickButton} />
		</>
	);
};

export default MenuHeader;
