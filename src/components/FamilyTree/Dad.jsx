// -------------------------------Start: 38_7 ---------------------------------------
// (5)st rsc+enter
import React from 'react';
import Myself from './Myself';
import Brother from './Brother';
import Sister from './Sister';

const Dad = () => {
    return (
        <div>
            <h3>Dad</h3>
            {/* (16)st */}
            <section className='flex'>
                <Myself></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
            {/* (16)en then create Cousin.jsx file in FamilyTree folder*/}
        </div>
    );
};

export default Dad;
// (5)en then create Uncle.jsx file in FamilyTree folder
// ---------------------
// Practice:
// import React from 'react';

// const Dad = () => {
//     return (
//         <div>
//             <h3>Dad</h3>
//             <section className='flex'>
//                 <Myself></Myself>
//                 <Brother></Brother>
//                 <Sister></Sister>
//             </section>
//         </div>
//     );
// };

// export default Dad;
// -------------------------------End:38_7-(1) to () --------------------------------