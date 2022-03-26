import styled from "styled-components";
import { Router, useRouter } from "next/router";
import { LightColors, ThemeConfig } from "@/utils/ThemeConfig";

import ServerUrl from "@/utils/ServerUrl";
import NavigationBar from "@/components/NavigationBar";
import PollCard from "@/components/PollCard";
import DragPollCard from "@/components/DragPollCard";
import PollSearch from "@/components/PollSearch";
import Button from "@/components/Button";
import SettingsModal from "@/components/SettingsModal";
import Dropzone from "@/components/Dropzone";
import { TouchBackend } from "react-dnd-touch-backend";
import { DndProvider } from "react-dnd";
import { v4 as uuidv4 } from "uuid";

import ClickAwayListener from "@mui/material/ClickAwayListener";

import axios from "axios";
import qs from "qs";
import { useEffect, useState, useRef } from "react";

import {
	useTheme,
	useGenre,
	useScore,
	useEpisodes,
	useSortKey,
	useSortType,
	useSearch,
	useData,
	useYourList,
	usePollList,
} from "@/utils/ScoutThemeProvider";

const Page = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	margin-top: 20px;
	height: 95vh;
`;

const Header = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 200px;
`;

const PollCont = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	height: 100%;
`;

const PollSearchCont = styled.div`
	width: 60%;
	height: auto;
	z-index: 7;
	position: relative;
`;

const PollDropDown = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
	height: auto;
	position: absolute;
	padding: 10px;
	box-sizing: border-box;
	border-radius: 5px;
	border: 1px solid #6d7992;
	backdrop-filter: blur(20px) saturate(164%);
	-webkit-backdrop-filter: blur(20px) saturate(164%);
	font-family: ${(props) => props.fontFamily};
	background: linear-gradient(
		135deg,
		${(props) => props.gradient1} 20%,
		${(props) => props.gradient2} 100%
	);
	box-shadow: inset 43.3333px -43.3333px 43.3333px rgba(149, 149, 149, 0.1),
		inset -43.3333px 43.3333px 43.3333px rgba(255, 255, 255, 0.1);
`;

const ListItem = styled.div`
	padding: 4px 14px;
	width: 100%;
	margin: 2px;
	background: rgba(196, 196, 196, 0.1);
	box-shadow: inset 1.33333px -1.33333px 1.33333px rgba(165, 165, 165, 0.4),
		inset -1.33333px 1.33333px 1.33333px rgba(255, 255, 255, 0.4);
	backdrop-filter: blur(13.3333px);
	border-radius: 10px;
	cursor: pointer;
`;

const Row = styled.div`
	display: flex;
`;

const DropRow = styled.div`
	display: flex;
	width: 80%;
	justify-content: space-between;
`;

const DarkenBackground = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: ${(props) => props.darkz};
	opacity: ${(props) => props.darkop};
	transition: opacity 0.5s;
