// -------------------------------Start: 38_1 ---------------------------------------
// (2) st rsc+enter
import React from 'react';

const SimpleForm = () => {
    
    // (6)st
    // (9)handleSubmit = (e)
    const handleSubmit = (e) =>{
        // (10)
        e.preventDefault();
        // console.log('form submitted');
        // (11)commit previous
        console.log(e);
        // (12)commit (11)
        // console.log(e.target);
        // (14)commit (12)
        // console.log(e.target.name);
        // (15)commit (14)
        console.log(e.target.name.value);
        // (17) then create __get_form_data.js file in src folder
        console.log(e.target.email.value);


    }
    // (6)en

    return (
        <div>
        {/* (4) st*/}
        {/* (5)onSubmit={} */}
        {/* (7) onSubmit={handleSubmit} */}
        <form onSubmit={handleSubmit}>
            {/* (8) placeholder='Your Name'*/}
            {/* (13) name='name'*/}
            <input type="text" name='name' placeholder='Your Name' />
            <br />
            {/* (16)st */}
            <input type="email" name='email' placeholder='Your Email' />
            <br />
            {/* (16)en */}
            {/* input:submit eita rakhte hobe*/}
            <input type="submit" value="submit" />
        </form>
        {/* (4) en*/}
        </div>
    );
};

export default SimpleForm;
// (2) en then in App.jsx file
// -------------------
// Practice:
// import React from 'react';

// const SimpleForm = () => {
//     const handleSubmit = (e) =>{
//         e.preventDefault();
//         console.log(e.target.name.value);
//         console.log(e.target.email.value);
        
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" name='name' placeholder='Your Name' />
//                 <br />
//                 <input type="submit" value="submit" />

//                 <input type="email" name='email' placeholder='Your Email' />
//                 <br />
//             </form>
            
            
//         </div>
//     );
// };

// export default SimpleForm;

// -------------------------------End:38_1-(1) to () --------------------------------