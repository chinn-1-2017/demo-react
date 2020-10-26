import { Button, Dialog } from '@material-ui/core';
import React, { Component, useEffect, useState } from 'react';
import Table from './../Table';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Pagination from './../Pagination';

const Body = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(10);

    useEffect(() => {
        const rows = [];
        for (let i = 1; i < 50; i++) {
            rows.push({
                id: i,
                name: `Frozen yoghurt ${i}`,
                email: `Frozen yoghurt+${i}@gmail.com`,
            });
        }
        setUsers([...rows]);
    }, []);

    const indexOfLastUser = currentPage * perPage;
    const indexOfFirstUser = indexOfLastUser - perPage;
    const currentUser = users.slice(indexOfFirstUser, indexOfLastUser);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary">
                            Reload
                        </Button>
                        <Table users={currentUser} />
                    </Grid>
                    <Grid item xs={12}>
                        <Pagination
                            perPage={perPage}
                            total={users.length}
                            paginate={paginate}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={6}></Grid>
            </Grid>
        </div>
    );
};

export default Body;
