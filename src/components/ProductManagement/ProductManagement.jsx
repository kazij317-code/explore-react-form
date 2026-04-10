// // -------------------------------Start: 38_5 ---------------------------------------
// // (1)st rsc+enter
// import React from 'react';
// import ProductForm from './ProductForm';
// import ProductTable from './ProductTable';

// const ProductManagement = () => {
//     return (
//         <div>
//             {/* (4) st*/}
//             <ProductForm></ProductForm>
//             <ProductTable></ProductTable>
//             {/* (4) en then in App.jsx file*/}
//         </div>
//     );
// };

// export default ProductManagement;
// // (1)en then create ProductForm in ProductManagement Folder
// // ------------------------------------------------------
// // Practice:
// // import React from 'react';

// // const ProductManagement = () => {
// //     return (
// //         <div>
// //             <ProductForm></ProductForm>
// //             <ProductTable></ProductTable>
// //         </div>
// //     );
// // };

// // export default ProductManagement;

// // -------------------------------End:38_5-(1) to () --------------------------------
// -------------------------------Start: 38_6 ---------------------------------------

import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagement = () => {
// (1)st
    const [products, setProducts] = useState([]);

    const handleAddProduct = newProduct => {
        const newProducts = [...products, newProduct];
        setProducts(newProducts);
    }
    // (1)en
    
    return (
        <div>
            {/* (2) handleAddProduct={handleAddProduct} and then in ProductForm.jsx file */}
            <ProductForm handleAddProduct={handleAddProduct}></ProductForm>
            {/* (5) products={products} and then in ProductTable.jsx file*/}
            <ProductTable products={products}></ProductTable>
            
        </div>
    );
};

export default ProductManagement;

// ------------------------------------------------------
// Practice:
// import React from 'react';

// const ProductManagement = () => {
//     return (
//         <div>
//             <ProductForm></ProductForm>
//             <ProductTable></ProductTable>
//         </div>
//     );
// };

// export default ProductManagement;

// -------------------------------End:38_6-(1) to () --------------------------------
