// -------------------------------Start: 38_3 ---------------------------------------
// (7) st rsc+enter
import React, { useRef } from 'react';

const UnControlledField = () => {
    // (10)
    const emailRef = useRef('');
    // (18)
    const passwordRef = useRef('');
    // (12)st
    const handleSubmit = e => {
        e.preventDefault();
        // console.log('sb');
        // (14) commit previous
        // console.log(emailRef);
        // (15) commit previous
        // console.log(emailRef.current);
        // (16)st commit previous
        // console.log(emailRef.current.value);
        // (17) 
        const email = emailRef.current.value;
        // (20)st
        const password = passwordRef.current.value;
        console.log(email, password)
        // (20)en then in __get_form_data.js file
    }
    // (12)en

    return (
        <div>
            {/* (9) st*/}
            {/* (13) onSubmit={handleSubmit} */}
            <form onSubmit={handleSubmit}>
                {/* (11) ref={emailRef} */}
                <input ref={emailRef} type="email" name="" />
                <br />
                {/* (19) ref={passwordRef} */}
                <input ref={passwordRef} type="password" name="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            {/* (9)en*/}
        </div>
    );
};

export default UnControlledField;
// (7) en then in App.jsx file
// ------------------------------------
// Practice:
// import React from 'react';

// const UnControlledField = () => {

//     const emailRef = useRef('');
//     const passwordRef = useRef('');

//     const handleSubmit = e =>{
//         e.preventDefault();
        
//         const email= emailRef.current.value
//         const password = passwordRef.current.value
//         console.log(email, password)
        
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input ref={emailRef} type="email" name="" />
//                 <br />
//                 <input ref={passwordRef} type="password" name="" />
//                 <br />
//                 <input type="submit" value="" />
//             </form>
//         </div>
//     );
// };

// export default UnControlledField;

// -------------------------------End:38_3-(1) to () --------------------------------