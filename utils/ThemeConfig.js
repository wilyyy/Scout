// have static colors just in case for specific use? idk
export const DarkColors = {
    Gunmetal: "#1C2A36",
    Pumpkin: "#F4A259",
    White: "#FFFFFF",
    OpaqueWhite: "rgba(255, 255, 255, 0.7)",
    OffWhite: "rgba(196, 196, 196, 0.12)",
    //glass colors
    BlueGlass: "rgba(42, 76, 198, 0)",
    OrangeGlass: "rgba(246, 119, 79, 0.2)"
}

export const LightColors = {
    PapayaWhip: "#FEF2DC",
    Denim: '#175DAF',
    OffGray: "rgba(0, 5, 21, 0.09)",
    //glass
    BlackGlass: "rgba(0, 5, 21, 0.09)"
};

export const ThemeConfig = {
    dark: {
        background: DarkColors.Gunmetal,
        text: DarkColors.Pumpkin,
        cardHeader: DarkColors.White,
        cardText: DarkColors.OpaqueWhite,
        cardBackground: DarkColors.OffWhite,
        body: "#fff"
    },
    light: {
        background: LightColors.PapayaWhip,
        text: LightColors.Denim,
        cardHeader: DarkColors.Gunmetal,
        cardText: DarkColors.Gunmetal,
        cardBackground: LightColors.OffGray,
        body: "#000"
    }
}