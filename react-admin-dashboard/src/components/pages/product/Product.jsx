import React from 'react';
import './product.css';
import { Link } from 'react-router-dom';
import Chart from "../../chart/Chart";
import {productData} from "../../../dummyData";
import { Publish } from '@material-ui/icons';

export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainter">
                <h1 className="productTitle">Product</h1>
                <Link to="/newProduct"> 
                    <button className="productAddBtn">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="sales" title="Sales performance"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://i.pravatar.cc/150" alt="" className="productInfoImg" />
                        <span className="productName">USB 3.0 PlXR</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id: </span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales: </span>
                            <span className="productInfoValue">4523</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:  </span>
                            <span className="productInfoValue">3</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active: </span>
                            <span className="productInfoValue">yes</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form action="" className="productForm">
                    <div className="productFormLeft">
                        <label >Product Name</label>
                        <input type="text" placeholder="USB 3.0 PLUG" />
                        <label >In Stock</label>
                        <select name="inStock" id="idStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label >Active</label>
                        <select name="active" id="idActive">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>

                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://i.pravatar.cc/150" alt="" className="productUploadImg" />
                            <label for="file">
                                <Publish/>
                            </label>
                            <input type="file" id="file" style={{display:"none"}}/>
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
