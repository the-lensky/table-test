import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import LanguageIcon from '@mui/icons-material/Language';
import { useLang } from '../hooks/useLang.jsx';


const LangSwitcher = () => {
    const { lang, setLang } = useLang();

    const handleLang = () => {
        setLang(prev => prev === 'ru' ? 'en' : 'ru');
    };
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
                sx={{
                    ml: 1,
                    fontSize: 16
                }}
                color="inherit"
                onClick={handleLang}
            >
                <LanguageIcon/> {lang}
            </IconButton>
        </Box>
    );
};

export default LangSwitcher;