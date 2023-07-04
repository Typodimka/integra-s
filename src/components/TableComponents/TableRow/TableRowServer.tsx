import React from "react";
import { TableCell, TableRow} from "@material-ui/core";
import ProgressBar from "../ProgressBar";
import {IServer} from "../../../types/types";


interface TableRowServerProps {
    row: IServer;
    index: number;
    setSelectedRow: (row: IServer) => void;
}

const TableRowServer: React.FC<TableRowServerProps> = ({setSelectedRow,  row, index }) => {

    const handleRowClick = (row: IServer) => {
        setSelectedRow(row);
    };

    return(
        <TableRow key={index} onClick={() => handleRowClick(row)}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.ipAddressServer}</TableCell>
            <TableCell>{row.idDeviceUsb}</TableCell>
            <TableCell>{row.regFile}</TableCell>
            <TableCell>{row.os}</TableCell>
            <TableCell>{row.timeStart}</TableCell>
            <TableCell>{row.version}</TableCell>
            <TableCell>
                {row.cpuUsage < 100 && <ProgressBar usage={row.cpuUsage} />}
                {row.cpuUsage>100 && <span>{row.cpuUsage}</span>  }
            </TableCell>
            <TableCell>{row.memoryUsage}</TableCell>
            <TableCell>
                <ProgressBar usage={row.hddUsage} />
            </TableCell>
        </TableRow>

    )
}

export default TableRowServer
