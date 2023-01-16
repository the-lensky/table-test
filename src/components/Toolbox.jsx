import LangSwitcher from './LangSwitcher.jsx';
import ThemeSwitcher from './ThemeSwitcher.jsx';
import GenderHint from './GenderHint.jsx';
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
            <GenderHint/>
            <LangSwitcher/>
            <ThemeSwitcher/>
        </Box>
    );
};

export default Toolbox;