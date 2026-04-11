// // -------------------------------Start: 38_5 ---------------------------------------
// // (2)st rsc+enter
// import React from 'react';

// const ProductForm = () => {
//     // (7)st
//     const handleProductSubmit = e =>{
//         e.preventDefault();
//         // (9)
//         // console.log(e.target)
//         // (10)st commit previous
//         const name = e.target.name.value;
//         const price = e.target.price.value;
//         const quantity = e.target.quantity.value;
//         // console.log(name, price, quantity);
//         // (10)en
//         // (11)st
//         const newProduct = {
//             name, 
//             price, 
//             quantity
//         }
//         console.log(newProduct); 
//         // (11)en
//     }
//     // (7)en
//     return (
//         <div>
//             {/* (6)st */}
//             <h3>Add a product</h3>
//             {/* (8)onSubmit={handleProductSubmit} */}
//             <form onSubmit={handleProductSubmit}>
//                 <input type="text" name="name" placeholder="Product Name" />
//                 <br />
//                 <input type="text" name="price" placeholder="Product Price" />
//                 <br />
//                 <input type="text" name="quantity" placeholder="Product Quantity" />
//                 <br />
//                 <input type="submit" value="Submit" />
//             </form>
//             {/* (6)en */}
//         </div>
//     );
// };

// export default ProductForm;
// // (2)en then create ProductTable in ProductManagement Folder
// // ---------------------------
// // Practice:
// // import React from 'react';

// // const ProductForm = () => {
// //     const handleProductSubmit = e =>{
// //         e.preventDefault();
// //         // console.log(e.target);
        
// //         const name = e.target.name.value;
// //         const price = e.target.price.value;
// //         const quantity = e.target.price.value;
// //         // console.log(name, price, quantity);
// //         const newProduct = {
// //             name, 
// //             price, 
// //             quantity
// //         }
// //         console.log(newProduct);       
// //     }

// //     return (
// //         <div>
// //             <h3>Add a Product</h3>
// //             <form onSubmit={handleProductSubmit}>
// //                 <input type="text" name="name" placeholder="Product Name" />
// //                 <br />
// //                 <input type="text" name="price" placeholder="Product Price" />
// //                 <br />
// //                 <input type="text" name="quantity" placeholder="Product Quantity" />
// //                 <br />
// //                 <input type="submit" value="Submit" />

// //             </form>
            
// //         </div>
// //     );
// // };

// // export default ProductForm;

// // -------------------------------End:38_5-(1) to () --------------------------------
// -------------------------------Start: 38_6 ---------------------------------------

import React, { useState } from 'react';
// (3) ProductForm = ({handleAddProduct})
const ProductForm = ({handleAddProduct}) => {
    // (9)
    const [error, setError] = useState('');
    
    const handleProductSubmit = e =>{
        e.preventDefault();
        
        // console.log(e.target)
       
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        // console.log(name, price, quantity);
        // (10)st
        // validation
       if(name.length === 0){
        setError('Please provide a product name');
        // (13)
        return
       }
       else if(price.length === 0){
        setError('Please provide a price');
        // (14)
        return
       }
       else if(price < 0){
        setError('Price can not be negative')
        // (15)
        return
       }
       else{
        setError('');
       }
        // (10)en
       
        const newProduct = {
            name, 
            price, 
            quantity
        }
        // console.log(newProduct); 
        // (4)commit previous and then in ProductManagement.jsx file
        handleAddProduct(newProduct);
        // (12)st 
        // if(!error){
        //     handleAddProduct(newProduct);
        // }
        // (12)en 
        
    }
   
    return (
        <div>
          
            <h3>Add a product</h3>
            
            <form onSubmit={handleProductSubmit}>
                <input type="text" name="name" placeholder="Product Name" />
                <br />
                <input type="text" name="price" placeholder="Product Price" />
                <br />
                <input type="text" name="quantity" placeholder="Product Quantity" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            {/* (11) */}
            <p style={{color:'red'}}><small>{error}</small></p>
           
        </div>
    );
};

export default ProductForm;

// ---------------------------
// Practice:
// import React from 'react';

// const ProductForm = ({handleAddProduct}) => {

//     const [error, serError] = useState('');

//     const handleProductSubmit = e =>{
//         e.preventDefault();
//         // console.log(e.target);
        
//         const name = e.target.name.value;
//         const price = e.target.price.value;
//         const quantity = e.target.price.value;
//         // console.log(name, price, quantity);

//         if(name.length === 0){
//             setError('Please provide a product name');
//             return
//         }
//         else if(price.length === 0){
//             setError('Please provide a price');
//             return
//         }
//         else if(price <0){
//             setError('Price can not be negative')
//             return
//         }
//         else{
//             setError('');
//         }

//         const newProduct = {
//             name, 
//             price, 
//             quantity
//         }
//         // console.log(newProduct);   
//         handleAddProduct(newProduct);    
//     }

//     return (
//         <div>
//             <h3>Add a Product</h3>
//             <form onSubmit={handleProductSubmit}>
//                 <input type="text" name="name" placeholder="Product Name" />
//                 <br />
//                 <input type="text" name="price" placeholder="Product Price" />
//                 <br />
//                 <input type="text" name="quantity" placeholder="Product Quantity" />
//                 <br />
//                 <input type="submit" value="Submit" />

//             </form>
//             <p style={{color:'red'}}><small>{error}</small></p>
            
//         </div>
//     );
// };

// export default ProductForm;

// -------------------------------End:38_6-(1) to () --------------------------------