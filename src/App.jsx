import React, { FC, useMemo } from 'react';
import { usersApi } from './store';
import MaterialReactTable from 'material-react-table';
import { Box, Typography } from '@mui/material';

const App = () => {
    const { data, isLoading } = usersApi.useGetUsersQuery('');
    const users = data ? data.users : [];
    console.log('users:', users);
    const columns = useMemo(
        () => [
            {
                accessorKey: 'firstName',
                header: 'Full Name',
            },
            {
                accessorKey: 'lastName',
                header: 'Last Name'
            },
            {
                accessorKey: 'email',
                header: 'Email'
            }
        ],
        []
    );

    if (isLoading) return <div>Loading...</div>

    return (
        <MaterialReactTable
            columns={columns}
            data={users}
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
    );
};

export default App;
