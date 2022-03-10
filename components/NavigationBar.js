import Link from "next/link";
import styled from "styled-components";
import { SunFill } from "@styled-icons/bootstrap/SunFill";
import { MoonStarsFill } from "@styled-icons/bootstrap/MoonStarsFill";
import { Filter } from "@styled-icons/ionicons-solid/Filter";
import ReactSwitch from "react-switch";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";

import { useTheme } from "../utils/ScoutThemeProvider";
import { ThemeConfig } from "../utils/ThemeConfig";
import { HoverZoom } from "../utils/Animations";
import { DarkColors, LightColors } from "../utils/ThemeConfig";
import SearchBar from "./SearchBar";

const Container = styled.div`
	width: 80vw;
	height: 54px;
	font-family: "Poppins";
	font-weight: 200;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 50px;

	h1:hover {
		cursor: pointer;
	}
`;

const Row = styled.div`
	${({ links }) =>
		links &&
		`
        width: 25%;
        min-width: 300px;
        height: 54px;
        justify-content: space-between;
        font-size: 1.6em;
    `}

	${({ right }) =>
		right &&
		`
        min-width: 450px;
        width: 40%;
        height: 75px;
        justify-content: space-between;
    `}

    font-family: "Poppins";
	font-weight: 300;
	display: flex;
	align-items: center;

	a:hover {
		cursor: pointer;
	}
`;

const SunIcon = styled(SunFill)`
	width: 20px;
	height: 20px;
	margin-left: 5px;
`;

const MoonIcon = styled(MoonStarsFill)`
	width: 20px;
	height: 20px;
	margin-left: 5px;
`;

const FilterIcon = styled(Filter)`
	width: 40px;
	height: 26px;
	cursor: pointer;
`;

const AvatarCont = styled(motion.div)`
	width: 75px;
	height: 75px;
	border-radius: 100px;
	overflow: hidden;
`;

const NavigationBar = ({
	onYourListClick,
	onProfileClick,
	onFilterClick,
	onSearchClick = () => {},
}) => {
	const router = useRouter();
	const { theme, setTheme } = useTheme();

	return (
		<Container>
			<motion.h1
				whileHover={HoverZoom.hover}
				whileTap={HoverZoom.tap}
				transition={HoverZoom.spring}
				onClick={() => router.push("/")}
			>
				Scout
			</motion.h1>
			<Row links>
				<motion.a
					whileHover={HoverZoom.hover}
					whileTap={HoverZoom.tap}
					transition={HoverZoom.spring}
					onClick={() => router.push("/")}
				>
					Home
				</motion.a>
				<motion.a
					whileHover={HoverZoom.hover}
					whileTap={HoverZoom.tap}
					transition={HoverZoom.spring}
					onClick={onYourListClick}
				>
					Your List
				</motion.a>
			</Row>
			<Row right>
				<SearchBar onSearchClick={onSearchClick} />
				<FilterIcon onClick={onFilterClick} />
				<ReactSwitch
					onChange={() => {
						setTheme(theme === "light" ? "dark" : "light");
					}}
					checked={theme === "light" ? false : true}
					offColor="#E0E0E0"
					offHandleColor={DarkColors.Gunmetal}
					onColor="#1C2A36"
					onHandleColor={LightColors.PapayaWhip}
					activeBoxShadow="0px 0px 1px 2px #fffc35"
					uncheckedIcon={<SunIcon />}
					checkedIcon={<MoonIcon />}
				/>
				<AvatarCont
					whileHover={HoverZoom.hover}
					whileTap={HoverZoom.tap}
					transition={HoverZoom.spring}
					onClick={onProfileClick}
				>
					<img src="https://placekitten.com/100/100" alt="profile image" />
				</AvatarCont>
			</Row>
		</Container>
	);
};

export default NavigationBar;
