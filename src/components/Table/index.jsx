import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
const TableData = ({ users }) => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Edit</TableCell>
                        <TableCell align="center">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((row, index) => (
                        <TableRow key={row.name}>
                            <TableCell
                                align="center"
                                component="th"
                                scope="row"
                            >
                                {row.id}
                            </TableCell>
                            <TableCell
                                align="center"
                                component="th"
                                scope="row"
                            >
                                {row.name}
                            </TableCell>
                            <TableCell
                                align="center"
                                component="th"
                                scope="row"
                            >
                                {row.email}
                            </TableCell>
                            <TableCell
                                align="center"
                                component="th"
                                scope="row"
                            >
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() =>
                                        this.props.handleEditForm(row)
                                    }
                                >
                                    Primary
                                </Button>{' '}
                            </TableCell>
                            <TableCell align="center">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() =>
                                        this.props.handleDelete(row.id)
                                    }
                                >
                                    Primary
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableData;
