import { useState } from "react";
import Menu from "../Menu/Menu";
import NavBar from "../NavBar/NavBar";

const MenuHeader = () => {
	const [isActive, setActive] = useState(false);
	const onClickButton = () => {
		setActive(!isActive);
	};

	return (
		<>
			<NavBar isActive={isActive} onClickButton={onClickButton} />
			<Menu isActive={isActive} />
		</>
	);
};

export default MenuHeader;
