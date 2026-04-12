// -------------------------------Start: 38_9 ---------------------------------------
// (8)st
import React, { use } from 'react';
import { MoneyContext } from './FamilyTree';

const Friend = () => {

    // (11) use+enter, MoneyContext+enter
    const [money, setMoney] = use(MoneyContext)

    // extra
    const handleAddMoney = () =>{
        setMoney(money + 2000)
    }
    // extra

    return (
        <div>
            {/* (10) */}
            <h3>Friend</h3>
            {/* (12) then Aunt.jsx file*/}
            <p>Family got: {money}</p>
            
            {/* extra */}
            <button onClick={handleAddMoney}>Add 2000 tk</button>
            {/* extra */}
            
        </div>
    );
};

export default Friend;
// (8)en then Cousin.jsx file

// -------------------------------End:38_9-(1) to () --------------------------------