import React, { useState  } from 'react';
import {
    Table,
    TableContainer,
    TableBody,
    TableRow,
    TableCell,
} from '@material-ui/core';
import {IClient} from "../types/types"
import {useClients} from '../hooks/api'
import ProgressBar from "./TableComponents/ProgressBar";
import Modal from "./TableComponents/modal";
import TableHeader from './TableComponents/TableHeader'

const TableClient: React.FC = () => {

    // Получение данных с БД
    const {data} = useClients()


    const [sortBy, setSortBy] = useState<string | null>(null);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [selectedRow, setSelectedRow] = useState<IClient | null>(null);



    //Функция передачи данных в модальное окно
    const handleRowClick = (row: IClient) => {
        setSelectedRow(row);
    };

    //Функция Закрытия модального окна
    const handleCloseModal = () => {
        setSelectedRow(null);
    };

    // Сортировка столбцов
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
            <h3>Статус Клиента</h3>
            <TableContainer style={{ maxHeight: '400px', overflow: 'auto', marginTop:"20px" }}>
                <Table style={{ border: '1px solid #C0C0C0' }}>
                    <TableHeader sortBy={sortBy} sortDirection={sortDirection} handleSort={handleSort} table = {'client'} />

                    <TableBody>
                        {sortedData.map((row, index) => (
                            <TableRow key={index} onClick={() => handleRowClick(row)}>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.ipAddressServer}</TableCell>
                                <TableCell>{row.user}</TableCell>
                                <TableCell>{row.os}</TableCell>
                                <TableCell>{row.timeStart}</TableCell>
                                <TableCell>{row.version}</TableCell>
                                <TableCell>
                                    { row.cpuUsage<100 && <ProgressBar usage={row.cpuUsage}/>}
                                    {row.cpuUsage>100 && <span>{row.cpuUsage}</span>  }
                                </TableCell>
                                <TableCell>{row.memoryUsage}</TableCell>
                                <TableCell>
                                    <ProgressBar usage={row.hddUsage}/>
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

export default TableClient;