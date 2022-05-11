export default function LoginInput({ classes, label, changeHandler, value, placeholder, error, errorMessage, type }) {
    return (
        <div className='login-input'>
            <div className={classes}>
                <p>{label}</p>
                <input 
                    id={`login_input_${type}`} 
                    onChange={changeHandler} 
                    value={value} 
                    placeholder={placeholder} 
                    type={type} 
                    required 
                />
            </div>
            {error && <p className='error-message'>{errorMessage}</p>}
        </div>
    )
}