// -------------------------------Start: 38_2 ---------------------------------------
// (1)st rsc+enter
import React from 'react';

const FormAction = () => {
    // (4)st
    const handleFormAction = (formData) =>{
        
        // console.log(formData);    
        // (9) commit previous    
        console.log(formData.get('name')); 
        // (10) st
        console.log(formData.get('email'));
        // (10) en then in __get_form_data.js file and then create ControlledField.jsx file creating ControlledField folder in components folder
           
    }
    // (4)en

    return (
        <div>
            {/* (3)st */}
            {/* (5) action={handleFormAction} */}
            <form action={handleFormAction}>
                {/* (7) name='name'*/}
                <input type="text" name='name' placeholder='Name' />
                <br />
                {/* (8) name='email' */}
                <input type="email" name='email' placeholder='Email' />
                {/* (6)st */}
                <br />
                <input type="submit" value="Submit" />
                {/* (6)en */}
            </form>
            {/* (3)en */}
        </div>
    );
};

export default FormAction;

// (1)en then App.jsx file
// --------------------------
// Practice:
// import React from 'react';

// const FormAction = () => {
//     const handleFormAction = (formData) =>{
//         console.log(formData.get('name'));
//         console.log(formData.get('email')); 
//     }

//     return (
//         <div>
//             <form action={handleFormAction}>
//                 <input type="text" name='name' placeholder='Name' />
//                 <br />
//                 <input type="email" name='email' placeholder='Email' />
//                 <br />
//                 <input type="submit" value="Submit" />
//             </form>
//         </div>
//     );
// };

// export default FormAction;

// -------------------------------End:38_2-(1) to () --------------------------------

 