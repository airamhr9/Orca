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
    createData('Created', '2021-02-27 12:26:37'),
    createData('Path', 'docker-entrypoint.sh'),
    createData('Restart Count', '0'),
    createData('Driver', 'overlay2'),
    createData('Platfrom', 'linux'),
    createData('Mount label', ''),
  ]


export default function DetailsTable(){
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
