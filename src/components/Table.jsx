import { Box, darken, Typography } from '@mui/material';
import MaterialReactTable from 'material-react-table';
import { useMemo } from 'react';
import { usersApi } from '../store/index.js';
import { useThemeMode } from '../theme.js';


const Table = () => {
    const { data, isLoading } = usersApi.useGetUsersQuery('');
    const users = data ? data.users : [];

    const [tableTheme, colorMode] = useThemeMode();

    const columns = useMemo(
        () => [
            {
                accessorFn: (row) => `${row.firstName} ${row.lastName}`,
                id: 'fullname',
                header: 'Full Name'
            },
            {
                accessorKey: 'age',
                header: 'Age'
            },
            {
                accessorKey: 'email',
                header: 'Email'
            },
            {
                accessorKey: 'phone',
                header: 'Phone'
            }
        ],
        []
    );

    if (isLoading) return <div>Loading...</div>;

    return (
        <MaterialReactTable
            columns={columns}
            data={users}
            muiTableBodyProps={{
                sx: (theme) => ({
                    '& tr:nth-of-type(4n+1)': {
                        backgroundColor: darken(theme.palette.background.default, 0.1),
                    },
                }),
            }}
            renderDetailPanel={({ row }) => (
                <Box
                    sx={{
                        display: 'grid',
                        margin: 'auto',
                        gridTemplateColumns: '1fr 1fr',
                        width: '100%'
                    }}
                >
                    <Typography>Address: {row.name}</Typography>
                </Box>
            )}
        />
    )
}

export default Table