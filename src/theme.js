import { useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import { useTheme } from '@mui/material';


export const useThemeMode = () => {
    const [mode, setMode] = useState('dark');

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
            }
        }),
        [mode]
    );

    const globalTheme = useTheme();
    const tableTheme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    primary: globalTheme.palette.secondary,
                    info: {
                        main: 'rgb(255,122,0)',
                    },
                    background: {
                        default:
                            globalTheme.palette.mode === mode
                                ? 'rgb(254,255,244)'
                                : '#000'
                    },
                    color: {
                        default:
                            globalTheme.palette.mode === mode
                                ? '#000'
                                : 'rgb(254,255,244)'
                    },
                },
                typography: {
                    button: {
                        textTransform: 'none', //customize typography styles for all buttons in table by default
                        fontSize: '1.2rem',
                    },
                },
                components: {
                    MuiTooltip: {
                        styleOverrides: {
                            tooltip: {
                                fontSize: '1.1rem', //override to make tooltip font size larger
                            },
                        },
                    },
                    MuiSwitch: {
                        styleOverrides: {
                            thumb: {
                                color: 'pink', //change the color of the switch thumb in the columns show/hide menu to pink
                            },
                        },
                    },
                },
            }),
        [mode],
    );
    return [tableTheme, colorMode];
};