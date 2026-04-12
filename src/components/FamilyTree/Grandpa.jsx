// // -------------------------------Start: 38_7 ---------------------------------------
// // (3)st rsc+enter
// import React from 'react';
// import Dad from './Dad';
// import Uncle from './Uncle';
// import Aunt from './Aunt';

// const Grandpa = () => {
//     return (
//         <div>
//             <h3>Grandpa</h3>
//             {/* (8)st */}
//             {/* (12) className='flex' then create Myself.jsx file in FamilyTree file*/}
//             <section className='flex'>
//                 <Dad></Dad>
//                 <Uncle></Uncle>
//                 <Aunt></Aunt>
//             </section>
//             {/* (8)en then create FamilyTree.css file in FamilyTree folder*/}
//         </div>
//     );
// };

// export default Grandpa;

// // (3)en then in FamilyTree.jsx file
// // --------------------------
// // Practice:
// // import React from 'react';

// // const Grandpa = () => {
// //     return (
// //         <div className='flex'>
// //             <h3>Grandpa</h3>
// //             <section>
// //                 <Dad></Dad>
// //                 <Uncle></Uncle>
// //                 <Aunt></Aunt>
// //             </section>
            
// //         </div>
// //     );
// // };

// // export default Grandpa;

// // -------------------------------End:38_7-(1) to () --------------------------------
// -------------------------------Start: 38_8 ---------------------------------------

import React from 'react';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunt from './Aunt';
// (2)Grandpa = ({asset})
const Grandpa = ({asset}) => {
    return (
        <div>
            <h3>Grandpa</h3>
            <section className='flex'>
                {/* (3) <Dad asset={asset} then in Dad.jsx file*/}
                <Dad asset={asset}></Dad>
                <Uncle></Uncle>
                {/* (11) asset={asset} then in Aunt.jsx file*/}
                <Aunt asset={asset}></Aunt>
            </section>
           
        </div>
    );
};

export default Grandpa;

// --------------------------
// Practice:
// import React from 'react';

// const Grandpa = () => {
//     return (
//         <div className='flex'>
//             <h3>Grandpa</h3>
//             <section>
//                 <Dad></Dad>
//                 <Uncle></Uncle>
//                 <Aunt></Aunt>
//             </section>
            
//         </div>
//     );
// };

// export default Grandpa;

// -------------------------------End:38_8-(1) to () --------------------------------