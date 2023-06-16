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
    DialogActions,
    Button,
} from '@material-ui/core';
import jsonData from '../db/db.json'; // Импортируем файл JSON
import {IServer} from '../types/types';
import {useClients, useServer} from '../hooks/api'





//Изменение Цвета линии прогрееса
const getColorByCpuUsage = (cpuUsage: number): string => {
    if (cpuUsage > 80) {
        return 'FireBrick';
    } else if (cpuUsage > 50) {
        return 'Gold';
    } else {
        return 'DarkGreen';
    }
};

const getColorByHddUsage = (hddUsage: number): string => {
    if (hddUsage > 80) {
        return 'FireBrick';
    } else if (hddUsage > 50) {
        return 'Gold';
    } else {
        return 'DarkGreen';
    }
};

const TableServer: React.FC = () => {

    const {data} = useServer()


    const [sortBy, setSortBy] = useState<string | null>(null);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [selectedRow, setSelectedRow] = useState<IServer | null>(null);

    const handleSort = (column: string) => {
        if (column === sortBy) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(column);
            setSortDirection('asc');
        }
    };

    const handleRowClick = (row: IServer) => {
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
            <h3>Статус Серверов</h3>
            <TableContainer style={{ maxHeight: '400px', overflow: 'auto', marginTop:"20px" }}>
                <Table style={{ border: '1px solid #C0C0C0' }}>
                    <TableHead style={{ position: 'sticky', top: 0, zIndex: 1, background: 'white' }}>
                        <TableRow>
                            <TableCell style={{ width: '5%' }}>
                                <TableSortLabel
                                    active={sortBy === 'name'}
                                    direction={sortDirection}
                                    onClick={() => handleSort('name')}
                                >
                                    Имя
                                </TableSortLabel>
                            </TableCell>

                            <TableCell style={{ width: '10%' }}>
                                <TableSortLabel
                                    active={sortBy === 'ip-address-server'}
                                    direction={sortDirection}
                                    onClick={() => handleSort('ip-address-server')}
                                >
                                    IP адресс сервера
                                </TableSortLabel>
                            </TableCell>

                            <TableCell style={{ width: '5%' }}>
                                <TableSortLabel
                                    active={sortBy === 'idDeviceUsb'}
                                    direction={sortDirection}
                                    onClick={() => handleSort('idDeviceUsb')}
                                >
                                    Ид. устройства USB
                                </TableSortLabel>
                            </TableCell>

                            <TableCell style={{ width: '5%' }}>
                                <TableSortLabel
                                    active={sortBy === 'regFile'}
                                    direction={sortDirection}
                                    onClick={() => handleSort('regFile')}
                                >
                                    Рег файл
                                </TableSortLabel>
                            </TableCell>

                            <TableCell style={{ width: '15%' }}>
                                <TableSortLabel
                                    active={sortBy === 'os'}
                                    direction={sortDirection}
                                    onClick={() => handleSort('os')}
                                >
                                    ОС
                                </TableSortLabel>
                            </TableCell>

                            <TableCell style={{ width: '15%' }}>
                                <TableSortLabel
                                    active={sortBy === 'timeStart'}
                                    direction={sortDirection}
                                    onClick={() => handleSort('timeStart')}
                                >
                                    Время старта
                                </TableSortLabel>
                            </TableCell>

                            <TableCell style={{ width: '10%' }}>
                                <TableSortLabel
                                    active={sortBy === 'version'}
                                    direction={sortDirection}
                                    onClick={() => handleSort('version')}
                                >
                                    Версия
                                </TableSortLabel>
                            </TableCell>

                            <TableCell style={{ width: '10%' }}>
                                <TableSortLabel
                                    active={sortBy === 'cpuUsage'}
                                    direction={sortDirection}
                                    onClick={() => handleSort('cpuUsage')}
                                >
                                    CPU usage
                                </TableSortLabel>
                            </TableCell>

                            <TableCell style={{ width: '10%' }}>
                                <TableSortLabel
                                    active={sortBy === 'memoryUsage'}
                                    direction={sortDirection}
                                    onClick={() => handleSort('memoryUsage')}
                                >
                                    Memory usage
                                </TableSortLabel>
                            </TableCell>

                            <TableCell style={{ width: '10%' }}>
                                <TableSortLabel
                                    active={sortBy === 'hddUsage'}
                                    direction={sortDirection}
                                    onClick={() => handleSort('hddUsage')}
                                >
                                    HDD usage
                                </TableSortLabel>
                            </TableCell>
                        </TableRow>
                    </TableHead>
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
                                    { row.cpuUsage<100 && <div
                                        style={{
                                            position: 'relative',
                                            width: '100%',
                                            height: '20px',
                                            borderRadius: '10px',
                                            background: 'silver',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: `${row.cpuUsage}%`,
                                                height: '100%',
                                                borderRadius: '5px',
                                                background: getColorByCpuUsage(row.cpuUsage),
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
                                            {row.cpuUsage}%
                                        </div>
                                    </div>}
                                    {row.cpuUsage>100 && <span>{row.cpuUsage}</span>  }
                                </TableCell>
                                <TableCell>{row.memoryUsage}</TableCell>
                                <TableCell>
                                    <div
                                        style={{
                                            position: 'relative',
                                            width: '100%',
                                            height: '20px',
                                            borderRadius: '10px',
                                            background: 'silver',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: `${row.hddUsage}%`,
                                                height: '100%',
                                                borderRadius: '10px',
                                                background: getColorByHddUsage(row.hddUsage),
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
                                            {row.hddUsage}%
                                        </div>
                                    </div>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Dialog open={!!selectedRow} onClose={handleCloseModal} maxWidth="xl">
                {selectedRow && (
                    <>

                        <DialogTitle>Событие</DialogTitle>
                        <DialogContent style={{ minWidth: '1000px' }}>
                            <div style={{display: "flex", justifyContent:"space-between"}}>
                                {/*Левая часть*/}
                                <div style={{width: "485px"}}>
                                    <h3>Сведения об устройствах:</h3>
                                    <div style={{border: "1px double black", padding: "10px"}}>
                                        Ключ: <b>{selectedRow.modal.deviceInformation.id}</b><br/>
                                        Время работы: <b>{selectedRow.modal.deviceInformation.timeWork}</b><br/>
                                        Время работы ПО: <b>{selectedRow.modal.deviceInformation.timeWorkPo}</b><br/>
                                        GPS/ГЛОНАСС: <b>{selectedRow.modal.deviceInformation.gpsGlonass}</b><br/>
                                        Системное время: <b style={{color:"green"}}>{selectedRow.modal.deviceInformation.systemTime}</b><br/>
                                        Настроено камер: <b style={{color:"green"}}>{selectedRow.modal.deviceInformation.configuredCameras}</b><br/>
                                        - Нет подключения: <b style={{color:"green"}}>{selectedRow.modal.deviceInformation.noConnected}</b><br/>
                                        - С замечаниями: <b style={{color:"green"}}>{selectedRow.modal.deviceInformation.withRemarks}</b><br/>
                                        - Подключены: <b style={{color:"green"}}>{selectedRow.modal.deviceInformation.connected}</b><br/>
                                    </div>

                                    <div>
                                        <h3>Выгрузка:</h3>
                                        <p style={{border: "1px double black", padding: "10px"}}>Выгрузка: <b style={{color:"red"}}>{selectedRow.modal.unloading}</b></p>
                                    </div>

                                    <div>
                                        <h3>Програмное обеспечение:</h3>
                                        <div style={{border: "1px double black", padding: "10px"}}>
                                            Библиотека распознавания: <b>{selectedRow.modal.software.recognitionLibrary}</b> <br/>
                                            Библиотека времени: <b>{selectedRow.modal.software.timeLibrary}</b><br/>
                                            Модуль загрузки : <b>{selectedRow.modal.software.unloadModule}</b><br/>
                                            Веб интерфейс: <b>{selectedRow.modal.software.webInterface}</b><br/>
                                            Модуль захвата видеопотока: <b>{selectedRow.modal.software.videoCaptureModule}</b>
                                        </div>
                                    </div>

                                </div>
                                {/*Правая часть*/}
                                <div style={{width: "485px"}}>
                                    <h3>Процессорный модуль</h3>
                                    <div style={{border: "1px double black", padding: "10px"}}>
                                        Объем ОЗУ: <b>{selectedRow.modal.cpuModule.ramSize.total}Mb свободно <span style={{color: "green"}}>{selectedRow.modal.cpuModule.ramSize.free}Mb</span></b> <br/>
                                        <h3>Информация по CPU</h3>
                                        <div style={{border: "1px double black", padding: "10px"}}>
                                            Имя: <b>{selectedRow.modal.cpuModule.informationCpu.nameCpu}</b> <br/>
                                            Средняя загрузка: <b><span style={{color: "green"}}>{selectedRow.modal.cpuModule.informationCpu.averageLoad1}%</span>,
                                            <span style={{color: "green"}}> {selectedRow.modal.cpuModule.informationCpu.averageLoad2}%</span></b> <br/>
                                            Макс.загрузка по ядру: <b><span style={{color: "green"}}>{selectedRow.modal.cpuModule.informationCpu.maxKernelLoading1}%</span>,
                                            <span style={{color: "green"}}> {selectedRow.modal.cpuModule.informationCpu.maxKernelLoading2}%</span></b> <br/>
                                            Макс.загрузка по потоку: <b><span style={{color: "green"}}>{selectedRow.modal.cpuModule.informationCpu.maxStreamLoading1}%</span>,
                                            <span style={{color: "green"}}> {selectedRow.modal.cpuModule.informationCpu.maxStreamLoading2}%</span></b> <br/>
                                            Пакетная температура: <b><span style={{color: "green"}}>{selectedRow.modal.cpuModule.informationCpu.batchTemperature1}%</span>,
                                            <span style={{color: "green"}}> {selectedRow.modal.cpuModule.informationCpu.batchTemperature2}%</span></b> <br/>
                                            Потребление: <b>Package: {selectedRow.modal.cpuModule.informationCpu.consumption1},
                                            Package: {selectedRow.modal.cpuModule.informationCpu.consumption2}</b>

                                        </div>
                                        <h3>HDD:</h3>
                                        <div style={{border: "1px double black", padding: "5px 5px", justifyContent: "space-between"}}>
                                            <h4 style={{textAlign:"center"}}>Физические диски:</h4>
                                            <table style={{ width: "100%" }}>
                                                <tbody>
                                                <tr>
                                                    <th>Модель</th>
                                                    <th>Серия</th>
                                                    <th>Размер</th>
                                                    <th>Темп.С</th>
                                                </tr>

                                                <tr>
                                                    <td style={{border: "1px double black"}}>{selectedRow.modal.cpuModule.informationHdd.physicalDisk.model}</td>
                                                    <td style={{border: "1px double black"}}>{selectedRow.modal.cpuModule.informationHdd.physicalDisk.series}</td>
                                                    <td style={{border: "1px double black"}}>{selectedRow.modal.cpuModule.informationHdd.physicalDisk.size}</td>
                                                    <td style={{border: "1px double black"}}>{selectedRow.modal.cpuModule.informationHdd.physicalDisk.temp}</td>
                                                </tr>
                                                </tbody>
                                            </table>

                                            <h4 style={{textAlign:"center"}}>Логические диски:</h4>
                                            <table style={{ width: "100%" }}>
                                                <tbody>
                                                <tr>
                                                    <th>Диск</th>
                                                    <th>Объем</th>
                                                    <th>Свободно</th>
                                                    <th>Порог</th>
                                                </tr>

                                                <tr>
                                                    <td style={{border: "1px double black"}}>{selectedRow.modal.cpuModule.informationHdd.logicalDisk1.disk}</td>
                                                    <td style={{border: "1px double black"}}>{selectedRow.modal.cpuModule.informationHdd.logicalDisk1.volume}</td>
                                                    <td style={{border: "1px double black"}}>{selectedRow.modal.cpuModule.informationHdd.logicalDisk1.free}</td>
                                                    <td style={{border: "1px double black"}}>{selectedRow.modal.cpuModule.informationHdd.logicalDisk1.threshold}</td>
                                                </tr>

                                                <tr>
                                                    <td style={{border: "1px double black"}}>{selectedRow.modal.cpuModule.informationHdd.logicalDisk2.disk}</td>
                                                    <td style={{border: "1px double black"}}>{selectedRow.modal.cpuModule.informationHdd.logicalDisk2.volume}</td>
                                                    <td style={{border: "1px double black"}}>{selectedRow.modal.cpuModule.informationHdd.logicalDisk2.free}</td>
                                                    <td style={{border: "1px double black"}}>{selectedRow.modal.cpuModule.informationHdd.logicalDisk2.threshold}</td>
                                                </tr>

                                                <tr>
                                                    <td style={{border: "1px double black"}}>{selectedRow.modal.cpuModule.informationHdd.logicalDisk3.disk}</td>
                                                    <td style={{border: "1px double black"}}>{selectedRow.modal.cpuModule.informationHdd.logicalDisk3.volume}</td>
                                                    <td style={{border: "1px double black"}}>{selectedRow.modal.cpuModule.informationHdd.logicalDisk3.free}</td>
                                                    <td style={{border: "1px double black"}}>{selectedRow.modal.cpuModule.informationHdd.logicalDisk3.threshold}</td>
                                                </tr>
                                                </tbody>

                                            </table>

                                        </div>

                                    </div>



                                </div>

                            </div>

                            <div>
                                <h3>Сетевые интерфейсы:</h3>
                                <table style={{ width: "100%" }}>
                                    <tbody>
                                    <tr>
                                        <th>Имя</th>
                                        <th>Скорость</th>
                                        <th>МАС</th>
                                        <th>ip - mask</th>
                                        <th>Тек.скорость</th>

                                    </tr>
                                    <tr>
                                        <td style={{border: "1px double black"}}>{selectedRow.modal.networkInterfaces.name}</td>
                                        <td style={{border: "1px double black"}}>{selectedRow.modal.networkInterfaces.speed} Mb/s</td>
                                        <td style={{border: "1px double black"}}>{selectedRow.modal.networkInterfaces.mac}</td>
                                        <td style={{border: "1px double black"}}>{selectedRow.modal.networkInterfaces.ipMask}</td>
                                        <td style={{border: "1px double black"}}>IN - {selectedRow.modal.networkInterfaces.currentSpeedIn} Kb/s
                                            <br/>OUT - {selectedRow.modal.networkInterfaces.currentSpeedOut} Kb/s </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

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

export default TableServer;
