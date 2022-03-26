import styled from "styled-components";

import { useTheme } from "../utils/ScoutThemeProvider";
import { ThemeConfig } from "../utils/ThemeConfig";

//maybe move this to own comp?
const DropdownCont = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	position: absolute;
	right: 0;
	top: 105%;
	width: 250px;
	height: auto;
	background-color: #000;
	padding: 10px;
	z-index: 2;
`;

const SearchDropDown = () => {
	return <DropdownCont></DropdownCont>;
};

export default SearchDropDown;

//To make the search dropdown work, we make a useState (doesnt have to be a provider)
//and make it an array. Using the search bar, we use the api to search the first x amount
//of results and display title only. Only display 3-5 in the window. Fix the height, make it
//a scroll container. At the end of the mapping, have a button/div to display more. When clicked,
//Sends the search results to the main mapping function and automatically scroll down to the anime
//cards section
