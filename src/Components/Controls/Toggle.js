import React from 'react';

export default function Toggle({ title, value, onChange }) {
    return (
        <div className="_toggle">
            <input
                type="checkbox"
                id={`switch_${title}`}
                className="checkbox"
                checked={value}
                onChange={(val) => {
                    onChange(val.target.checked)
                }} />
            <label for={`switch_${title}`} className="toggle"></label>
            <span><p>{title}</p></span>
        </div>
    )
}