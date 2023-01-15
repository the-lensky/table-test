import React, { useState, useMemo } from 'react';
import { usersApi } from './store';
import { createTheme, ThemeProvider, useTheme } from '@mui/material';
import MaterialReactTable from 'material-react-table';
import { Box, Typography } from '@mui/material';
import { darken } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Table from './components/Table.jsx';

const ColorModeContext = React.createContext({
    toggleColorMode: () => {
    }
});

const App = () => {


    const globalTheme = useTheme();
    const [mode, setMode] = useState('light')

    function handleChangeMode() {
        setMode( mode => mode === 'light' ? 'dark' : 'light')
    }

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
                                ? 'rgba(0, 0, 0, 0.87);'
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
    const colorMode = React.useContext(ColorModeContext);




    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={tableTheme}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgColor: 'background.default',
                        color: 'text.primary',
                        borderRadius: 1,
                        p: 3
                    }}
                >
                    {tableTheme.palette.mode} mode
                    <IconButton sx={{ ml: 1 }} onClick={handleChangeMode} color="inherit">
                        {tableTheme.palette.mode === 'dark' ? <Brightness7Icon/> : <Brightness4Icon/>}
                    </IconButton>
                </Box>
                <Table />
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default App;