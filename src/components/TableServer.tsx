import React, { useState  } from 'react';
import {
    Table,
    TableContainer,
    TableBody,
} from '@material-ui/core';
import {IServer} from '../types/types';
import {useServer} from '../hooks/api'
import Modal from "./TableComponents/modal";
import TableHeader from "./TableComponents/TableHeader";
import TableRowServer from "./TableComponents/TableRow/TableRowServer";

const TableServer: React.FC = () => {

    //Получения данных с функции БД
    const {data} = useServer()


    const [sortBy, setSortBy] = useState<string | null>(null);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [selectedRow, setSelectedRow] = useState<IServer | null>(null);


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
                            <TableRowServer
                                row={row}
                                index={index}
                                setSelectedRow={setSelectedRow}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Modal selectedRow={selectedRow} handleCloseModal={handleCloseModal}  />

        </>
    );
};

export default TableServer;