import React, { useState, useEffect, useCallback, useContext } from 'react'
import { useParams } from "react-router-dom";
import DetailsFormView from './DetailsFormView'
import { userDetailsContext } from '../../store'
import { formStatusContext } from '../../pages/UserDetails'

const Loading = () => (
    <div className="text-center">
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
)

function DetailsForm(props) {
    const getUserById = useContext(userDetailsContext);
    const setIsReadToSave = useContext(formStatusContext)
    const [formData, setFormData] = useState(null)
    const { id } = useParams();
    const changeFormStatus = useCallback((status) => setIsReadToSave(status), [setIsReadToSave])
    const onSubmit = useCallback(data => console.log(data), []);
    useEffect(()=>{
        setTimeout(() => setFormData(getUserById(id)), 1000) //simulate api call
    }, [id, setFormData, getUserById])

    return <>
            { formData
                ?<DetailsFormView defaultValues={formData} changeFormStatus={changeFormStatus} onSubmit={onSubmit}/>
                :<Loading/> }
            </>
} 

export default DetailsForm
