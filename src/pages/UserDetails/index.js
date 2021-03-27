import React, { useState, useEffect, createContext } from 'react'
import { useParams } from "react-router-dom";
import DetailsForm from '../../component/DetailsForm'

export const formStatusContext = createContext();

export default function UserDetails() {
    const [isReadToSave, setIsReadToSave] = useState(false);
    const { id } = useParams();
    useEffect(() => setIsReadToSave(false), [id])

    // 
    // Ready to save massege ONLY display when form is valid and user's details has been updated
    // 
    return (
        <formStatusContext.Provider value={setIsReadToSave}>  
            {isReadToSave && <div className="alert alert-success" role="alert">
                Ready to save
            </div>}
            <DetailsForm />
        </formStatusContext.Provider>
    )
}
