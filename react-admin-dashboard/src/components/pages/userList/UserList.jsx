import React, { useState } from 'react'
import './userList.css'
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../../../dummyData';
import { Link } from 'react-router-dom';



export default function UserList() {
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        {
          field: 'user',
          headerName: 'User', 
          width: 230,
          renderCell: (params) =>{
              return(
                  <div className="userListUser">
                      <img src= {params.row.avatar} alt="" className="userlistImg" />
                      <span className="userListUserName">
                          {params.row.username}
                      </span>
                  </div>
              )
          }  
        },
        {
          field: 'email',
          headerName: 'Email', 
          width: 230 
        },
        {
            field: 'status',
            headerName: 'Status', 
            width: 150 
        },
        {
          field: 'transaction',
          headerName: 'Transaction', 
          width: 230 
        },
        {
            field: 'Action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) =>{
                return(
                    <>
                        <Link to={'/user/'+params.row.id}>
                        <button className="UserListEditBtn">Edit</button>
                        </Link>
                        <DeleteOutline className="UserListDelete" onClick={()=>{handleDelete(params.row.id)}} />
                    </>
                )
            }
        }
      ];
      
    const [data, setData] = useState(userRows);
    
    const handleDelete = (id)=>{
        setData(data.filter((item)=>item.id !== id))
    }

    return (
        <div className="userList">
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
