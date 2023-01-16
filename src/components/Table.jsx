import { Avatar, Box, darken, Typography } from '@mui/material';
import MaterialReactTable from 'material-react-table';
import { useMemo } from 'react';
import { usersApi } from '../store/index.js';
import { MRT_Localization_RU } from 'material-react-table/locales/ru.js';
import { MRT_Localization_EN } from 'material-react-table/locales/en';
import { useLang } from '../hooks/useLang.jsx';

const Table = () => {
    const { data, isLoading } = usersApi.useGetUsersQuery('');
    const users = data ? data.users : [];
    const { lang } = useLang();
    const localization = lang === 'ru' ? MRT_Localization_RU : MRT_Localization_EN;
    const initialState = {
        showGlobalFilter: true
    };

    const columns = useMemo(
        () => [
            {
                accessorFn: (row) => `${row.firstName} ${row.lastName}`,
                id: 'fullname',
                header: lang === 'ru' ? 'Имя' : 'Full Name'
            },
            {
                accessorKey: 'age',
                header: lang === 'ru' ? 'Возраст' : 'Age'
            },
            {
                accessorKey: 'email',
                header: lang === 'ru' ? 'Почтовый ящик' : 'Email'
            },
            {
                accessorKey: 'phone',
                header: lang === 'ru' ? 'Номер телефона' : 'Phone Number'
            }
        ],
        [lang]
    );


    if (isLoading) return <div>Loading...</div>;

    return (
        <MaterialReactTable
            columns={columns}
            data={users}
            initialState={initialState}
            localization={localization}
            enableGlobalFilter
            muiTableBodyProps={{
                sx: (theme) => ({
                    '& tr:nth-of-type(4n+1)': {
                        backgroundColor: darken(theme.palette.background.default, 0.1)
                    }
                })
            }}
            renderDetailPanel={({ row }) => (
                <Box
                    sx={{
                        display: 'flex',
                        margin: 'auto',
                        gap: 2,
                        alignItems: 'center',
                        width: '100%',
                        fontSize: 0.875
                    }}
                >
                    <Avatar alt="Remy Sharp" src={row.original.image}/>
                    <Typography>{lang === 'ru' ? 'Адрес:' : 'Address:'} {row.original.address.address}</Typography>
                </Box>
            )}
            muiTablePaginationProps={{
                rowsPerPageOptions: [5, 10, 30]
            }}
        />
    );
};

export default Table;