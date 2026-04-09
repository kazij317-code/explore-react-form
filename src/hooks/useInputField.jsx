// -------------------------------Start: 38_4 ---------------------------------------

import { useState } from "react"

// (11)st
const useInputField = (defaultValue) =>{
    const [fieldValue, setFieldValue] = useState(defaultValue);
    const handleFieldOnChange = e =>{
        setFieldValue(e.target.value);
    }
    return [fieldValue, handleFieldOnChange]
}

export default useInputField;
// (11)en then create HookForm.jsx file  creating HookForm folder in component folder
// -----------------
// Practice:
// const useInputField = (defaultValue) =>{
//     const [fieldValue, setFieldValue]= useState(defaultValue)

//     const handleFieldOnChange = e =>{
//         setFieldValue(e.target.value)
//     }
//     return[fieldValue, handleFieldOnChange]
// }
// export default useInputField;
// -------------------------------End:38_4-(1) to () --------------------------------