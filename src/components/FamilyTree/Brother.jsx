// // -------------------------------Start: 38_7 ---------------------------------------
// // (14)st rsc+enter
// import React from 'react';

// const Brother = () => {
//     return (
//         <div>
//            <h3>Brother</h3> 
//         </div>
//     );
// };

// export default Brother;

// // (14)en then create Sister.jsx file in FamilyTree folder
// // -------------------
// // Practice:
// // import React from 'react';

// // const Brother = () => {
// //     return (
// //         <div>
            
// //         </div>
// //     );
// // };

// // export default Brother;
// // -------------------------------End:38_7-(1) to () --------------------------------
// -------------------------------Start: 38_9 ---------------------------------------

import React, { use } from 'react';
import { MoneyContext } from './FamilyTree';

const Brother = () => {
    // (6) use + enter, MoneyContext + enter
    const [money, setMoney] = use(MoneyContext);

    // export const MoneyContext = createContext(0);
    // const [money, setMoney] = useState(0);

    return (
        <div>
           <h3>Brother</h3> 
           {/* (7) st*/}
           <button onClick={() =>setMoney(money + 1000)}>Add 1000 tk</button>
           {/* (7) en then create Friend.jsx file in FamilyTree folder*/}
        </div>
    );
};

export default Brother;


// -------------------
// Practice:
// import React from 'react';

// const Brother = () => {

//     const [money, setMoney] = use(MoneyContext);
  
//     return (
//         <div>
//             <h3>Brother</h3>
//             <button onClick={() => setMoney(money + 1000)}>Add 1000 tk</button>
//         </div>
//     );
// };

// export default Brother;
// -------------------------------End:38_9-(1) to () --------------------------------