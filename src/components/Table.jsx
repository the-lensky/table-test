import { Avatar, Box, darken, Typography } from '@mui/material';
import MaterialReactTable from 'material-react-table';
import { useMemo } from 'react';
import { usersApi } from '../store/index.js';


const Table = () => {
    const { data, isLoading } = usersApi.useGetUsersQuery('');
    const users = data ? data.users : [];
    console.log('users', users);
    const initialState = {
        showGlobalFilter: true,
    }

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
                header: 'Phone',
            }
        ],
        []
    );

    if (isLoading) return <div>Loading...</div>;

    return (
        <MaterialReactTable
            columns={columns}
            data={users}
            initialState={initialState}
            enableGlobalFilter
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
                        display: 'flex',
                        margin: 'auto',
                        gap: 2,
                        alignItems: 'center',
                        width: '100%',
                        fontSize: 0.875
                    }}
                >
                    <Avatar alt="Remy Sharp" src={row.original.image} />
                    <Typography>Address: {row.original.address.address}</Typography>
                </Box>
            )}
            muiTablePaginationProps={{
                rowsPerPageOptions: [5, 10, 30]
            }}
        />
    )
}

export default Table