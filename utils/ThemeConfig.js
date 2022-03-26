// have static colors just in case for specific use? idk
export const DarkColors = {
	Gunmetal: "#1C2A36",
	Pumpkin: "#F4A259",
	White: "#FFFFFF",
	//glass colors
	BlueGlass: "rgba(42, 76, 198, 0)",
	OrangeGlass: "rgba(246, 119, 79, 0.2)",
	OffGrayGlass: "rgba(196, 196, 196, 0.12)",

	//card stuff
	FadedWhite: "rgba(255, 255, 255, 0.7)",
	SoftWhite: "rgba(196, 196, 196, 0.12)",
};

export const LightColors = {
	PapayaWhip: "#EFEFEF",
	Denim: "#175DAF",
	//glass
	BlackGlass: "rgba(0, 0, 0, 0.12)",

	//cardstuff
};

export const ThemeConfig = {
	dark: {
		background: DarkColors.Gunmetal,
		text: DarkColors.Pumpkin,
		//animepagecard
		cardGradient: DarkColors.BlueGlass,
		cardGradient2: DarkColors.OrangeGlass,
		//card
		cardHeader: DarkColors.White,
		cardText: DarkColors.FadedWhite,
		cardBackground: DarkColors.OffGrayGlass,

		body: "#fff",
	},
	light: {
		background: LightColors.PapayaWhip,
		text: LightColors.Denim,
		//animepagecard
		cardGradient: LightColors.BlackGlass,
		cardGradient2: LightColors.BlackGlass,
		//card
		cardHeader: DarkColors.Gunmetal,
		cardText: DarkColors.Gunmetal,
		cardBackground: LightColors.BlackGlass,
		body: "#000",
	},
};
