import React, { useState} from 'react';
import {
    Table,
    TableContainer,
    TableBody, TextField,
} from '@mui/material';
import {IServer} from '../models/types';
import Modal from "./TableComponents/Modal/modal";
import TableHeader from "./TableComponents/TableHeader/TableHeader";
import TableRowServer from "./TableComponents/TableRow/TableRowServer";
import { useAppSelector} from "../hooks/redux";
import {SortedServer} from "../helpers/sorted/sortedServerData";


const TableServer: React.FC = () => {

    const [selectedRow, setSelectedRow] = useState<IServer | null>(null);

    //Состояние загрузки и ошибки.
    const {isLoading, error} = useAppSelector(state => state.serverReducer)

    //Функции сортировки и состояния.
    const {sortedData, handleSearch, sortBy,  sortDirection , searchQuery, handleSort } = SortedServer()




    //Фунция закрытия модального окна.
    const handleCloseModal = () => {
        setSelectedRow(null);
    };



    return (
        <>
            <div style ={{display: 'flex',  justifyContent: "space-between", padding: '10px', paddingBottom: 0 }}>
                <h3>Статус Клиента</h3>
                {/*Поисковая строка*/}
                <TextField
                    label="Поиск по серверам"
                    value={searchQuery}
                    onChange={handleSearch}
                    style={{ marginBottom: "20px", marginLeft: '200px' }}
                    variant="standard"

                />
            </div>
            <TableContainer style={{ maxHeight: '360px', overflow: 'auto'}}>
                <Table stickyHeader aria-label="sticky table" >

                    {/*Шапка таблицы*/}
                    <TableHeader sortBy={sortBy} sortDirection={sortDirection} handleSort={handleSort} table = {'server'} />

                    {isLoading && <h3>Loading...</h3>}
                    {error && <h3 style={{color: 'red'}}>Error</h3>}

                    {/*Содержимое таблицы*/}
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

            {/*Модальное окно строки*/}
            <Modal selectedRow={selectedRow} handleCloseModal={handleCloseModal}  />

        </>
    );
};

export default TableServer;