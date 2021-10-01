import { Visibility } from '@material-ui/icons'
import React from 'react'
import './widgetSmall.css'

export default function WidgetSmall() {
    return (
        <div className="widgetSmall">
            <span className="widgetSmallTitle">New Join Memebers</span>
            <ul className="widgetSmallList">
                <li className="widgetSmallListItem">
                    <img src="https://i.pravatar.cc/300" alt="" className="widgetSmallImg" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Johen Fado</span>
                        <span className="widgetSmallUserTitle">Full Stack Developer</span>
                    </div>
                    <button className="widgetSmallBtn">
                        <Visibility className="widgetSmallBtnIcon" />
                        View
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <img src="https://i.pravatar.cc/300" alt="" className="widgetSmallImg" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Johen Fado</span>
                        <span className="widgetSmallUserTitle">Full Stack Developer</span>
                    </div>
                    <button className="widgetSmallBtn">
                        <Visibility className="widgetSmallBtnIcon" />
                        View
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <img src="https://i.pravatar.cc/300" alt="" className="widgetSmallImg" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Johen Fado</span>
                        <span className="widgetSmallUserTitle">Full Stack Developer</span>
                    </div>
                    <button className="widgetSmallBtn">
                        <Visibility className="widgetSmallBtnIcon" />
                        View
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <img src="https://i.pravatar.cc/300" alt="" className="widgetSmallImg" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Johen Fado</span>
                        <span className="widgetSmallUserTitle">Full Stack Developer</span>
                    </div>
                    <button className="widgetSmallBtn">
                        <Visibility className="widgetSmallBtnIcon" />
                        View
                    </button>
                </li>
            </ul>
        </div>
    )
}
