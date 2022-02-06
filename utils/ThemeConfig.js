// have static colors just in case for specific use? idk
const DarkColors = {
    Gunmetal: "#1C2A36",
    Pumpkin: "#F4A259",
    White: "#FFFFFF",
    OffWhite: "rgba(196, 196, 196, 0.12)",
}

const LightColors = {
    PapayaWhip: "#FEF2DC",
    Denim: '#175DAF'
};

export const ThemeConfig = {
    dark: {
        background: DarkColors.Gunmetal,
        text: DarkColors.Pumpkin,
        altText: DarkColors.White,
        cardBackground: DarkColors.OffWhite
    },
    light: {
        background: LightColors.PapayaWhip,
        text: LightColors.Denim
    }
}