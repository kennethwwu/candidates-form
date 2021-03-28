import React from 'react'

function Input({name, label, type, placeholder = '', errors, readOnly }, ref) {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input type={type??'text'} name={name} ref={ref} className={`form-control ${errors[name]?'is-invalid':''}`} placeholder={placeholder} readOnly={readOnly} data-testid={`${name}-input`}/>
            { errors[name] && <div className="invalid-feedback">{'error'}</div>}
        </div>
    )
}

export default React.forwardRef(Input)
