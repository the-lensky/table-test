import { LangProvider } from './hooks/useLang.jsx';
import { ColorModeProvider } from './hooks/useMode.jsx';
import { usersApi } from './store/index.js';
import Table from './components/Table.jsx';
import Toolbox from './components/Toolbox.jsx';
import Loader from './components/Loader.jsx';

const App = () => {
    const { isLoading } = usersApi.useGetUsersQuery('');

    if (isLoading) return <Loader/>;


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