import React, {useEffect, useState} from 'react';
import {
    Table,
    TableContainer,
    TableBody,
    TextField,
} from '@material-ui/core';
import { IClient } from "../models/types";
import Modal from "./TableComponents/Modal/modal";
import TableHeader from './TableComponents/TableHeader/TableHeader';
import TableRowClient from "./TableComponents/TableRow/TableRowClient";
import {useAddDispatch, useAppSelector} from '../hooks/redux';
import {fetchClients} from "../redux/clients/ClientsCreators";

const TableClient: React.FC = () => {

    const dispatch = useAddDispatch()
    const {clients, isLoading, error} = useAppSelector(state => state.clientReducer)

    useEffect(() => {
        dispatch(fetchClients())
    }, [])


    const [sortBy, setSortBy] = useState<string | null>(null);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedRow, setSelectedRow] = useState<IClient | null>(null);


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

    const filteredData = clients.filter((row) => {
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
            <div style ={{display: 'flex', marginTop: '10px', justifyContent: "space-between"}}>
                <h3>Статус Клиента</h3>

                <TextField
                    label="Поиск по клиентам"
                    value={searchQuery}
                    onChange={handleSearch}
                    style={{ marginBottom: "20px", marginLeft: '200px' }}
                />
            </div>


            <TableContainer style={{ maxHeight: '350px', overflow: 'auto'}}>
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