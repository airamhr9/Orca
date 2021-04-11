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
    createData('Id', '1f0815c1cb6e74'),
    createData('RepoTag', 'postgres:latest'),
    createData('Parent', ''),
    createData('Docker Version', '19.03.12'),
    createData('Created', '2021-02-12 9:21:50'),
    createData('Mount label', ''),
  ]


export default function ImageTable(){
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
