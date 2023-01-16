import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Brightness7Icon from '@mui/icons-material/Brightness7.js';
import Brightness4Icon from '@mui/icons-material/Brightness4.js';
import { useMode } from '../hooks/useMode.jsx';


const ThemeSwitcher = () => {
    const { colorMode, theme } = useMode();

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'end',
                bgcolor: 'background.default',
                color: 'text.primary',
                p: 0.5
            }}
        >
            <IconButton
                sx={{ ml: 1 }}
                onClick={colorMode.toggleColorMode}
                color="inherit"
            >
                {theme.palette.mode === 'dark' ? <Brightness7Icon/> : <Brightness4Icon/>}
            </IconButton>
        </Box>
    );
};

export default ThemeSwitcher;