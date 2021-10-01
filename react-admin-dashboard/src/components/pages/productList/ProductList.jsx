import React from 'react'
import './productList.css'
import { DataGrid } from '@material-ui/data-grid';
import { Link } from 'react-router-dom';
import { productRows } from '../../../dummyData';
import { useState } from 'react';
import { DeleteOutline } from '@material-ui/icons';


export default function ProductList() {
    const [data, setData] = useState(productRows);
    const handleDelete = (id)=>{
        setData(data.filter((item)=>item.id !== id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 30 },
        {
          field: 'product',
          headerName: 'Product', 
          width: 230,
          renderCell: (params) =>{
              return(
                  <div className="productListItem">
                      <img src= {params.row.img} alt="" className="productlistImg" />
                      <span className="productListItemName">
                          {params.row.name}
                      </span>
                  </div>
              )
          }  
        },
        {
          field: 'stock',
          headerName: 'Stock', 
          width: 150 
        },
        {
            field: 'status',
            headerName: 'Status', 
            width: 150 
        },
        {
          field: 'price',
          headerName: 'Price', 
          width: 230 
        },
        {
            field: 'Action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) =>{
                return(
                    <>
                        <Link to={'/product/'+params.row.id}>
                        <button className="productListEditBtn">Edit</button>
                        </Link>
                        <DeleteOutline className="productListDelete" onClick={()=>{handleDelete(params.row.id)}} />
                    </>
                )
            }
        }
      ];
    return (
        <div className="productList">
             <DataGrid
                rows={data}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[8]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}
