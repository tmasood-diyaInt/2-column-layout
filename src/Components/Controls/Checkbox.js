import React from 'react'
import { FormControl, FormControlLabel, Checkbox as MuiCheckbox } from '@material-ui/core';

export default function Checkbox(props) {
    const { name, label, value, onChange } = props;

    return (
        <FormControl>
            <FormControlLabel
                control={<MuiCheckbox
                    id={`checkbox_${label}`}
                    name={name}
                    color="primary"
                    checked={value}
                    onChange={e => onChange(e.target.checked)}
                />}
                label={label}
            />
        </FormControl>
    )
}
