import React from "react";
import { TableCell, TableRow} from '@material-ui/core'
import ProgressBar from "../ProgressBar/ProgressBar";
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
        <TableRow hover role="checkbox"
                  key={index}
                  onClick={() => handleRowClick(row)}>
            <TableCell className="MuiTableCell-sizeSmall">{row.name}</TableCell>
            <TableCell className="MuiTableCell-sizeSmall">{row.ipAddressServer}</TableCell>
            <TableCell className="MuiTableCell-sizeSmall">{row.idDeviceUsb}</TableCell>
            <TableCell className="MuiTableCell-sizeSmall">{row.regFile}</TableCell>
            <TableCell className="MuiTableCell-sizeSmall">{row.os}</TableCell>
            <TableCell className="MuiTableCell-sizeSmall">{row.timeStart}</TableCell>
            <TableCell className="MuiTableCell-sizeSmall">{row.version}</TableCell>
            <TableCell className="MuiTableCell-sizeSmall">
                {row.cpuUsage < 100 && <ProgressBar usage={row.cpuUsage} />}
                {row.cpuUsage>100 && <span>{row.cpuUsage}</span>  }
            </TableCell>
            <TableCell className="MuiTableCell-sizeSmall">{row.memoryUsage}</TableCell>
            <TableCell className="MuiTableCell-sizeSmall">
                <ProgressBar usage={row.hddUsage} />
            </TableCell>
        </TableRow>

    )
}

export default TableRowServer
