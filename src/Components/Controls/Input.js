import React from 'react'
import { TextField } from '@material-ui/core';

export default function Input(props) {

    const { name, label, value,error=null, disabled, onChange, required, ...other } = props;
    return (
        <TextField
            variant="outlined"
            label={label}
            name={name}
            disabled={props.disabled}
            value={value}
            onChange={onChange}
            required = {required ?? true}
            {...other}
            {...(error && {error:true,helperText:error})}
        />
    )
}
