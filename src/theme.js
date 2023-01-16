import { useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import { useTheme } from '@mui/material';


export const useThemeMode = () => {
    const [mode, setMode] = useState('dark');

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
            }
        }),
        [mode]
    );

    const globalTheme = useTheme();
    const tableTheme = useMemo(
        () => {
            return (
                createTheme({
                    palette: {
                        mode: mode,
                        primary: globalTheme.palette.secondary,
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
                        }
                    }
                })
            );

        },
        [mode]
    );

    return [tableTheme, colorMode];
};