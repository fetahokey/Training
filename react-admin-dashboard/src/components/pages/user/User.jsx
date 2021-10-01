import { CalendarToday, LocationCity, MailOutline, MyLocationOutlined, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './user.css'

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit user</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://i.pravatar.cc/100" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">John Smith</span>
                            <span className="userShowUserTitle">Backend Developer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle"> JohnSmith</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle"> 06/08/1990</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle"> +445 654 555</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle"> JohnSmith@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <MyLocationOutlined className="userShowIcon" />
                            <span className="userShowInfoTitle"> New York, USA - PO0 Street 14YU</span>
                        </div>
                        
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form action="" className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label htmlFor="">Username</label>
                                <input 
                                type="text" 
                                placeholder="JohnSmith" 
                                className="userUpdateInput" 
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Full name</label>
                                <input 
                                type="text" 
                                placeholder="John Smith" 
                                className="userUpdateInput" 
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Email</label>
                                <input 
                                type="text" 
                                placeholder="JohnSmith@gmail.com" 
                                className="userUpdateInput" 
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Phone</label>
                                <input 
                                type="text" 
                                placeholder="+445 654 555" 
                                className="userUpdateInput" 
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Address</label>
                                <input 
                                type="text" 
                                placeholder="New York, USA - PO0 Street 14YU" 
                                className="userUpdateInput" 
                                />
                            </div>
                            
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img 
                                src="https://i.pravatar.cc/300" 
                                alt="" 
                                className="userUpdateImg" 
                                />
                                <label htmlFor="file">
                                     <Publish className="userUpdateIcon"/> 
                                </label>
                                <input type="file" id="file" style={{display: "none"}}/>
                            </div>
                            <button className="userUpdateBtn">
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
