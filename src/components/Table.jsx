import { useMemo } from 'react';
import { useLang } from '../hooks/useLang.jsx';
import { usersApi } from '../store/index.js';
import MaterialReactTable from 'material-react-table';
import { Avatar, Box, Button, CircularProgress, darken, Tooltip, Typography } from '@mui/material';
import { MRT_Localization_RU } from 'material-react-table/locales/ru.js';
import { MRT_Localization_EN } from 'material-react-table/locales/en';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { ExportToCsv } from 'export-to-csv';

const Table = () => {
    const { data } = usersApi.useGetUsersQuery('');
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
                header: lang === 'ru' ? 'Имя' : 'Full Name',
                Cell: ({ cell }) => (
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 1,
                            alignItems: 'center',
                            width: '100%'
                        }}
                    >
                        <Tooltip
                            title={lang === 'ru' ? 'Пол' : 'Gender'}
                            placement="left"
                            style={{
                                cursor: 'pointer',
                                fontSize: '20',
                                color: cell.row.original.gender === 'male' ? 'blue' : 'pink'
                            }}
                        >
                            {cell.gender === 'male'
                                ? <ManIcon/>
                                : <WomanIcon/>
                            }
                        </Tooltip>
                        <Typography>{cell.getValue()}</Typography>
                    </Box>
                )
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

    const handleExportDataPDF = () => {
        const doc = new jsPDF();
        doc.autoTable({
            theme: 'grid',
            html: 'table'
        });
        doc.save('table.pdf');
    };

    const csvOptions = {
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalSeparator: '.',
        showLabels: true,
        useBom: true,
        useKeysAsHeaders: false,
        headers: columns.map((c) => c.header)
    };

    const csvExporter = new ExportToCsv(csvOptions);

    const handleExportDataCSV = () => {
        csvExporter.generateCsv(users);
    };


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
            renderTopToolbarCustomActions={({ table }) => (
                <Box
                    sx={{ display: 'flex', gap: '1', p: '0.5rem', flexWrap: 'wrap' }}
                >
                    <Button
                        sx={{
                            display: 'flex',
                            gap: '4',
                            justifyContent: 'center',
                            alignItems: 'center',
                            background: 'background.default'
                        }}
                        onClick={handleExportDataPDF}
                    >
                        <FileDownloadIcon/> {lang === 'ru' ? 'Экспорт данных PDF' : 'Export Data PDF'}
                    </Button>
                    <Button
                        sx={{
                            display: 'flex',
                            gap: '4',
                            justifyContent: 'center',
                            alignItems: 'center',
                            background: 'background.default'
                        }}
                        onClick={handleExportDataCSV}
                    >
                        <FileDownloadIcon/> {lang === 'ru' ? 'Экспорт данных CSV' : 'Export Data CSV'}
                    </Button>
                </Box>
            )}
        />
    );
};

export default Table;