import { TextField } from '@material-ui/core';
import React from 'react';

class Form extends React.Component {
    handleChange = (prop) => (event) => {
        this.setState({ [prop]: event.target.value });
    };

    render() {
        return (
            <>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    type="text"
                    fullWidth
                    value={this.props.formData.name}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email"
                    type="email"
                    fullWidth
                    value={this.props.formData.email}
                />
            </>
        );
    }
}

export default Form;
