// -------------------------------Start: 38_5 ---------------------------------------
// (2)st rsc+enter
import React from 'react';

const ProductForm = () => {
    // (7)st
    const handleProductSubmit = e =>{
        e.preventDefault();
        // (9)
        // console.log(e.target)
        // (10)st commit previous
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        // console.log(name, price, quantity);
        // (10)en
        // (11)st
        const newProduct = {
            name, 
            price, 
            quantity
        }
        console.log(newProduct); 
        // (11)en
    }
    // (7)en
    return (
        <div>
            {/* (6)st */}
            <h3>Add a product</h3>
            {/* (8)onSubmit={handleProductSubmit} */}
            <form onSubmit={handleProductSubmit}>
                <input type="text" name="name" placeholder="Product Name" />
                <br />
                <input type="text" name="price" placeholder="Product Price" />
                <br />
                <input type="text" name="quantity" placeholder="Product Quantity" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            {/* (6)en */}
        </div>
    );
};

export default ProductForm;
// (2)en then create ProductTable in ProductManagement Folder
// ---------------------------
// Practice:
// import React from 'react';

// const ProductForm = () => {
//     const handleProductSubmit = e =>{
//         e.preventDefault();
//         // console.log(e.target);
        
//         const name = e.target.name.value;
//         const price = e.target.price.value;
//         const quantity = e.target.price.value;
//         // console.log(name, price, quantity);
//         const newProduct = {
//             name, 
//             price, 
//             quantity
//         }
//         console.log(newProduct);       
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
            
//         </div>
//     );
// };

// export default ProductForm;

// -------------------------------End:38_5-(1) to () --------------------------------