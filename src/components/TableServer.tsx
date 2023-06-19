import React, { useState  } from 'react';
import {
    Table,
    TableContainer,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TableSortLabel
} from '@material-ui/core';
import {IServer} from '../types/types';
import { useServer} from '../hooks/api'
import  getColor  from '../hooks/getColor'
import ModalServer from "./Modal/ModalServer";







const TableServer: React.FC = () => {

    const {data} = useServer()


    const [sortBy, setSortBy] = useState<string | null>(null);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [selectedRow, setSelectedRow] = useState<IServer | null>(null);

    const handleSort = (column: string) => {
        if (column === sortBy) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(column);
            setSortDirection('asc');
        }
    };

    const handleRowClick = (row: IServer) => {
        setSelectedRow(row);
    };

    const handleCloseModal = () => {
        setSelectedRow(null);
    };

    const sortedData = [...data].sort((a, b) => {
        if (sortBy) {
            const sortOrder = sortDirection === 'asc' ? 1 : -1;
            return a[sortBy] > b[sortBy] ? sortOrder : -sortOrder;
        }
        return 0;
    });



    return (
        <>
            <h3>Статус Серверов</h3>
            <TableContainer style={{ maxHeight: '400px', overflow: 'auto', marginTop:"20px" }}>
                <Table style={{ border: '1px solid #C0C0C0' }}>
                    <TableHead style={{ position: 'sticky', top: 0, zIndex: 1, background: 'white' }}>
                        <TableRow>
                            <TableCell style={{ width: '5%' }}>
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

                            <TableCell style={{ width: '5%' }}>
                                <TableSortLabel
                                    active={sortBy === 'idDeviceUsb'}
                                    direction={sortDirection}
                                    onClick={() => handleSort('idDeviceUsb')}
                                >
                                    Ид. устройства USB
                                </TableSortLabel>
                            </TableCell>

                            <TableCell style={{ width: '5%' }}>
                                <TableSortLabel
                                    active={sortBy === 'regFile'}
                                    direction={sortDirection}
                                    onClick={() => handleSort('regFile')}
                                >
                                    Рег файл
                                </TableSortLabel>
                            </TableCell>

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
                    <TableBody>
                        {sortedData.map((row, index) => (
                            <TableRow key={index} onClick={() => handleRowClick(row)}>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.ipAddressServer}</TableCell>
                                <TableCell>{row.idDeviceUsb}</TableCell>
                                <TableCell>{row.regFile}</TableCell>
                                <TableCell>{row.os}</TableCell>
                                <TableCell>{row.timeStart}</TableCell>
                                <TableCell>{row.version}</TableCell>
                                <TableCell>
                                    { row.cpuUsage<100 && <div
                                        style={{
                                            position: 'relative',
                                            width: '100%',
                                            height: '20px',
                                            borderRadius: '10px',
                                            background: 'silver',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: `${row.cpuUsage}%`,
                                                height: '100%',
                                                borderRadius: '5px',
                                                background: getColor(row.cpuUsage),
                                            }}
                                        />
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                color: 'white',
                                                fontWeight: 'bold',
                                                fontSize: '12px',
                                            }}
                                        >
                                            {row.cpuUsage}%
                                        </div>
                                    </div>}
                                    {row.cpuUsage>100 && <span>{row.cpuUsage}</span>  }
                                </TableCell>
                                <TableCell>{row.memoryUsage}</TableCell>
                                <TableCell>
                                    <div
                                        style={{
                                            position: 'relative',
                                            width: '100%',
                                            height: '20px',
                                            borderRadius: '10px',
                                            background: 'silver',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: `${row.hddUsage}%`,
                                                height: '100%',
                                                borderRadius: '10px',
                                                background: getColor(row.hddUsage),
                                            }}
                                        />
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                color: 'white',
                                                fontWeight: 'bold',
                                                fontSize: '12px',
                                            }}
                                        >
                                            {row.hddUsage}%
                                        </div>
                                    </div>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <ModalServer selectedRow={selectedRow} handleCloseModal={handleCloseModal}  />

        </>
    );
};

export default TableServer;