`;

const Poll = () => {
	const router = useRouter();
	const [modalVisible, setModalVisible] = useState(false);
	const [pollSearchRes, setPollSearchRes] = useState([]);
	const [pollSearchQuery, setPollSearchQuery] = useState("");
	const [open, setOpen] = useState(false);
	const [inSession, setInSession] = useState(false);
	const r = useRouter();
	const { uuid } = r.query;
	const [watch, setWatch] = useState({});
	const [noWatch, setNoWatch] = useState({});

	const { theme } = useTheme();
	const [data, setData] = useState([]);
	const { genre } = useGenre();
	const { score } = useScore();
	const { episodes } = useEpisodes();
	const { sortKey } = useSortKey();
	const { sortType } = useSortType();
	const { search, setSearch } = useSearch();
	const { pollList, setPollList } = usePollList();

	useEffect(() => {
		const GetAnime = async () => {
			const result = await axios.get("/api/anime");
			setData(result.data);
		};

		GetAnime();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const FullSearch = async () => {
		const res = await axios.get("/api/anime", {
			params: {
				txt: search,
				genreFilter: genre,
				scoreFilter: score,
				episodeFilter: episodes,
				sortKeyFilter: sortKey,
				sortTypeFilter: sortType,
			},

			paramsSerializer: (params) => {
				return qs.stringify(params, { arrayFormat: "repeat" });
			},
		});

		setData(res.data);
		ref.current.scrollIntoView({ behavior: "smooth" });
	};

	const SettingsAppear = () => {
		setModalVisible(true);
	};

	const SettingsExit = () => {
		setModalVisible(false);
	};

	const onSearch = async (txt) => {
		setPollSearchQuery(txt);
		const result = await axios.get("/api/anime", {
			params: {
				txt: txt,
				origin: "dropdownlist",
				sortKeyFilter: "title",
				sortTypeFilter: "asc",
			},

			paramsSerializer: (params) => {
				return qs.stringify(params, { arrayFormat: "repeat" });
			},
		});
		setPollSearchRes(result.data);
	};

	const ClickAway = () => {
		setOpen(false);
	};

	const ClickOn = () => {
		setOpen(true);
	};

	const truncateString = (string, limit) => {
		if (string.length > limit) {
			return string.substring(0, limit) + "...";
		} else {
			return string;
		}
	};

	const AddToPoll = (obj) => {
		const newPoll = {
			...pollList,
		};

		newPoll[obj.uid] = obj;
		setPollList(newPoll);
		setOpen(false);
	};

	const RemoveFromPoll = (obj) => {
		const newPoll = {
			...pollList,
		};

		delete newPoll[obj.uid];
		setPollList(newPoll);
	};

	const HandleUpdateWatchPoll = (id, pollData) => {
		watch[id] = {
			...watch[id],
			...pollData,
		};

		setWatch({
			...watch,
		});
	};

	const HandleUpdateNoWatchPoll = (id, pollData) => {
		noWatch[id] = {
			...noWatch[id],
			...pollData,
		};

		setNoWatch({
			...noWatch,
		});
	};

	if (inSession === false) {
		return (
			<Page>
				<DarkenBackground
					darkz={open === true || modalVisible === true ? 5 : -5}
					darkop={open === true || modalVisible === true ? 1 : 0}
					onClick={SettingsExit}
				/>
				<NavigationBar
					onSearchClick={FullSearch}
					onFilterClick={SettingsAppear}
					onYourListClick={() => router.push(`./yourlist/${uuidv4()}`)}
				/>
				<PollCont>
					<SettingsModal
						tcolor={LightColors.PapayaWhip}
						ExitClick={SettingsExit}
						setScaleFactor={modalVisible ? 1 : 0.5}
						setOp={modalVisible ? 1 : 0}
						setZ={modalVisible ? 10 : -10}
					/>
					<Header>
						<h2>Start A Poll</h2>
						<p>
							Search for an Anime that you would like your friends to vote on whether or not
							they want to watch it!
						</p>
						<ClickAwayListener onClickAway={ClickAway}>
							<PollSearchCont>
								<PollSearch
									onChange={(e) => {
										onSearch(e.target.value);
									}}
									onClick={ClickOn}
								/>
								{pollSearchQuery !== "" && open && (
									<PollDropDown
										gradient1={ThemeConfig[theme].cardGradient}
										gradient2={ThemeConfig[theme].cardGradient2}
									>
										{pollSearchRes.slice(0, 10).map((o, i) => (
											<ListItem key={i} onClick={() => AddToPoll(o)}>
												{o.title}
											</ListItem>
										))}
									</PollDropDown>
								)}
							</PollSearchCont>
						</ClickAwayListener>
					</Header>
					<Row>
						{Object.values(pollList).map((o, i) => (
							<PollCard
								key={i}
								onDelete={() => RemoveFromPoll(o)}
								title={truncateString(o.title, 60)}
								imglink={o.img_url}
							/>
						))}
					</Row>
					<Row>
						<Button btnmargin="0 50px" btnText="Reset" onClick={() => setPollList([])} />
						<Button btnmargin="0 50px" btnText="Confirm" onClick={() => setInSession(true)} />
					</Row>
				</PollCont>
			</Page>
		);
	} else if (inSession === true) {
		return (
			<Page>
				<DarkenBackground
					darkz={open === true || modalVisible === true ? 5 : -5}
					darkop={open === true || modalVisible === true ? 1 : 0}
					onClick={SettingsExit}
				/>
				<NavigationBar
					onSearchClick={FullSearch}
					onFilterClick={SettingsAppear}
					onYourListClick={() => router.push(`./yourlist/${uuidv4()}`)}
				/>
				<PollCont>
					<SettingsModal
						tcolor={LightColors.PapayaWhip}
						ExitClick={SettingsExit}
						setScaleFactor={modalVisible ? 1 : 0.5}
						setOp={modalVisible ? 1 : 0}
						setZ={modalVisible ? 10 : -10}
					/>
					<Header>
						<h2>Start A Poll</h2>
						<p>
							Search for an Anime that you would like your friends to vote on whether or not
							they want to watch it!
						</p>
					</Header>
					<DropRow>
						<DndProvider
							backend={TouchBackend}
							options={{
								enableTouchEvents: false,
								enableMouseEvents: true,
							}}
						>
							{
								<Dropzone
									onDropItem={(item) => {
										const newID = uuidv4();
										setNoWatch((prev) => ({
											...prev,
											[newID]: {
												id: newID,
												title: item.title,
												imglink: item.imglink,
												uid: item.uid,
											},
										}));
										const newPoll = {
											...pollList,
										};

										delete newPoll[item.uid];
										setPollList(newPoll);
									}}
								>
									{Object.values(noWatch).map((o) => (
										<PollCard
											title={o.title}
											imglink={o.imglink}
											type="pollCard"
											key={o.uid}
											pollCardPos={o.pos}
											onUpdatePollCard={(obj) => HandleUpdateNoWatchPoll(o.id, obj)}
											displayDelete="none"
										/>
									))}
								</Dropzone>
							}
							{Object.values(pollList).map((o, i) => (
								<DragPollCard
									key={o.uid}
									title={truncateString(o.title, 60)}
									imglink={o.img_url}
									uid={o.uid}
								/>
							))}
							{
								<Dropzone
									onDropItem={(item) => {
										const newID = uuidv4();
										console.log(item);
										setWatch((prev) => ({
											...prev,
											[newID]: {
												id: newID,
												title: item.title,
												imglink: item.imglink,
												uid: item.uid,
											},
										}));
										const newPoll = {
											...pollList,
										};

										delete newPoll[item.uid];
										setPollList(newPoll);
									}}
								>
									{Object.values(watch).map((o) => (
										<PollCard
											title={o.title}
											imglink={o.imglink}
											type="pollCard"
											key={o.uid}
											pollCardPos={o.pos}
											onUpdatePollCard={(obj) => HandleUpdateWatchPoll(o.id, obj)}
											displayDelete="none"
										/>
									))}
								</Dropzone>
							}
						</DndProvider>
					</DropRow>
					<button onClick={() => console.log(pollList)}>Press Me</button>
				</PollCont>
			</Page>
		);
	}
};

export default Poll;
