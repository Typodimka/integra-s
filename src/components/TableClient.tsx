import React, { useState  } from 'react';
import {
    Table,
    TableContainer,
    TableBody
} from '@material-ui/core';
import {IClient} from "../types/types"
import Modal from "./TableComponents/modal";
import TableHeader from './TableComponents/TableHeader'
import TableRowClient from "./TableComponents/TableRow/TableRowClient";
import {useClients} from "../hooks/api";

const TableClient: React.FC = () => {

    const {data} = useClients()



    const [sortBy, setSortBy] = useState<string | null>(null);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [selectedRow, setSelectedRow] = useState<IClient | null>(null);

    //Функция Закрытия модального окна
    const handleCloseModal = () => {
        setSelectedRow(null);
    };



    const handleSort = (column: string) => {
        if (column === sortBy) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(column);
            setSortDirection('asc');
        }
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
            <h3>Статус Клиента</h3>
            <TableContainer style={{ maxHeight: '400px', overflow: 'auto', marginTop:"20px" }}>
                <Table style={{ border: '1px solid #C0C0C0' }}>
                    <TableHeader sortBy={sortBy} sortDirection={sortDirection} handleSort={handleSort} table = {'client'} />

                    <TableBody>
                        {sortedData.map((row, index) => (
                        <TableRowClient
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

export default TableClient;