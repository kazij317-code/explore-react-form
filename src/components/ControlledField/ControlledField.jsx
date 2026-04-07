// // -------------------------------Start: 38_2 ---------------------------------------
// // (11)st rsc+enter
// import React, { useState } from 'react';

// const ControlledField = () => {
//     // (21)useState+enter
//     // const [password, setPassword] = useState('')
//     // (23)commit (21)
//     // const [password, setPassword] = useState('secret')
//     // (30)commit previous
//     const [password, setPassword] = useState('')
//     // (14)st
//     const handleSubmit = (e) =>{
//         // (18)st
//         e.preventDefault();
//         // console.log('submitted');
//         // (18)en
//     }
//     // (14)en
//     // (27)st
//     const handlePasswordOnChange = e =>{

//         // console.log(e.target);
//         // (29) commit previous
//         console.log(e.target.value);

        
//     }
//     // (27)st


//     return (
//         <div>
//             {/* (13)st */}
//             {/* (15)onSubmit={handleSubmit} */}
//             <form onSubmit={handleSubmit}>
//                 {/* (16) required delete*/}
//                 {/* (19) required active*/}
//                 <input type="email" name="email" id="" placeholder='Email' required/>
//                 <br />
//                  {/* (17) required delete*/}
//                  {/* (20) required active*/}
//                  {/* (22) placeholder="Password" 
//                  value={} */}
//                  {/* (24) value={password} */}
//                  {/* (25) value={password} convert to defaultValue={password} */}
//                  {/* (26) onChange={} */}
//                  {/* (28) onChange={handlePasswordOnChange} */}
//                 <input type="password" name="password" id="" placeholder="Password" onChange={handlePasswordOnChange} defaultValue={password} required/>
//                 <br />
//                 <input type="submit" value="Submit" />
//             </form>
//             {/* (13)st */}

            
//         </div>
//     );
// };

// export default ControlledField;
// // (11)st then in App.jsx file
// // ------------------------------
// // Practice:
// // import React from 'react';

// // const ControlledField = () => {

// //     const [password, setPassword] = useState('')

// //     const handleSubmit = (e) =>{
// //         e.preventDefault();
// //         console.log('submitted');
// //     }
// //     const handlePasswordOnChange = e =>{
// //         console.log(e.target.value);
// //     }

    
// //     return (
// //         <div>
// //             <form onSubmit={handleSubmit}>
// //                 <input type="email" name="email" id="" placeholder='Email' required />
// //                 <br />
// //                 <input type="password" name="password" id="" placeholder='password' onChange={handlePasswordOnChange} defaultValue={password} required />
// //                 <br />
// //                 <input type="submit" value="Submit" />
// //             </form>

// //         </div>
// //     );
// // };

// // export default ControlledField;


// // -------------------------------End:38_2-(1) to () --------------------------------
// -------------------------------Start: 38_3 ---------------------------------------

import React, { useState } from 'react';

const ControlledField = () => {
    
    const [password, setPassword] = useState('');
    // (2)
    const [error, setError] = useState('');
    
    const handleSubmit = (e) =>{
      
        e.preventDefault();
        console.log('submitted');
        // (6) st commit (3)
        if(password.length < 6){
            setError('6 characters or longer password needed.')
        }
        else{
            setError('')
        }
        // (6) en . uncommit (3)  and then __get_form_data.js file and then create UnControlledField.jsx file creating UnControlledField folder in component folder
    }
   
    const handlePasswordOnChange = e =>{

        console.log(e.target.value);
        // (1)
        setPassword(e.target.value);
        // (3)st
        if(password.length < 6){
            setError('Password must be 6 characters or longer.')
        }
        // (5)st
        else{
            setError('');
        }
        // (5)en
        // (3)en
        
    }
    


    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                
                <input type="email" name="email" id="" placeholder='Email' required/>
                <br />
                
                <input type="password" name="password" id="" placeholder="Password" onChange={handlePasswordOnChange} defaultValue={password} required/>
                <br />
                <input type="submit" value="Submit" />
            </form>
            {/* (4)st */}
            <p style={{color: 'red'}}>
                <small>{error}</small>
            </p>
            {/* (4)en */}
            
        </div>
    );
};

export default ControlledField;

// ------------------------------
// Practice:
// import React from 'react';

// const ControlledField = () => {

//     const [password, setPassword] = useState('')
//     const [error, setError] = useState('');

    

//     const handleSubmit = (e) =>{
//         e.preventDefault();
//         console.log('submitted');
        
//         if(password.length < 6){
//             setError('6 characters or longer password needed.')
//         }
//         else{
//             setError('')
//         }
//     }

    
//     const handlePasswordOnChange = e =>{
//         console.log(e.target.value);
//         setPassword(e.target.value);

//         if(password.length < 6){
//             setError('Password must be 6 characters or longer.')
//         }
//         else{
//             setError('');
//         }
//     }

    
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input type="email" name="email" id="" placeholder='Email' required />
//                 <br />
//                 <input type="password" name="password" id="" placeholder='password' onChange={handlePasswordOnChange} defaultValue={password} required />
//                 <br />
//                 <input type="submit" value="Submit" />
//             </form>
//             <p style={{color: 'red'}}><small>{error}</small>
//             </p>

//         </div>
//     );
// };

// export default ControlledField;


// -------------------------------End:38_3-(1) to () --------------------------------