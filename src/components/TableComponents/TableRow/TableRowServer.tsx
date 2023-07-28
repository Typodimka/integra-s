import React from "react";
import { TableCell, TableRow} from '@mui/material'
import ProgressBar from "../ProgressBar/ProgressBar";
import {IServer} from "../../../models/types";


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
        <TableRow hover role="checkbox"
                  key={index}
                  onClick={() => handleRowClick(row)}>
            <TableCell sx={{paddingTop: '5px', paddingBottom: '5px'}}>{row.name}</TableCell>
            <TableCell sx={{paddingTop: '5px', paddingBottom: '5px'}}>{row.ipAddressServer}</TableCell>
            <TableCell sx={{paddingTop: '5px', paddingBottom: '5px'}}>{row.idDeviceUsb}</TableCell>
            <TableCell sx={{paddingTop: '5px', paddingBottom: '5px'}}>{row.regFile}</TableCell>
            <TableCell sx={{paddingTop: '5px', paddingBottom: '5px'}}>{row.os}</TableCell>
            <TableCell sx={{paddingTop: '5px', paddingBottom: '5px'}}>{row.timeStart}</TableCell>
            <TableCell sx={{paddingTop: '5px', paddingBottom: '5px'}}>{row.version}</TableCell>
            <TableCell sx={{paddingTop: '5px', paddingBottom: '5px'}}>
                {row.cpuUsage < 100 && <ProgressBar usage={row.cpuUsage} />}
                {row.cpuUsage>100 && <span>{row.cpuUsage}</span>  }
            </TableCell>
            <TableCell sx={{paddingTop: '5px', paddingBottom: '5px'}}>{row.memoryUsage}</TableCell>
            <TableCell sx={{paddingTop: '5px', paddingBottom: '5px'}}>
                <ProgressBar usage={row.hddUsage} />
            </TableCell>
        </TableRow>

    )
}

export default TableRowServer
