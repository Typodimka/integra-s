import React from "react";
import { TableCell, TableRow} from "@material-ui/core";
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
            <TableCell className="MuiTableCell-sizeMedium">{row.name}</TableCell>
            <TableCell className="MuiTableCell-sizeMedium">{row.ipAddressServer}</TableCell>
            <TableCell className="MuiTableCell-sizeMedium">{row.idDeviceUsb}</TableCell>
            <TableCell className="MuiTableCell-sizeMedium">{row.regFile}</TableCell>
            <TableCell className="MuiTableCell-sizeMedium">{row.os}</TableCell>
            <TableCell className="MuiTableCell-sizeMedium">{row.timeStart}</TableCell>
            <TableCell className="MuiTableCell-sizeMedium">{row.version}</TableCell>
            <TableCell className="MuiTableCell-sizeMedium">
                {row.cpuUsage < 100 && <ProgressBar usage={row.cpuUsage} />}
                {row.cpuUsage>100 && <span>{row.cpuUsage}</span>  }
            </TableCell>
            <TableCell className="MuiTableCell-sizeMedium">{row.memoryUsage}</TableCell>
            <TableCell className="MuiTableCell-sizeMedium">
                <ProgressBar usage={row.hddUsage} />
            </TableCell>
        </TableRow>

    )
}

export default TableRowServer
