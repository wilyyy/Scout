import styled from "styled-components";
import { useTheme } from "@/utils/ScoutThemeProvider";
import { ThemeConfig } from "@/utils/ThemeConfig";
import { SearchAlt } from "styled-icons/boxicons-regular";

const PollSearchCont = styled.div`
	width: 100%;
	height: 60px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	background-color: rgba(196, 196, 196, 0.1);
	border-radius: 15px;
	box-shadow: inset 7.06667px -7.06667px 7.06667px rgba(165, 165, 165, 0.4),
		inset -7.06667px 7.06667px 7.06667px rgba(255, 255, 255, 0.4);
	backdrop-filter: blur(70.6667px);
	border: 1px solid #c5c5c5;
	padding: 10px;
`;

const PollSearchBar = styled.input`
	width: 100%;
	height: 100%;
	background: transparent;
	border-radius: 15px;
	border: transparent;
	text-align: center;
	font-family: "Poppins";
	font-size: 24px;
	line-height: 36px;
	font-weight: 400;
	color: ${(props) => props.txtcolor};
	display: flex;
	justify-content: flex-end;
	:focus {
		outline: none;
	}
`;

const PollSearch = ({ onChange = () => {}, onClick = () => {} }) => {
	const { theme } = useTheme();

	return (
		<PollSearchCont>
			<PollSearchBar
				onChange={onChange}
				txtcolor={ThemeConfig[theme].body}
				placeholder="Search for an Anime"
				onClick={onClick}
			/>
			<SearchAlt size={35} />
		</PollSearchCont>
	);
};

export default PollSearch;
