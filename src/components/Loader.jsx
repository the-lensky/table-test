import { Box, CircularProgress } from '@mui/material';

const Loader = () => {

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '90vh'
            }}
        >
            <CircularProgress/>
        </Box>
    );
};

export default Loader;