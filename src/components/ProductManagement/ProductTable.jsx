// -------------------------------Start: 38_5 ---------------------------------------
// (3)st rsc+enter
import React from 'react';
// (6)ProductTable = ({products})
const ProductTable = ({products}) => {
    return (
        <div>
            {/* (7) */}
            <h3>Products: {products.length}</h3>
            {/* (8)st */}
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) =><tr key={index}>
                        {/* <td>{index}</td> */}
                        <td>{index + 1}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        <td></td>
                    </tr>)
                    }
                </tbody>
            </table>
            {/* (8)en then in ProductForm.jsx file */}
            
        </div>
    );
};

export default ProductTable;
// (3)en then in ProductManagement.jsx file
// -----------------------
// Practice:
// import React from 'react';

// const ProductTable = ({products}) => {
//     return (
//         <div>
//             <h3>Products: {products.length}</h3>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>No.</th>
//                         <th>Product</th>
//                         <th>Price</th>
//                         <th>Quantity</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         products.map((product, index) =><tr key={index}>
//                         <td>{index + 1}</td>
//                         <td>{product.name}</td>
//                         <td>{product.price}</td>
//                         <td>{product.quantity}</td>
//                         <td></td>
//                     </tr>)
//                     }
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default ProductTable;

// -------------------------------End:38_5-(1) to () --------------------------------