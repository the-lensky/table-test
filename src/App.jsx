import React, { FC, useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Typography } from '@mui/material';

const Example = () => {
    const columns = useMemo(
        () => [
            {
                accessorKey: 'id',
                header: 'ID',
                size: 50
            },
            {
                accessorKey: 'name',
                header: 'First Name'
            },
            {
                accessorKey: 'lastName',
                header: 'Last Name'
            }
        ],
        []
    );

    const data = [
        {
            name: 'name1',
            id: 1,
            lastName: 'lastName1'
        },
        {
            name: 'name2',
            id: 2,
            lastName: 'lastName2'
        },
        {
            name: 'name3',
            id: 3,
            lastName: 'lastName3'
        }
    ];

    return (
        <MaterialReactTable
            columns={columns}
            data={data}
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

export default Example;
