import React from "react";
import { TableCell, TableRow} from '@mui/material';
import ProgressBar from "../ProgressBar/ProgressBar";
import {IClient} from "../../../models/types";


interface TableRowClientProps {
    row: IClient;
    index: number;
    setSelectedRow: (row: IClient) => void;
}

const TableRowClient: React.FC<TableRowClientProps> = ({setSelectedRow,  row, index}) => {

    const handleRowClick = (row: IClient) => {
        setSelectedRow(row);
    };



    return(

                <TableRow hover role="checkbox"
                    key={index}
                          onClick={() => handleRowClick(row)}

                         >
                    <TableCell sx={{paddingTop: '5px', paddingBottom: '5px'}} >{row.name}</TableCell>
                    <TableCell sx={{paddingTop: '5px', paddingBottom: '5px'}}>{row.ipAddressServer}</TableCell>
                    <TableCell sx={{paddingTop: '5px', paddingBottom: '5px'}}>{row.user}</TableCell>
                    <TableCell sx={{paddingTop: '5px', paddingBottom: '5px'}}>{row.os}</TableCell>
                    <TableCell sx={{paddingTop: '5px', paddingBottom: '5px'}}>{row.timeStart}</TableCell>
                    <TableCell sx={{paddingTop: '5px', paddingBottom: '5px'}}>{row.version}</TableCell>
                    <TableCell sx={{paddingTop: '5px', paddingBottom: '5px'}}>
                        { row.cpuUsage<100 && <ProgressBar usage={row.cpuUsage}/>}
                        {row.cpuUsage>100 && <span>{row.cpuUsage}</span>  }
                    </TableCell >
                    <TableCell sx={{paddingTop: '5px', paddingBottom: '5px'}}>{row.memoryUsage}</TableCell>
                    <TableCell sx={{paddingTop: '5px', paddingBottom: '5px'}}>
                        <ProgressBar usage={row.hddUsage}/>
                    </TableCell>

                </TableRow>

    )
}

export default TableRowClient
