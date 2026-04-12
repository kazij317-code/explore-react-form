// // -------------------------------Start: 38_7 ---------------------------------------
// // (1)st rsc+enter
// import React from 'react';
// import Grandpa from './Grandpa';
// // (10)st
// import './FamilyTree.css'
// // (10)en then in FamilyTree.css file

// const FamilyTree = () => {
//     // (22)st
//     const asset = 'diamond';
//     // (22)en then in Special.jsx file
//     return (
//         <div className='family-tree'>
//             <h2>Family Tree</h2>
//             {/* (4) st*/}
//             <Grandpa></Grandpa>
//             {/* (4) en then create Dad.jsx file in FamilyTree folder*/}
//         </div>
//     );
// };

// export default FamilyTree;
// // (1)en then in App.jsx file 
// // ------------------------------
// // Practice:
// // import React from 'react';

// // import './FamilyTree.css'

// // const FamilyTree = () => {
// //     const asset = 'diamond'
// //     return (
// //         <div className='family-tree'>
// //             <h2>Family Tree</h2>
// //             <Grandpa></Grandpa>
// //         </div>
// //     );
// // };

// // export default FamilyTree;

// // -------------------------------End:38_7-(1) to () --------------------------------
// // -------------------------------Start: 38_8 ---------------------------------------

// import React, { createContext } from 'react';
// import Grandpa from './Grandpa';

// import './FamilyTree.css'
// // (16)
// export const AssetContext = createContext('');


// const FamilyTree = () => {

//     const asset = 'diamond';
//     // (18)
//     const newAsset = 'gold';

//     return (
//         <div className='family-tree'>
//             <h2>Family Tree</h2>
//             {/* (1) asset={asset} then in Grandpa.jsx file*/}
//             {/* <Grandpa asset={asset}></Grandpa> */}
//             {/* (17)st commit previous */}
//             {/* (19) value={newAsset} then in Special.jsx file*/}
//             <AssetContext.Provider value={newAsset}>
//                 <Grandpa asset={asset}></Grandpa>
//             </AssetContext.Provider>
//             {/* (17)en */}
//         </div>
//     );
// };

// export default FamilyTree;

// // ------------------------------
// // Practice:
// // import React from 'react';

// // import './FamilyTree.css'

// // export const AssetContext = createContext('');

// // const FamilyTree = () => {

// //     const asset = 'diamond'
// //     const newAsset = 'gold'

// //     return (
// //         <div className='family-tree'>
// //             <h2>Family Tree</h2>

// //             <AssetContext.Provider value={newAsset}>
// //                 <Grandpa asset={asset}></Grandpa>
// //             </AssetContext.Provider>    
// //         </div>
// //     );
// // };

// // export default FamilyTree;

// // -------------------------------End:38_8-(1) to () --------------------------------
// -------------------------------Start: 38_9 ---------------------------------------
import React, { createContext, useState } from 'react';
import Grandpa from './Grandpa';

import './FamilyTree.css'

export const AssetContext = createContext('');
// (1)
export const MoneyContext = createContext(0);


const FamilyTree = () => {
    //    (3)
    const [money, setMoney] = useState(0);

    const asset = 'diamond';

    const newAsset = 'gold';

    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            {/* (5) then in Brother.jsx file*/}
            <h4>Total Family Money: {money}</h4>

            {/* <AssetContext.Provider value={newAsset}>
                <Grandpa asset={asset}></Grandpa>
            </AssetContext.Provider> */}

            {/* (2)st comment previous */}
            {/* (4) value={[money, setMoney]}*/}
            <MoneyContext value={[money, setMoney]}>
                <AssetContext.Provider value={newAsset}>
                    <Grandpa asset={asset}></Grandpa>
                </AssetContext.Provider>
            </MoneyContext>
            {/* (2)en */}

        </div>
    );
};

export default FamilyTree;
// ----------------------------
/**
 * 1. create a context using createContext with a default value make sure you export the context to be used in other files. 
 * */

// ------------------------------
// Practice:
// import React from 'react';

// import './FamilyTree.css'

// export const AssetContext = createContext('');

// export const MoneyContext = createContext(0);

// const FamilyTree = () => {

//     const [money, setMoney] = useState(0)

//     const asset = 'diamond'
//     const newAsset = 'gold'

//     return (
//         <div className='family-tree'>
//             <h2>Family Tree</h2>
//             <h4>Total Family Money: {money}


//             <MoneyContext value={[money, setMoney]}>
//                 <AssetContext.Provider value={newAsset}>
//                     <Grandpa asset={asset}></Grandpa>
//                 </AssetContext.Provider>
//             </MoneyContext>
//         </div>
//     );
// };

// export default FamilyTree;

// -------------------------------End:38_9-(1) to () --------------------------------


