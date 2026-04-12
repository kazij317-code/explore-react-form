// -------------------------------Start: 38_7 ---------------------------------------
// (1)st rsc+enter
import React from 'react';
import Grandpa from './Grandpa';
// (10)st
import './FamilyTree.css'
// (10)en then in FamilyTree.css file

const FamilyTree = () => {
    // (22)st
    const asset = 'diamond';
    // (22)en then in Special.jsx file
    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            {/* (4) st*/}
            <Grandpa></Grandpa>
            {/* (4) en then create Dad.jsx file in FamilyTree folder*/}
        </div>
    );
};

export default FamilyTree;
// (1)en then in App.jsx file 
// ------------------------------
// Practice:
// import React from 'react';

// import './FamilyTree.css'

// const FamilyTree = () => {
//     const asset = 'diamond'
//     return (
//         <div className='family-tree'>
//             <h2>Family Tree</h2>
//             <Grandpa></Grandpa>
//         </div>
//     );
// };

// export default FamilyTree;

// -------------------------------End:38_7-(1) to () --------------------------------


