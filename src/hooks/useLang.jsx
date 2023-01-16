import { createContext, useContext, useMemo, useState } from 'react';


const LangContex = createContext(null);

export const LangProvider = ({ children }) => {

    const [lang, setLang] = useState('ru');

    const value = useMemo(() => ({
        lang,
        setLang
    }), [lang]);

    return <LangContex.Provider value={value}>
        {children}
    </LangContex.Provider>;
};

export const useLang = () => useContext(LangContex);