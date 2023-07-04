import React from 'react';
import { TableHead, TableRow, TableCell, TableSortLabel } from '@material-ui/core';

interface TableHeaderProps {
    sortBy: string | null;
    sortDirection: 'asc' | 'desc';
    handleSort: (column: string) => void;
    table : string
}

const TableHeader: React.FC<TableHeaderProps> = ({ sortBy, sortDirection, handleSort, table }) => {
    return (
        <TableHead style={{ position: 'sticky', top: 0, zIndex: 1, background: 'white' }}>
            <TableRow>
                <TableCell style={{ width: '10%' }}>
                    <TableSortLabel
                        active={sortBy === 'name'}
                        direction={sortDirection}
                        onClick={() => handleSort('name')}
                    >
                        Имя
                    </TableSortLabel>
                </TableCell>

                <TableCell style={{ width: '10%' }}>
                    <TableSortLabel
                        active={sortBy === 'ip-address-server'}
                        direction={sortDirection}
                        onClick={() => handleSort('ip-address-server')}
                    >
                        IP адресс сервера
                    </TableSortLabel>
                </TableCell>

                { table === 'client' &&
                    <TableCell style={{width: '10%'}}>
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
                    <TableCell style={{width: '5%'}}>
                    <TableSortLabel
                        active={sortBy === 'idDeviceUsb'}
                        direction={sortDirection}
                        onClick={() => handleSort('idDeviceUsb')}
                    >
                        Ид. устройства USB
                    </TableSortLabel>
                </TableCell>
                }

                { table === 'server' &&
                    <TableCell style={{ width: '5%' }}>
                        <TableSortLabel
                            active={sortBy === 'regFile'}
                            direction={sortDirection}
                            onClick={() => handleSort('regFile')}
                        >
                            Рег файл
                        </TableSortLabel>
                    </TableCell>
                }

                <TableCell style={{ width: '15%' }}>
                    <TableSortLabel
                        active={sortBy === 'os'}
                        direction={sortDirection}
                        onClick={() => handleSort('os')}
                    >
                        ОС
                    </TableSortLabel>
                </TableCell>

                <TableCell style={{ width: '15%' }}>
                    <TableSortLabel
                        active={sortBy === 'timeStart'}
                        direction={sortDirection}
                        onClick={() => handleSort('timeStart')}
                    >
                        Время старта
                    </TableSortLabel>
                </TableCell>

                <TableCell style={{ width: '10%' }}>
                    <TableSortLabel
                        active={sortBy === 'version'}
                        direction={sortDirection}
                        onClick={() => handleSort('version')}
                    >
                        Версия
                    </TableSortLabel>
                </TableCell>

                <TableCell style={{ width: '10%' }}>
                    <TableSortLabel
                        active={sortBy === 'cpuUsage'}
                        direction={sortDirection}
                        onClick={() => handleSort('cpuUsage')}
                    >
                        CPU usage
                    </TableSortLabel>
                </TableCell>

                <TableCell style={{ width: '10%' }}>
                    <TableSortLabel
                        active={sortBy === 'memoryUsage'}
                        direction={sortDirection}
                        onClick={() => handleSort('memoryUsage')}
                    >
                        Memory usage
                    </TableSortLabel>
                </TableCell>

                <TableCell style={{ width: '10%' }}>
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
