import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
    root: {
        border: 'solid black 1px',
    },
});
class App extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Header />
                <Body />
            </div>
        );
    }
}

export default withStyles(styles)(App);
