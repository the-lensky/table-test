import { ThemeProvider } from '@mui/material';
import { useThemeMode } from './theme';
import Table from './components/Table.jsx';
import ThemeSwitcher from './components/ThemeSwitcher.jsx';


const App = () => {
    const [tableTheme, colorMode] = useThemeMode();

    return (
            <ThemeProvider theme={tableTheme}>
                <ThemeSwitcher tableTheme={tableTheme} colorMode={colorMode}/>
                <Table/>
            </ThemeProvider>
    );
};

export default App;