// -------------------------------Start: 38_5 ---------------------------------------
// (2)st rsc+enter
import React from 'react';

const ProductForm = () => {
    // (7)st
    const handleProductSubmit = e =>{
        e.preventDefault();
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

// -------------------------------End:38_5-(1) to () --------------------------------