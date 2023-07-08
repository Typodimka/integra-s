import React from "react";
import { TableCell, TableRow} from '@material-ui/core';
import ProgressBar from "../ProgressBar/ProgressBar";
import {IClient} from "../../../types/types";


interface TableRowClientProps {
    row: IClient;
    index: number;
    setSelectedRow: (row: IClient) => void;
}

const TableRowClient: React.FC<TableRowClientProps> = ({setSelectedRow,  row, index }) => {

    const handleRowClick = (row: IClient) => {
        setSelectedRow(row);
    };

    return(

                <TableRow hover role="checkbox"
                    key={index}
                          onClick={() => handleRowClick(row)}
                         >
                    <TableCell className="MuiTableCell-sizeSmall">{row.name}</TableCell>
                    <TableCell className="MuiTableCell-sizeSmall">{row.ipAddressServer}</TableCell>
                    <TableCell className="MuiTableCell-sizeSmall">{row.user}</TableCell>
                    <TableCell className="MuiTableCell-sizeSmall">{row.os}</TableCell>
                    <TableCell className="MuiTableCell-sizeSmall">{row.timeStart}</TableCell>
                    <TableCell className="MuiTableCell-sizeSmall">{row.version}</TableCell>
                    <TableCell className="MuiTableCell-sizeSmall">
                        { row.cpuUsage<100 && <ProgressBar usage={row.cpuUsage}/>}
                        {row.cpuUsage>100 && <span>{row.cpuUsage}</span>  }
                    </TableCell >
                    <TableCell className="MuiTableCell-sizeSmall">{row.memoryUsage}</TableCell>
                    <TableCell className="MuiTableCell-sizeSmall">
                        <ProgressBar usage={row.hddUsage}/>
                    </TableCell>

                </TableRow>

    )
}

export default TableRowClient
