import React from 'react'
import './newUser.css'

export default function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitile">New User</h1>
            <form action="" className="newUserForm">
                <div className="newUserFromItem">
                    <label>Username</label>
                    <input type="text" placeholder="JohnSmith"/>
                </div>
                <div className="newUserFromItem">
                    <label>Full N   ame</label>
                    <input type="text" placeholder="John Smith"/>
                </div>
                <div className="newUserFromItem">
                    <label>Email</label>
                    <input type="text" placeholder="JohnSmith@gmail.com"/>
                </div>
                <div className="newUserFromItem">
                    <label>Password</label>
                    <input type="text" placeholder="Password"/>
                </div>
                <div className="newUserFromItem">
                    <label>Phone</label>
                    <input type="text" placeholder="+445 654 555"/>
                </div>
                <div className="newUserFromItem">
                    <label>Address</label>
                    <input type="text" placeholder="New York, USA - PO0 Street 14YU"/>
                </div>
                <div className="newUserFromItem">
                    <label>Gender</label>
                    <div className="newUserGender">

                        <input type="radio" name="gender" id="male" value="male"/>
                        <label for="male" >Male</label>

                        <input type="radio" name="gender" id="female" value="female"/>
                        <label for="female" >Female</label>

                        <input type="radio" name="gender" id="Other" value="Other"/>
                        <label for="Other" >Other</label>

                    </div>
                </div>
                <div className="newUserFromItem">
                    <label>Active</label>
                    <select name="Active" id="active" className="newUserSelect">
                        <option value="yes" >Yes</option>
                        <option value="no" >No</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}
