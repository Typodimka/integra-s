import React, { useState } from 'react';
import {
    Table,
    TableContainer,
    TableBody,
    TextField,
} from '@material-ui/core';
import { IClient } from "../types/types";
import Modal from "./TableComponents/Modal/modal";
import TableHeader from './TableComponents/TableHeader/TableHeader';
import TableRowClient from "./TableComponents/TableRow/TableRowClient";
import { useClients } from "../hooks/api";

const TableClient: React.FC = () => {
    const { data } = useClients();

    const [sortBy, setSortBy] = useState<string | null>(null);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [selectedRow, setSelectedRow] = useState<IClient | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');

    // Функция Закрытия модального окна
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

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const filteredData = data.filter((row) => {
        // Фильтрацию по каждому столбцу
        return (
            row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            row.ipAddressServer.toLowerCase().includes(searchQuery.toLowerCase()) ||
            row.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
            row.os.toLowerCase().includes(searchQuery.toLowerCase()) ||
            row.timeStart.toLowerCase().includes(searchQuery.toLowerCase()) ||
            row.version.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    const sortedData = [...filteredData].sort((a, b) => {
        if (sortBy) {
            const sortOrder = sortDirection === 'asc' ? 1 : -1;
            return a[sortBy] > b[sortBy] ? sortOrder : -sortOrder;
        }
        return 0;
    });

    return (
        <>
            <div style ={{display: 'flex'}}>
                <h3>Статус Клиента</h3>

                <TextField
                    label="Поиск по клиентам"
                    value={searchQuery}
                    onChange={handleSearch}
                    style={{ marginBottom: "20px", marginLeft: '20px' }}
                />
            </div>


            <TableContainer style={{ maxHeight: '400px', overflow: 'auto', marginTop: "20px" }}>
                <Table stickyHeader aria-label="sticky table" style={{ border: '1px solid #C0C0C0' }}>
                    <TableHeader sortBy={sortBy} sortDirection={sortDirection} handleSort={handleSort} table={'client'} />

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

            <Modal selectedRow={selectedRow} handleCloseModal={handleCloseModal} />
        </>
    );
};

export default TableClient;
