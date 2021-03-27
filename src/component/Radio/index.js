import React from 'react'


function Radio({name, label, errors, defaultValue}, ref) {
    return (
        <div className="form-group">
            <label>{label}</label>
            <div className="form-check">
                <input className={`form-check-input ${errors[name]?'is-invalid':''}`} type="radio" name={name} ref={ref} value="1" defaultChecked={defaultValue === 1}/>
                <label className="form-check-label" htmlFor="currentEmployed1">
                    Yes
                </label>
            </div>
            <div className="form-check">
                <input className={`form-check-input ${errors[name]?'is-invalid':''}`} type="radio" name={name} ref={ref} value="0" defaultChecked={defaultValue === 0}/>
                <label className="form-check-label" htmlFor="currentEmployed2">
                    No
                </label>
                { errors[name] && <div className="invalid-feedback">{'error'}</div> }
            </div>
        </div>
    )
}

export default React.forwardRef(Radio)
