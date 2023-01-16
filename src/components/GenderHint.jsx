import { Box } from '@mui/material';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import { useLang } from '../hooks/useLang.jsx';

const GenderHint = () => {
    const { lang } = useLang();

    const maleText = lang === 'ru' ? 'Мужчина' : 'Male';
    const femaleText = lang === 'ru' ? 'Женщина' : 'Female';

    return (
        <Box
            sx={{
                display: 'flex',
                gap: 0.5,
                alignItems: 'center',
                justifyContent: 'end',
                bgcolor: 'background.default',
                color: 'text.primary',
                p: 0.5
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <ManIcon style={{ color: 'blue' }}/> {maleText}
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <WomanIcon style={{ color: 'pink' }}/> {femaleText}
            </Box>

        </Box>
    );
};

export default GenderHint;