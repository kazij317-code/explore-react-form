// // -------------------------------Start: 38_7 ---------------------------------------
// // (20)st
// import React from 'react';
// // (22)Special = ({name})
// const Special = ({name}) => {
//     return (
//         <div>
//             {/* (23) */}
//             <h3>Special:{name}</h3>
//         </div>
//     );
// };

// export default Special;
// // (20)en then in Myself.jsx file
// // ------------------
// // Practice:
// // import React from 'react';

// // const Special = ({name}) => {
// //     return (
// //         <div>
// //             <h3>Special:{name}</h3>
// //         </div>
// //     );
// // };

// // export default Special;
// // -------------------------------End:38_7-(1) to () --------------------------------
// -------------------------------Start: 38_8 ---------------------------------------

import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';
// (8) Special = ({name, asset})
const Special = ({name, asset}) => {
    // (20)st useContext + enter, AssetContext + enter
    const newAsset = useContext(AssetContext);
    console.log('new asset', newAsset);
    // export const AssetContext = createContext('');
    // (20)en 


    return (
        <div>
          
            <h3>Special:{name}</h3>
            {/* (9) then in Cousin.jsx file*/}
            <p>Asset: {asset}</p>
            {/* (21) */}
            <p>New Asset:{newAsset}</p>
        </div>
    );
};

export default Special;

// ------------------
// Practice:
// import React from 'react';

// const Special = ({name, asset}) => {
//     const newAsset = useContext(AssetContext)
//     console.log('new asset', newAsset);
    

//     return (
//         <div>
//             <h3>Special:{name}</h3>
//             <p>Asset: {asset}</p>
//             <p>New Asset: {newAsset}</p>
//         </div>
//     );
// };

// export default Special;
// -------------------------------End:38_8-(1) to () --------------------------------