// // -------------------------------Start: 38_7 ---------------------------------------
// // (17)st
// import React from 'react';

// const Cousin = ({name}) => {
//     return (
//         <div>
//             <h3>{name}</h3>
//         </div>
//     );
// };

// export default Cousin;

// // (17)en then in Uncle.jsx file
// // ---------------------------------
// // Practice:
// // import React from 'react';

// // const Cousin = () => {
// //     return (
// //         <div>
            
// //         </div>
// //     );
// // };

// // export default Cousin;
// // -------------------------------End:38_7-(1) to () --------------------------------
// -------------------------------Start: 38_8 ---------------------------------------

import React from 'react';
import Special from './Special';
// (14) Cousin = ({name, asset})
const Cousin = ({name, asset}) => {
    return (
        <div>
            <h3>{name}</h3>
        {/* (10)st  */}
            {
                // (15) <Special asset={asset} then in FamilyTree.jsx file>
                name === 'Tom Tom' && <Special asset={asset}></Special>
            }
        {/* (10)en then in Grandpa.jsx file  */}
        </div>
    );
};

export default Cousin;


// ---------------------------------
// Practice:
// import React from 'react';

// const Cousin = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Cousin;
// -------------------------------End:38_8-(1) to () --------------------------------