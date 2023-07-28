import React from 'react';
import { TableHead, TableRow, TableCell, TableSortLabel } from '@mui/material';
import {useTheme} from "@mui/material/styles";

interface TableHeaderProps {
    sortBy: string | null;
    sortDirection: 'asc' | 'desc';
    handleSort: (column: string) => void;
    table : string
}

const TableHeader: React.FC<TableHeaderProps> = ({ sortBy, sortDirection, handleSort, table }) => {
    const  theme  = useTheme();
    const borderTop = { borderTop: `1px solid ${theme.palette.divider}` };

    return (
        <TableHead  >
            <TableRow >
                <TableCell style={{ width: '7%' }}  sx={{padding: '10px', borderTop}} >
                    <TableSortLabel
                        active={sortBy === 'name'}
                        direction={sortDirection}
                        onClick={() => handleSort('name')}
                        sx={{ml: '20px'}}
                    >
                        Имя
                    </TableSortLabel>
                </TableCell>

                <TableCell style={{ width: '10%' }} sx={{padding: '5px', borderTop}}>
                    <TableSortLabel
                        active={sortBy === 'ipAddressServer'}
                        direction={sortDirection}
                        onClick={() => handleSort('ipAddressServer')}
                        sx={{ml: '20px'}}
                    >
                        IP адресс сервера
                    </TableSortLabel>
                </TableCell>

                { table === 'client' &&
                    <TableCell style={{width: '10%'}} sx={{padding: '5px', borderTop}}>
                    <TableSortLabel
                        active={sortBy === 'user'}
                        direction={sortDirection}
                        onClick={() => handleSort('user')}
                    >
                        Пользователь
                    </TableSortLabel>
                </TableCell>
                }

                { table === 'server' &&
                    <TableCell style={{width: '5%'}} sx={{padding: '5px', borderTop}}>
                    <TableSortLabel
                        active={sortBy === 'idDeviceUsb'}
                        direction={sortDirection}
                        onClick={() => handleSort('idDeviceUsb')}

                    >
                        Ид.устройства USB
                    </TableSortLabel>
                </TableCell>
                }

                { table === 'server' &&
                    <TableCell style={{ width: '7%' }} sx={{padding: '5px', borderTop}}>
                        <TableSortLabel
                            active={sortBy === 'regFile'}
                            direction={sortDirection}
                            onClick={() => handleSort('regFile')}

                        >
                            Рег файл
                        </TableSortLabel>
                    </TableCell>
                }

                <TableCell style={{ width: '15%' }} sx={{padding: '5px', borderTop}}>
                    <TableSortLabel
                        active={sortBy === 'os'}
                        direction={sortDirection}
                        onClick={() => handleSort('os')}
                        sx={{ml: '50px'}}
                    >
                        ОС
                    </TableSortLabel>
                </TableCell>

                <TableCell style={{ width: '15%' }} sx={{padding: '5px', borderTop}}>
                    <TableSortLabel
                        active={sortBy === 'timeStart'}
                        direction={sortDirection}
                        onClick={() => handleSort('timeStart')}
                        sx={{ml: '20px'}}
                    >
                        Время старта
                    </TableSortLabel>
                </TableCell>

                <TableCell style={{ width: '10%' }} sx={{padding: '5px', borderTop}}>
                    <TableSortLabel
                        active={sortBy === 'version'}
                        direction={sortDirection}
                        onClick={() => handleSort('version')}

                    >
                        Версия
                    </TableSortLabel>
                </TableCell>

                <TableCell style={{ width: '10%' }} sx={{padding: '5px', borderTop}}>
                    <TableSortLabel
                        active={sortBy === 'cpuUsage'}
                        direction={sortDirection}
                        onClick={() => handleSort('cpuUsage')}

                    >
                        CPU usage
                    </TableSortLabel>
                </TableCell>

                <TableCell style={{ width: '10%' }} sx={{padding: '5px', borderTop}}>
                    <TableSortLabel
                        active={sortBy === 'memoryUsage'}
                        direction={sortDirection}
                        onClick={() => handleSort('memoryUsage')}

                    >
                        Memory usage
                    </TableSortLabel>
                </TableCell>

                <TableCell style={{ width: '10%' }} sx={{padding: '5px', borderTop}}>
                    <TableSortLabel
                        active={sortBy === 'hddUsage'}
                        direction={sortDirection}
                        onClick={() => handleSort('hddUsage')}

                    >
                        HDD usage
                    </TableSortLabel>
                </TableCell>
            </TableRow>
        </TableHead>
    );
};

export default TableHeader;
