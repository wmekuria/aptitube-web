import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#F5F6F9',
            main: '#C3FF5B',
            dark: '#000',
            contrastText: '#FFF',
        },
        secondary: {
            light: '#FFFFFF',
            main: '#000',
            dark: '#8FCC23',
            contrastText: '#FFFFFF',
        },
        tertiary:{

        }

    },
    typography: {
            fontFamily: "'Work Sans', sans-serif",
            fontSize: 14,
            fontWeightLight: 600, // Work Sans
            fontWeightRegular: 600, // Work Sans
            fontWeightMedium: 600, // Roboto Condensed
            fontFamilySecondary: "'Roboto Condensed', sans-serif",
        },
});

export default theme;