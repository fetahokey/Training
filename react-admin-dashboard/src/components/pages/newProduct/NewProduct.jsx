import React from 'react'
import './newProduct.css'

export default function NewProduct() {
    return (
        <div className="newProduct">
        <h1 className="newProductTitile">New Product</h1>
        <form action="" className="newProductForm">
            <div className="newProductFormItem">
                <label>Product name</label>
                <input type="text" placeholder="USB 3.0 PLUG"/>
            </div>
            <div className="newProductFormItem">
                <label>Description </label>
                <input type="text" placeholder="This is an electronic niche"/>
            </div>
            <div className="newProductFormItem">
                <label>Stock</label>
                <input type="text" placeholder="123"/>
            </div>
            <div className="newProductFormItem">
                <label>Active</label>
                <select name="Active" id="active" className="newProductSelect">
                    <option value="yes" >Yes</option>
                    <option value="no" >No</option>
                </select>
            </div>
            <button className="newProductButton">Create</button>
        </form>
    </div>
    )
}
