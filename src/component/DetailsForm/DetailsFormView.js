import React, { useMemo, useEffect } from 'react'
import { useForm } from "react-hook-form";
import Input from '../Input'
import Radio from '../Radio'
import Select from '../Select'

function DetailsFormView({ defaultValues, changeFormStatus, onSubmit }) {
    const { register, handleSubmit, watch, formState } = useForm({
        mode: 'onChange',
        defaultValues
    });
    const { isDirty, errors } = formState;
    const isEmployee = !!parseInt(watch("employed")); // subscribe to employed value changes
    const isError = !!Object.keys(errors).length //empty errors object
    const isReadToSave = useMemo(() => isDirty && !isError, [isDirty, isError]);
    React.useEffect(() => changeFormStatus(isReadToSave), [isReadToSave, isEmployee, changeFormStatus])

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Input name='name' label="Name" ref={register({ required: true })} errors={errors}/>
            <Input name='jobId' label="Job ID" ref={register({ required: true })} errors={errors} readOnly/>
            <Radio name="employed" label="Currently Employed" ref={register({ required: true })} errors={errors} />
            <Input name='availability' label="Available After Date" type="date" ref={register({ required: true })} errors={errors}/>
            <Input name='email' label="Email" ref={register({ required: true, pattern: /\S+@\S+\.\S+/i })} errors={errors} />
            <Select name='state' label="State" ref={register({ required: true })} errors={errors}/>
            <Input name='desiredSalary' label="Desired Salary" ref={register({ required: true, pattern: /^[1-9][0-9]*$/i })} errors={errors} />
            {isEmployee && <Input name='currentSalary' label="Current Salary" ref={register({ required: true, pattern: /^[1-9][0-9]*$/i })} errors={errors} />}
            <button data-testid="submit-btn" type="submit" className="btn btn-primary">Submit</button>
        </form >
    )
}

export default React.memo(DetailsFormView)
