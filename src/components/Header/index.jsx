import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';

const Header = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <h1>Header</h1>
            </Grid>
            <Grid item xs={6}>
                <h1>Time</h1>
            </Grid>
        </Grid>
    );
};

export default Header;
