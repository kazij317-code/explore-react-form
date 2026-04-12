// // -------------------------------Start: 38_7 ---------------------------------------
// // (7)st rsc+enter
// import React from 'react';
// import Cousin from './Cousin';

// const Aunt = () => {
//     return (
//         <div>
//             <h3>Aunt</h3>
//             {/* (19)st */}
//             <section className='flex'>
//                 <Cousin name='Tom Tom'></Cousin>
//                 <Cousin name='Jom Jom'></Cousin>
//             </section>
//             {/* (19)en then create Special.jsx file in FamilyTree folder */}
//         </div>
//     );
// };

// export default Aunt;

// // (7)en then in Grandpa.jsx file
// // -----------------------
// // Practice:
// // import React from 'react';

// // const Aunt = () => {
// //     return (
// //         <div>
// //             <h3>Aunt</h3>
// //             <section>
// //                 <Cousin name='Tom Tom'></Cousin>
// //                 <Cousin name='Jom Jom'></Cousin>
// //             </section>
// //         </div>
// //     );
// // };

// // export default Aunt;
// // -------------------------------End:38_7-(1) to () --------------------------------
// // -------------------------------Start: 38_8 ---------------------------------------

// import React from 'react';
// import Cousin from './Cousin';
// // (12) Aunt = ({asset})
// const Aunt = ({asset}) => {
//     return (
//         <div>
//             <h3>Aunt</h3>
  
//             <section className='flex'>
//                 {/* (13) <Cousin asset={asset} then in Cousin.jsx file*/}
//                 <Cousin asset={asset} name='Tom Tom'></Cousin>
//                 <Cousin name='Jom Jom'></Cousin>
//             </section>
           
//         </div>
//     );
// };

// export default Aunt;


// // -----------------------
// // Practice:
// // import React from 'react';

// // const Aunt = ({asset}) => {
// //     return (
// //         <div>
// //             <h3>Aunt</h3>
// //             <section>
// //                 <Cousin asset={asset} name='Tom Tom'></Cousin>
// //                 <Cousin name='Jom Jom'></Cousin>
// //             </section>
// //         </div>
// //     );
// // };

// // export default Aunt;
// // -------------------------------End:38_8-(1) to () --------------------------------
// -------------------------------Start: 38_9 ---------------------------------------

import React, { use } from 'react';
import Cousin from './Cousin';
import { MoneyContext } from './FamilyTree';

const Aunt = ({asset}) => {
    // (14) use+enter. MoneyContext+enter
    const [money, setMoney] = use(MoneyContext)

    // (15)st
    const handleAddMoney = () =>{
        setMoney(money + 5000)
    }
    // (15)en

    return (
        <div>
            <h3>Aunt</h3>
  
            <section className='flex'>
                
                <Cousin asset={asset} name='Tom Tom'></Cousin>
                <Cousin name='Jom Jom'></Cousin>
            </section>
           {/* (13) */}
           {/* (16) onClick={handleAddMoney}*/}
           <button onClick={handleAddMoney}>Add 5000 tk</button>

        </div>
    );
};

export default Aunt;


// -----------------------
// Practice:
// import React from 'react';

// const Aunt = ({asset}) => {
//     return (
//         <div>
//             <h3>Aunt</h3>
//             <section>
//                 <Cousin asset={asset} name='Tom Tom'></Cousin>
//                 <Cousin name='Jom Jom'></Cousin>
//             </section>
//         </div>
//     );
// };

// export default Aunt;
// -------------------------------End:38_9-(1) to () --------------------------------