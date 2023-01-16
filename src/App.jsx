import { ThemeProvider } from '@mui/material';
import { useThemeMode } from './theme';
import { LangProvider } from './hooks/useLang.jsx';
import Table from './components/Table.jsx';
import Toolbox from './components/Toolbox.jsx';


const App = () => {
    const [tableTheme, colorMode] = useThemeMode();

    return (
        <LangProvider>
            <ThemeProvider theme={tableTheme}>
                <Toolbox/>
                <Table/>
            </ThemeProvider>
        </LangProvider>
    );
};

export default App;