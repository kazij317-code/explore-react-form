// // -------------------------------Start: 38_7 ---------------------------------------
// // (13)st rsc+enter
// import React from 'react';
// import Special from './Special';

// const Myself = () => {
//     return (
//         <div>
//             <h3>Myself</h3>
//             {/* (21) then in FamilyTree.jsx file*/}
//             <Special></Special>
//         </div>
//     );
// };

// export default Myself;
// // (13)en then create Brother.jsx file in FamilyTree folder
// // ---------------------
// // Practice:
// // import React from 'react';

// // const Myself = () => {
// //     return (
// //         <div>
// //             <h3>Myself</h3>
// //             <Special></Special>
// //         </div>
// //     );
// // };

// // export default Myself;

// // -------------------------------End:38_7-(1) to () --------------------------------
// -------------------------------Start: 38_8 ---------------------------------------

import React from 'react';
import Special from './Special';
// (6) Myself = ({asset})
const Myself = ({asset}) => {
    return (
        <div>
            <h3>Myself</h3>
            {/* (7) asset={asset} then in Special.jsx file*/}
            <Special asset={asset}></Special>
        </div>
    );
};

export default Myself;

// ---------------------
// Practice:
// import React from 'react';

// const Myself = ({asset}) => {
//     return (
//         <div>
//             <h3>Myself</h3>
//             <Special asset={asset}></Special>
//         </div>
//     );
// };

// export default Myself;

// -------------------------------End:38_8-(1) to () --------------------------------