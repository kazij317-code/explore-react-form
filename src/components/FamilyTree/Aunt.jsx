// -------------------------------Start: 38_7 ---------------------------------------
// (7)st rsc+enter
import React from 'react';
import Cousin from './Cousin';

const Aunt = () => {
    return (
        <div>
            <h3>Aunt</h3>
            {/* (19)st */}
            <section className='flex'>
                <Cousin name='Tom Tom'></Cousin>
                <Cousin name='Jom Jom'></Cousin>
            </section>
            {/* (19)en then create Special.jsx file in FamilyTree folder */}
        </div>
    );
};

export default Aunt;

// (7)en then in Grandpa.jsx file
// -----------------------
// Practice:
// import React from 'react';

// const Aunt = () => {
//     return (
//         <div>
//             <h3>Aunt</h3>
//             <section>
//                 <Cousin name='Tom Tom'></Cousin>
//                 <Cousin name='Jom Jom'></Cousin>
//             </section>
//         </div>
//     );
// };

// export default Aunt;
// -------------------------------End:38_7-(1) to () --------------------------------