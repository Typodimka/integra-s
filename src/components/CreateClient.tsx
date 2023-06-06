import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    {
        field: 'Name',
        headerName: 'Имя',
        width: 150,
        type: 'string'

    },
    {
        field: 'IpAdress',
        headerName: 'IP адрес сервера',
        width: 150,
        type: 'string'

    },
    {
        field: 'User',
        headerName: 'Пользователь',
        width: 150,
        type: 'string'

    },
    {
        field: 'OC',
        headerName: 'ОС',
        type: 'string',
        width: 200
    },
    {
        field: 'TimeStart',
        headerName: 'Время старта',
        type: 'number',
        width: 200
    },
    {
        field: 'Version',
        headerName: 'Версия',
        type: 'number',
        width: 150
    },
    {
        field: 'CpuUsage',
        headerName: 'CPU usage',
        type: 'number',
        width: 150
    },
    {
        field: 'MemoryUsage',
        headerName: 'Memory usage',
        type: 'number',
        width: 150
    },
    {
        field: 'HddUsage',
        headerName: 'HDD usage',
        type: 'number',
        width: 150
    }

];

const rows = [
    { id: 1, Name: 'DVR-0074', IpAdress: '192.168.40.107', User: 'Guest', OC: "Astra Linux 1.7 x86-64", TimeStart: '2022-11-03 16:28:13.962 ',
        Version: '7.0.938', CpuUsage: 56 +' %', MemoryUsage: 18216, HddUsage: 43+' %' },
    { id: 2, Name: 'DVR-0074', IpAdress: '192.168.40.107', User: 'Guest', OC: "Astra Linux 1.7 x86-64", TimeStart: '2022-11-03 16:28:13.962 ',
        Version: '7.0.938', CpuUsage: 867, MemoryUsage: 18216, HddUsage: 80+' %' },
    { id: 3, Name: 'DVR-0074', IpAdress: '192.168.40.107', User: 'Guest', OC: "Astra Linux 1.7 x86-64", TimeStart: '2022-11-03 16:28:13.962 ',
        Version: '7.0.938', CpuUsage: 56 +' %', MemoryUsage: 18216, HddUsage: 43+' %' },
    { id: 4, Name: 'DVR-0074', IpAdress: '192.168.40.107', User: 'Guest', OC: "Astra Linux 1.7 x86-64", TimeStart: '2022-11-03 16:28:13.962 ',
        Version: '7.0.938', CpuUsage: 867, MemoryUsage: 18216, HddUsage: 80+' %' },
    { id: 5, Name: 'DVR-0074', IpAdress: '192.168.40.107', User: 'Guest', OC: "Astra Linux 1.7 x86-64", TimeStart: '2022-11-03 16:28:13.962 ',
        Version: '7.0.938', CpuUsage: 56 +' %', MemoryUsage: 18216, HddUsage: 43+' %' },
    { id: 6, Name: 'DVR-0074', IpAdress: '192.168.40.107', User: 'Guest', OC: "Astra Linux 1.7 x86-64", TimeStart: '2022-11-03 16:28:13.962 ',
        Version: '7.0.938', CpuUsage: 867, MemoryUsage: 18216, HddUsage: 80+' %' },
    { id: 7, Name: 'DVR-0074', IpAdress: '192.168.40.107', User: 'Guest', OC: "Astra Linux 1.7 x86-64", TimeStart: '2022-11-03 16:28:13.962 ',
        Version: '7.0.938', CpuUsage: 56 +' %', MemoryUsage: 18216, HddUsage: 43+' %' },
    { id: 8, Name: 'DVR-0074', IpAdress: '192.168.40.107', User: 'Guest', OC: "Astra Linux 1.7 x86-64", TimeStart: '2022-11-03 16:28:13.962 ',
        Version: '7.0.938', CpuUsage: 867, MemoryUsage: 18216, HddUsage: 80+' %' },
    { id: 9, Name: 'DVR-0074', IpAdress: '192.168.40.107', User: 'Guest', OC: "Astra Linux 1.7 x86-64", TimeStart: '2022-11-03 16:28:13.962 ',
        Version: '7.0.938', CpuUsage: 56 +' %', MemoryUsage: 18216, HddUsage: 43+' %' },
    { id: 1, Name: 'DVR-0074', IpAdress: '192.168.40.107', User: 'Guest', OC: "Astra Linux 1.7 x86-64", TimeStart: '2022-11-03 16:28:13.962 ',
        Version: '7.0.938', CpuUsage: 867, MemoryUsage: 18216, HddUsage: 80+' %' }






];

export default function CreateClient() {
    return (

        <Box sx={{ height: 600, width: '100%', marginTop: '30px' }}>
            <h2>Статус клиентов</h2>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                pageSizeOptions={[5]}

                disableRowSelectionOnClick
            />
        </Box>
    );
}

