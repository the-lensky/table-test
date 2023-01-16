import LangSwitcher from './LangSwitcher.jsx';
import ThemeSwitcher from './ThemeSwitcher.jsx';
import { Box } from '@mui/material';

const Toolbox = () => {

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
            <LangSwitcher/>
            <ThemeSwitcher/>
        </Box>
    );
};

export default Toolbox;