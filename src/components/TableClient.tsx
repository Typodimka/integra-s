import React, { useState} from 'react';
import {
    Table,
    TableContainer,
    TableBody,
    TextField,
} from '@mui/material';
import {IClient} from "../models/types";
import Modal from "./TableComponents/Modal/modal";
import TableHeader from './TableComponents/TableHeader/TableHeader';
import TableRowClient from "./TableComponents/TableRow/TableRowClient";
import { useAppSelector} from '../hooks/redux';
import { SortedClient } from '../helpers/sorted/sortedClientData'

const TableClient: React.FC = () => {

    const [selectedRow, setSelectedRow] = useState<IClient | null>(null);

    //Состояние загрузки и ошибки.
    const { isLoading, error } = useAppSelector((state) => state.clientReducer);

    //Функции сортировки и состояния.
    const {sortedData, handleSearch, sortBy,  sortDirection , searchQuery, handleSort } = SortedClient()


    //Фунция закрытия модального окна.
    const handleCloseModal = () => {
        setSelectedRow(null);
    };

    return (
        <>
            <div style ={{display: 'flex' , justifyContent: "space-between", paddingTop: '10px'}} >
                <h3>Статус Клиента</h3>

                {/*Поисковая строка*/}
                <TextField
                    label="Поиск по клиентам"
                    value={searchQuery}
                    onChange={handleSearch}
                    style={{ marginBottom: "20px", marginLeft: '200px' }}
                />
            </div>


            <TableContainer style={{ maxHeight: '350px', overflow: 'auto'}}>
                <Table stickyHeader aria-label="sticky table" style={{ border: '1px solid #C0C0C0' }}>

                    {/*Шапка таблицы*/}
                    <TableHeader sortBy={sortBy} sortDirection={sortDirection} handleSort={handleSort} table={'client'} />
                    {isLoading && <h3>Loading...</h3>}
                    {error && <h3 style={{color: 'red'}}>Error</h3>}

                    {/*Содержимое таблицы*/}
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

            {/*Модальное окно строки. */}
            <Modal selectedRow={selectedRow} handleCloseModal={handleCloseModal} />
        </>
    );
};

export default TableClient;
