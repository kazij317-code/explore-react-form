// -------------------------------Start: 38_7 ---------------------------------------
// (6)st rsc+enter
import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
    return (
        <div>
            <h3>Uncle</h3>
            {/* (18) st*/}
            <section className='flex'>
                <Cousin name='Rafsan'></Cousin>
                <Cousin name='Japsha'></Cousin>
            </section>
            {/* (18) en then in Aunt.jsx file*/}
        </div>
    );
};

export default Uncle;
// (6)en then create Aunt.jsx file in FamilyTree folder
// ----------------------
// Practice:
// import React from 'react';

// const Uncle = () => {
//     return (
//         <div>
//             <h3>Uncle</h3>
//             <section className='flex'>
//                 <Cousin name='Rafsan'></Cousin>
//                 <Cousin name='Japsha'></Cousin>
//             </section>
//         </div>
//     );
// };

// export default Uncle;

// -------------------------------End:38_7-(1) to () --------------------------------