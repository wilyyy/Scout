import styled from "styled-components";
import { SearchAlt } from "styled-icons/boxicons-regular";

import { useTheme } from "../utils/ScoutThemeProvider";
import { ThemeConfig } from "../utils/ThemeConfig";

import { useSearch } from "../utils/ScoutThemeProvider";

import axios from "axios";
import qs from "qs";
import { useRouter } from "next/router";
import { useSearchRes } from "../utils/ScoutThemeProvider";

// Search Bar stuff

const SearchContainer = styled.div`
	z-index: 2;
`;

const SearchBarContainer = styled.div`
	width: 250px;
	height: 45px;
	background-color: rgba(196, 196, 196, 0.1);
	box-shadow: inset 3px -3px 3px rgba(149, 149, 149, 0.1),
		inset -3px 3px 3px rgba(255, 255, 255, 0.1);
	border-radius: 15px;
	backdrop-filter: blur(6px) saturate(164%);
	-webkit-backdrop-filter: blur(9px) saturate(164%);
	border: 1px solid #c5c5c5;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2px 15px;
`;

const Icon = styled(SearchAlt)`
	width: 25px;
	height: 25px;
	cursor: pointer;
`;

const Input = styled.input`
	width: 175px;
	height: 30px;
	border-style: none;
	background: none;
	color: ${(props) => props.color};

	:focus {
		outline: none;
	}
`;

const DropdownCont = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	width: 250px;
	height: auto;
	padding: 10px;
	z-index: 2;
	position: absolute;

	box-sizing: border-box;
	border-radius: 16px;
	border: 1px solid #6d7992;

	backdrop-filter: blur(20px) saturate(164%);
	-webkit-backdrop-filter: blur(20px) saturate(164%);
	font-family: ${(props) => props.fontFamily};

	background: linear-gradient(
		135deg,
		${(props) => props.gradient1} 20%,
		${(props) => props.gradient2} 100%
	);
`;

const ListItem = styled.div`
	padding: 4px 14px;
	width: 100%;
	margin: 12px;
	background: rgba(196, 196, 196, 0.1);
	box-shadow: inset 1.33333px -1.33333px 1.33333px rgba(165, 165, 165, 0.4),
		inset -1.33333px 1.33333px 1.33333px rgba(255, 255, 255, 0.4);
	backdrop-filter: blur(13.3333px);
	border-radius: 10px;
	cursor: pointer;
`;

const SearchBar = ({
	onSearchClick,
}) => {
	const { theme } = useTheme();
	const { search, setSearch } = useSearch();

	const router = useRouter();
	const { searchRes, setSearchRes } = useSearchRes();

	const onSearch = async (txt) => {
		setSearch(txt);
		const result = await axios.get("/api/anime", {
			params: {
				txt: txt,
				origin: "dropdownlist",
			},

			paramsSerializer: (params) => {
				return qs.stringify(params, { arrayFormat: "repeat" });
			},
		});

		console.log(result.data);
		setSearchRes(result.data);
	};

	const SearchClick = (o) => {
		router.push(`./anime/${o.uid}`);
		setSearch("");
	};

	return (
		<SearchContainer>
			<SearchBarContainer>
				<Input
					placeholder={"Search"}
					color={ThemeConfig[theme].text}
					onChange={(e) => {
						onSearch(e.target.value);
					}}
				/>
				<Icon onClick={onSearchClick} />
			</SearchBarContainer>
			{search !== "" && (
				<DropdownCont
					gradient1={ThemeConfig[theme].cardGradient}
					gradient2={ThemeConfig[theme].cardGradient2}
				>
					{searchRes.slice(0, 5).map(
						(o, i) => (
							<ListItem key={i} onClick={() => SearchClick(o)}>
								{o.title}
							</ListItem>
						)
					)}
				</DropdownCont>
			)}
		</SearchContainer>
	);
};

export default SearchBar;
