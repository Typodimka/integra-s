import React, { useState} from 'react';
import {
    Table,
    TableContainer,
    TableBody, TextField,
} from '@material-ui/core';
import {IServer} from '../models/types';
import Modal from "./TableComponents/Modal/modal";
import TableHeader from "./TableComponents/TableHeader/TableHeader";
import TableRowServer from "./TableComponents/TableRow/TableRowServer";
import { useAppSelector} from "../hooks/redux";
import {SortedServer} from "../helpers/sorted/sortedServerData";


const TableServer: React.FC = () => {

    const {isLoading, error} = useAppSelector(state => state.serverReducer)

    const {sortedData, handleSearch, sortBy,  sortDirection , searchQuery, handleSort } = SortedServer()


    const [selectedRow, setSelectedRow] = useState<IServer | null>(null);



    //Фунция закрытия модального окна
    const handleCloseModal = () => {
        setSelectedRow(null);
    };




    return (
        <>
            <div style ={{display: 'flex', marginTop: '10px', justifyContent: "space-between"}}>
                <h3>Статус Клиента</h3>

                <TextField
                    label="Поиск по серверам"
                    value={searchQuery}
                    onChange={handleSearch}
                    style={{ marginBottom: "20px", marginLeft: '200px' }}
                />
            </div>
            <TableContainer style={{ maxHeight: '350px', overflow: 'auto'}}>
                <Table stickyHeader aria-label="sticky table" style={{ border: '1px solid #C0C0C0' }}>
                    <TableHeader sortBy={sortBy} sortDirection={sortDirection} handleSort={handleSort} table = {'server'} />

                    {isLoading && <h3>Loading...</h3>}
                    {error && <h3 style={{color: 'red'}}>Error</h3>}

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