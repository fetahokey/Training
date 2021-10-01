import React from 'react';
import './topbar.css';
import {NotificationsNone, Language, Settings} from '@material-ui/icons';


export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWarpper">
            <div className="topLeft"> 
                <span className="logo"> Readmin</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBadge">2</span>
                </div>

                <div className="topbarIconContainer">
                    <Language/>
                    <span className="topIconBadge">FR</span>
                </div>

                <div className="topbarIconContainer">
                    <Settings/>
                </div>

                <img src="https://i.pravatar.cc/300" alt="" className="topAvatar" />
            </div>
            </div>
        </div>
    )
}
