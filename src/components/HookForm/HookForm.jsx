// -------------------------------Start: 38_4 ---------------------------------------
// (12)st rsc+enter
import React from 'react';
import useInputField from '../../hooks/useInputField';

const HookForm = () => {
    // (16)st
const [name, nameOnChange] = useInputField('')   
    // (16)en
    // (20)
    const [email, emailOnChange] = useInputField('');
    // (23)
    const [password, passwordOnChange] =useInputField('')
    // (14)st
    const handleSubmit = e =>{
        e.preventDefault();
        // console.log('submit');
        // (18)commit previous
        // console.log('submit', name);
        // (21)commit previous
        // console.log('submit', name, email);
        // (24)commit previous then create ProductManagement.jsx file creating ProductManagement folder in component folder
        console.log('submit', name, email, password);
    }
    // (14)en
    return (
        <div>
            {/* (15) st*/}
            <form onSubmit={handleSubmit}>
                {/* (17) defaultValue={name} onChange={nameOnChange} */}
            <input defaultValue={name} type="text" onChange={nameOnChange} />
            <br />
            {/* (22) */}
            <input defaultValue={password} onChange={passwordOnChange}type="password" name="" id="" />
            <br />
            {/* (19) */}
            <input defaultValue={email} onChange={emailOnChange} type="email" name="" id="" />
            <br />
            <input type="submit" value="Submit" />
            </form>
            

            {/* (15) en*/}
        </div>
    );
};

export default HookForm;

// (12)en then in App.jsx file
// ------------------------------------
// Practice:
// import React from 'react';

// const HookForm = () => {
//     const [name, nameOnChange] = useInputField('');
//     const [password, passwordOnChange]= useInputField('');
//     const [email, emailOnChange] = useInputField('');

//     const handleSubmit = e =>{
//         e.preventDefault();
//         console.log('submit', name, email, password);
        
//     } 
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input defaultValue={name} onChange={nameOnChange}type="text" />
//                 <br />
//                 <input defaultValue={password} onChange={passwordOnChange}type="password" name="" id="" />
//                 <br />
//                 <input defaultValue={email} onChange={emailOnChange} type="email" name="" id="" />
//                 <br />
//                 <input type="submit" value="Submit" />
//             </form>
//         </div>
//     );
// };

// export default HookForm;

// -------------------------------End:38_4-(1) to () --------------------------------
