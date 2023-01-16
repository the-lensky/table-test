import { LangProvider } from './hooks/useLang.jsx';
import { ColorModeProvider } from './hooks/useMode.jsx';
import Table from './components/Table.jsx';
import Toolbox from './components/Toolbox.jsx';

const App = () => {

    return (
        <LangProvider>
            <ColorModeProvider>
                <Toolbox/>
                <Table/>
            </ColorModeProvider>
        </LangProvider>
    );
};

export default App;