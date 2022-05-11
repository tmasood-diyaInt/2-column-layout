import React from 'react'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export default function DatePicker(props) {

    const { name, value, onChange, disabled, placeholder, minDate, maxDate } = props

    const convertToDefEventPara = (name, value,) => ({
        target: {
            name, value
        }
    })

    return (
        <MuiPickersUtilsProvider
            utils={DateFnsUtils}
        >
            <KeyboardDatePicker disableToolbar variant="inline" inputVariant="outlined"
                className="select-date-picker"
                // label={label}
                format="MMM/dd/yyyy"
                disabled={disabled}
                placeholder={placeholder}
                name={name}
                minDate={minDate}
                maxDate={maxDate}
                value={value}
                onChange={date => onChange(convertToDefEventPara(name, date))}

            />
        </MuiPickersUtilsProvider>
    )
}