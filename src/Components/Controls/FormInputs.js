export default function FormInputs({ title, name, value, placeholder, handlerFunction, disabled, onBlur, type, error, errorMessage, titleClass, required, pseudoClass,pattern}) {
    return (
        <div className='form-inputs'>
            <p className={titleClass}>{title}</p>
            <input
                autoComplete="new-password"
                name={name}
                id={`input_${name}`}
                className={pseudoClass}
                value={value}
                onChange={handlerFunction}
                onBlur={onBlur}
                placeholder={placeholder}
                disabled={disabled}
                type={type}
                required={required}
                pattern={pattern}
            />
            {error ? <div className='error-message'>{errorMessage}</div> : ''}
        </div>
    )
}