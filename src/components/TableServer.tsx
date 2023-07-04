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
import {useServer} from '../hooks/api'
import Modal from "./TableComponents/modal";
import ProgressBar from "./TableComponents/ProgressBar";
import TableHeader from "./TableComponents/TableHeader";

const TableServer: React.FC = () => {

    //Получения данных с функции БД
    const {data} = useServer()


    const [sortBy, setSortBy] = useState<string | null>(null);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [selectedRow, setSelectedRow] = useState<IServer | null>(null);


    //Функция передачи данных в модальное окно
    const handleRowClick = (row: IServer) => {
        setSelectedRow(row);
    };

    //Фунция закрытия модального окна
    const handleCloseModal = () => {
        setSelectedRow(null);
    };

    //Функия сортировки столбцов
    const sortedData = [...data].sort((a, b) => {
        if (sortBy) {
            const sortOrder = sortDirection === 'asc' ? 1 : -1;
            return a[sortBy] > b[sortBy] ? sortOrder : -sortOrder;
        }
        return 0;
    });

    const handleSort = (column: string) => {
        if (column === sortBy) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(column);
            setSortDirection('asc');
        }
    };



    return (
        <>
            <h3>Статус Серверов</h3>
            <TableContainer style={{ maxHeight: '400px', overflow: 'auto', marginTop:"20px" }}>
                <Table style={{ border: '1px solid #C0C0C0' }}>
                    <TableHeader sortBy={sortBy} sortDirection={sortDirection} handleSort={handleSort} table = {'server'} />

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
                                    {row.cpuUsage < 100 && <ProgressBar usage={row.cpuUsage} />}

                                    {row.cpuUsage>100 && <span>{row.cpuUsage}</span>  }
                                </TableCell>
                                <TableCell>{row.memoryUsage}</TableCell>
                                <TableCell>
                                    <ProgressBar usage={row.hddUsage} />
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Modal selectedRow={selectedRow} handleCloseModal={handleCloseModal}  />

        </>
    );
};

export default TableServer;