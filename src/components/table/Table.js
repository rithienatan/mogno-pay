import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(date, product, cash, value) {
  return { date, product, cash, value };
}

const rows = [
  createData('Frozen yoghurt', "159", "6.0", "24"),
  createData('Ice cream sandwich', " 237", "9.0", " 37"),
  createData('Eclair', "262", "16.0", "24"),
  createData('Eclair', " 262", "16.0", "24"),
  createData('Eclair', "262", "16.0", "24"),

];

export default function AcccessibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 900 }} aria-label="caption table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.date}>
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="right">{row.product}</TableCell>
              <TableCell align="right">{row.cash}</TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
