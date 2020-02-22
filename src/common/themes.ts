import {createTheme} from "office-ui-fabric-react";

const greenButtonPalette = {
    themePrimary: "#78ad0e",
    themeLighterAlt: "#050701",
    themeLighter: "#131c02",
    themeLight: "#243404",
    themeTertiary: "#486808",
    themeSecondary: "#6a990c",
    themeDarkAlt: "#83b61f",
    themeDark: "#94c13a",
    themeDarker: "#add165",
    neutralLighterAlt: "#393e43",
    neutralLighter: "#40454b",
    neutralLight: "#4c5157",
    neutralQuaternaryAlt: "#53585f",
    neutralQuaternary: "#595f65",
    neutralTertiaryAlt: "#73787f",
    neutralTertiary: "#dfdfdf",
    neutralSecondary: "#e4e4e4",
    neutralPrimaryAlt: "#e9e9e9",
    neutralPrimary: "#cfcfcf",
    neutralDark: "#f4f4f4",
    black: "#f9f9f9",
    white: "#32363B",
};

const whiteButtonPalette = {
    themePrimary: "white",
    themeLighterAlt: "#767676",
    themeLighter: "#a6a6a6",
    themeLight: "#c8c8c8",
    themeTertiary: "#d0d0d0",
    themeSecondary: "#dadada",
    themeDarkAlt: "#eaeaea",
    themeDark: "#f4f4f4",
    themeDarker: "#f8f8f8",
    neutralLighterAlt: "#393e43",
    neutralLighter: "#40454b",
    neutralLight: "#4c5157",
    neutralQuaternaryAlt: "#53585f",
    neutralQuaternary: "#595f65",
    neutralTertiaryAlt: "#73787f",
    neutralTertiary: "#dfdfdf",
    neutralSecondary: "#e4e4e4",
    neutralPrimaryAlt: "#e9e9e9",
    neutralPrimary: "#cfcfcf",
    neutralDark: "#f4f4f4",
    black: "#f9f9f9",
    white: "#32363B",
};

const redButtonPalette = {
    themePrimary: "#f2635e",
    themeLighterAlt: "#0a0404",
    themeLighter: "#27100f",
    themeLight: "#491e1c",
    themeTertiary: "#913c39",
    themeSecondary: "#d55753",
    themeDarkAlt: "#f4726e",
    themeDark: "#f58784",
    themeDarker: "#f8a6a3",
    neutralLighterAlt: "#262a2f",
    neutralLighter: "#262a2e",
    neutralLight: "#24282c",
    neutralQuaternaryAlt: "#222529",
    neutralQuaternary: "#202328",
    neutralTertiaryAlt: "#1f2226",
    neutralTertiary: "#f0f2f5",
    neutralSecondary: "#f2f4f6",
    neutralPrimaryAlt: "#f5f6f8",
    neutralPrimary: "#e9ecef ",
    neutralDark: "#fafbfb",
    black: "#fcfdfd",
    white: "#272B30",
};

const greyButtonPalette = {
    themePrimary: "#949799",
    themeLighterAlt: "#060606",
    themeLighter: "#181818",
    themeLight: "#2d2d2e",
    themeTertiary: "#595b5c",
    themeSecondary: "#838587",
    themeDarkAlt: "#9fa1a3",
    themeDark: "#adb0b1",
    themeDarker: "#c3c4c6",
    neutralLighterAlt: "#262a2f",
    neutralLighter: "#262a2e",
    neutralLight: "#24282c",
    neutralQuaternaryAlt: "#222529",
    neutralQuaternary: "#202328",
    neutralTertiaryAlt: "#1f2226",
    neutralTertiary: "#f0f2f5",
    neutralSecondary: "#f2f4f6",
    neutralPrimaryAlt: "#f5f6f8",
    neutralPrimary: "#e9ecef",
    neutralDark: "#fafbfb",
    black: "#fcfdfd",
    white: "#272B30",
};

const blueButtonPalette = {
    themePrimary: "#5bc0de",
    themeLighterAlt: "#040809",
    themeLighter: "#0f1f23",
    themeLight: "#1b3943",
    themeTertiary: "#377385",
    themeSecondary: "#50a8c3",
    themeDarkAlt: "#6ac5e1",
    themeDark: "#7fcee6",
    themeDarker: "#9edaec",
    neutralLighterAlt: "#262a2f",
    neutralLighter: "#262a2e",
    neutralLight: "#24282c",
    neutralQuaternaryAlt: "#222529",
    neutralQuaternary: "#202328",
    neutralTertiaryAlt: "#1f2226",
    neutralTertiary: "#f0f2f5",
    neutralSecondary: "#f2f4f6",
    neutralPrimaryAlt: "#f5f6f8",
    neutralPrimary: "#e9ecef",
    neutralDark: "#fafbfb",
    black: "#fcfdfd",
    white: "#272b30",
};

const darkThemePalette  = {
    neutralLighterAlt: "#282828",
    neutralLighter: "#313131",
    neutralLight: "#3f3f3f",
    neutralQuaternaryAlt: "#484848",
    neutralQuaternary: "#4f4f4f",
    neutralTertiaryAlt: "#6d6d6d",
    neutralTertiary: "#c8c8c8",
    neutralSecondary: "#d0d0d0",
    neutralPrimaryAlt: "#dadada",
    neutralPrimary: "#ffffff",
    neutralDark: "#f4f4f4",
    black: "#f8f8f8",
    white: "#1f1f1f",
    themePrimary: "#ffffff",
    themeLighterAlt: "#020609",
    themeLighter: "#091823",
    themeLight: "#112d43",
    themeTertiary: "#235a85",
    themeSecondary: "#3385c3",
    themeDarkAlt: "#4ba0e1",
    themeDark: "#65aee6",
    themeDarker: "#8ac2ec",
    accent: "#3a96dd",
};

const whiteTheme = createTheme({palette: whiteButtonPalette});
const redTheme = createTheme({palette: redButtonPalette});
const greenTheme = createTheme({palette: greenButtonPalette});
const greyTheme = createTheme({palette: greyButtonPalette});
const blueTheme = createTheme({palette: blueButtonPalette});
const darkTheme = createTheme({palette: darkThemePalette});

export function getPrimaryWhiteTheme() {
    return whiteTheme;
}

export function getPrimaryRedTheme() {
    return redTheme;
}

export function getPrimaryGreenTheme() {
    return greenTheme;
}

export function getPrimaryGreyTheme() {
    return greyTheme;
}

export function getPrimaryBlueTheme() {
    return blueTheme;
}

export function getDarkTheme() {
    return darkTheme;
}
