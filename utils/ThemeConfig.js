// have static colors just in case for specific use? idk
const DarkColors = {
    Gunmetal: "#1C2A36",
    Pumpkin: "#F4A259",
    White: "#FFFFFF",
    //glass colors
    BlueGlass: "rgba(42, 76, 198, 0)",
    OrangeGlass: "rgba(246, 119, 79, 0.2)",

    //card stuff
    FadedWhite: "rgba(255, 255, 255, 0.7)",
    SoftWhite: "rgba(196, 196, 196, 0.12)",
}

const LightColors = {
    PapayaWhip: "#FEF2DC",
    Denim: '#175DAF',
    //glass
    BlackGlass: "rgba(0, 5, 21, 0.09)",

    //cardstuff
    OffGray: "rgba(105, 105, 105, 0.12)"
};

export const ThemeConfig = {
    dark: {
        background: DarkColors.Gunmetal,
        text: DarkColors.Pumpkin,
        
        //card
        cardHeader: DarkColors.White,
        cardText: DarkColors.FadedWhite,
        cardBackground: DarkColors.SoftWhite
    },
    light: {
        background: LightColors.PapayaWhip,
        text: LightColors.Denim,
        
        //card
        cardHeader: DarkColors.Gunmetal,
        cardText: DarkColors.Gunmetal,
        cardBackground: LightColors.OffGray
    }
}