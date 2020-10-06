import { Button, Dialog } from '@material-ui/core';
import React, { Component } from 'react';
import Form from '../Form';
import Table from './../Table';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'center',
    },
});

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            open: false,
            row: {
                id: '',
                name: '',
                email: '',
            },
        };
    }

    createData = (id, name, email) => {
        return { id, name, email };
    };

    rows = [
        this.createData(1, 'Frozen yoghurt', 'Frozen yoghurt@gmail.com'),
        this.createData(
            2,
            'Ice cream sandwich',
            'Ice cream sandwich@gmail.com',
        ),
        this.createData(3, 'Eclair', 'Eclair@gmail.com'),
        this.createData(4, 'Cupcake', 'Cupcake@gmail.com'),
        this.createData(5, 'Gingerbread', 'Gingerbread@gmail.com'),
    ];

    componentDidMount() {
        if (localStorage.getItem('data')) {
            this.setState({
                data: JSON.parse(localStorage.getItem('data')),
            });
        } else {
            localStorage.setItem('data', JSON.stringify(this.rows));
        }
    }

    hangleDeleteRow = (id) => {
        const array = this.state['data'];
        const index = array.findIndex((item) => item.id === id);
        array.splice(index, 1);
        this.handleUpdateData(array);
        this.setState({
            data: array,
        });
    };

    handleUpdateData = (data = []) =>
        data.length && localStorage.setItem('data', JSON.stringify(data));

    handleReloadData = () => {
        localStorage.setItem('data', JSON.stringify(this.rows));
        this.setState({ data: this.rows });
    };

    handleOpen = (row) => {
        this.setState({ open: true, row });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    componentWillMount() {
        this.setState({ data: [], open: false });
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.handleReloadData}
                        >
                            Reload
                        </Button>
                        <Table
                            data={this.state.data}
                            handleDelete={this.hangleDeleteRow}
                            handleEditForm={this.handleOpen}
                        />
                    </Grid>
                    <Grid item xs={6}></Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Body);
