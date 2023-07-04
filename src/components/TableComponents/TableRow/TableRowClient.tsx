import React from "react";
import { TableCell, TableRow} from "@material-ui/core";
import ProgressBar from "../ProgressBar";
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

                <TableRow key={index} onClick={() => handleRowClick(row)}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.ipAddressServer}</TableCell>
                    <TableCell>{row.user}</TableCell>
                    <TableCell>{row.os}</TableCell>
                    <TableCell>{row.timeStart}</TableCell>
                    <TableCell>{row.version}</TableCell>
                    <TableCell>
                        { row.cpuUsage<100 && <ProgressBar usage={row.cpuUsage}/>}
                        {row.cpuUsage>100 && <span>{row.cpuUsage}</span>  }
                    </TableCell>
                    <TableCell>{row.memoryUsage}</TableCell>
                    <TableCell>
                        <ProgressBar usage={row.hddUsage}/>
                    </TableCell>

                </TableRow>

    )
}

export default TableRowClient
