import React from "react";
import { TableCell, TableRow} from '@mui/material';
import ProgressBar from "../ProgressBar/ProgressBar";
import {IClient} from "../../../models/types";
import {useTheme} from "@mui/material/styles";


interface TableRowClientProps {
    row: IClient;
    index: number;
    setSelectedRow: (row: IClient) => void;
}


const TableRowClient: React.FC<TableRowClientProps> = ({setSelectedRow,  row, index}) => {
    const  theme  = useTheme();

    const handleRowClick = (row: IClient) => {
        setSelectedRow(row);
    };

    const cellStyle = { paddingTop: "5px", paddingBottom: "5px", fontSize: "12px", borderLeft: `1px solid ${theme.palette.divider}` };


    return(
                <TableRow hover role="checkbox"
                    key={index}
                          onClick={() => handleRowClick(row)}
                         >
                    <TableCell sx={cellStyle} >{row.name}</TableCell>
                    <TableCell sx={cellStyle}>{row.ipAddressServer}</TableCell>
                    <TableCell sx={cellStyle}>{row.user}</TableCell>
                    <TableCell sx={cellStyle}>{row.os}</TableCell>
                    <TableCell sx={cellStyle}>{row.timeStart}</TableCell>
                    <TableCell sx={cellStyle}>{row.version}</TableCell>
                    <TableCell sx={cellStyle}>
                        { row.cpuUsage<100 && <ProgressBar usage={row.cpuUsage}/>}
                        {row.cpuUsage>100 && <span>{row.cpuUsage}</span>  }
                    </TableCell >
                    <TableCell sx={cellStyle}>{row.memoryUsage}</TableCell>
                    <TableCell sx={cellStyle}>
                        <ProgressBar usage={row.hddUsage}/>
                    </TableCell>

                </TableRow>

    )
}

export default TableRowClient
