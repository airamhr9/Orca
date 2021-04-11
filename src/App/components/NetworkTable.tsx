import { makeStyles, Paper, Table, TableBody, TableContainer, TableFooter, TableRow, withStyles } from '@material-ui/core';
import TableCell from "@material-ui/core/TableCell";
import * as React from 'react';

const useStyles2 = makeStyles({
    table: {
      borderBottom: "none"
    },
  });

const CustomTableCell = withStyles({
root: {
    borderBottom: "none"
}
})(TableCell);

function createData(key: string, data: string) {
return { key, data };
}
  

const rows = [
    createData('IP Address', '172.17.0.2'),
    createData('Gateway', '172.17.0.1'),
    createData("IP Prefix Length", '16',),
    createData("MAC Address", "02:42:ac:11:00:02"),
    createData('5432/tcp', ''),
    createData('Secondary IP Address', ''),
  ]


export default function NetworkTable(){
    const classes = useStyles2();

    return (
        <div>
            <TableContainer component={Paper} elevation={0}>
                <Table className={classes.table} aria-label="custom pagination table">
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.key}>
                        <CustomTableCell component="th" scope="row">
                            {row.key}
                        </CustomTableCell>
                        <CustomTableCell  align="right">
                            {row.data}
                        </CustomTableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

function MuiTableCell(MuiTableCell: any) {
    throw new Error('Function not implemented.');
}
