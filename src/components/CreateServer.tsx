import React, { useState, useEffect  } from 'react';
import {
    Table,
    TableContainer,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TableSortLabel,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
} from '@material-ui/core';
import jsonData from '../db/db.json'; // Импортируем файл JSON


type DataType = {
    name: string;
    score: number;
    details: string; // Дополнительная информация
    [key: string]: string | number; // Индексная сигнатура

};

//Изменение Цвета линии прогрееса
const getColorByScore = (score: number): string => {
    if (score >= 80) {
        return 'red';
    } else if (score >= 50) {
        return 'yellow';
    } else {
        return 'green';
    }
};

const CreateServer: React.FC = () => {

    const [data, setData] = useState<DataType[]>(jsonData.servers);

    useEffect(() => {
        fetch('../db/db.json')
            .then((response) => response.json())
            .then((jsonData) => {
                setData(jsonData.servers);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const [sortBy, setSortBy] = useState<string | null>(null);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [selectedRow, setSelectedRow] = useState<DataType | null>(null);

    const handleSort = (column: string) => {
        if (column === sortBy) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(column);
            setSortDirection('asc');
        }
    };

    const handleRowClick = (row: DataType) => {
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
            <TableContainer style={{ maxHeight: '500px', overflow: 'auto' }}>
                <Table style={{ border: '1px solid #C0C0C0' }}>
                    <TableHead style={{ position: 'sticky', top: 0, zIndex: 1, background: 'white' }}>
                        <TableRow>
                            <TableCell style={{ width: '30%' }}>
                                <TableSortLabel
                                    active={sortBy === 'name'}
                                    direction={sortDirection}
                                    onClick={() => handleSort('name')}
                                >
                                    Name
                                </TableSortLabel>
                            </TableCell>
                            <TableCell style={{ width: '70%' }}>
                                <TableSortLabel
                                    active={sortBy === 'score'}
                                    direction={sortDirection}
                                    onClick={() => handleSort('score')}
                                >
                                    Score
                                </TableSortLabel>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedData.map((row, index) => (
                            <TableRow key={index} onClick={() => handleRowClick(row)}>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>
                                    <div
                                        style={{
                                            position: 'relative',
                                            width: '100%',
                                            height: '10px',
                                            borderRadius: '5px',
                                            background: 'silver',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: `${row.score}%`,
                                                height: '100%',
                                                borderRadius: '5px',
                                                background: getColorByScore(row.score),
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
                                            {row.score}%
                                        </div>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Dialog open={!!selectedRow} onClose={handleCloseModal}>
                {selectedRow && (
                    <>
                        <DialogTitle>{selectedRow.name}</DialogTitle>
                        <DialogContent>
                            <DialogContentText>{selectedRow.details}</DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseModal} color="primary">
                                Close
                            </Button>
                        </DialogActions>
                    </>
                )}
            </Dialog>
        </>
    );
};

export default CreateServer;
