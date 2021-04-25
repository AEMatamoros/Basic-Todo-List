import { useState } from "react";
import PropTypes from 'prop-types';

const useForm = (initialForm={})=>{

    const [formState, setFormState] = useState(initialForm)

    const handleInputChange = (e)=>{
        
        setFormState({...formState,[e.target.name]:e.target.value})
        console.log(e.target.name)
    }

    return[formState,handleInputChange];

}

useForm.propTypes={
    form: PropTypes.any.isRequired
}

export default useForm;
