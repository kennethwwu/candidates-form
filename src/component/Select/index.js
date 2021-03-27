import React from 'react'

function Select({name, label, errors, defaultValue = ''}, ref) {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select className={`form-control ${errors[name]?'is-invalid':''}`} name={name} ref={ref}>
                <option value="" disabled>Choose here</option>
                <option value="VIC">VIC</option>
                <option value="QLD">QLD</option>
                <option value="TAS">TAS</option>
                <option value="WA">WA</option>
                <option value="SA">SA</option>
                <option value="NSW">NSW</option>
            </select>
            { errors[name] && <div className="invalid-feedback">{'error'}</div>}
        </div>
    )
}

export default React.forwardRef(Select)
