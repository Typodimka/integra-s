// Modal.tsx
import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from '@material-ui/core';
import { IClient, IServer } from '../../types/types';


interface ModalProps {
    selectedRow: IClient | IServer | null;
    handleCloseModal: () => void;
}

const ModalClient: React.FC<ModalProps> = ({ selectedRow, handleCloseModal }) => {
    if (!selectedRow) {
        return null;
    }

    return (
        <Dialog open={true} onClose={handleCloseModal} maxWidth="xl">
            <>
                <DialogTitle>Событие {selectedRow.name}</DialogTitle>
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
        </Dialog>
    );
};

export default ModalClient;
