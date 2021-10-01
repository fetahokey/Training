import React from 'react'
import './widgetLarge.css'

export default function WidgetLarge() {

    const Button = ({type}) =>{
        return (<button className={"widgetLgButton " + type}>{type}</button>)
    }

    return (
        <div className="widgetLarge">
            <h3 className="widgetLargeTitle">
                Latest transactions
            </h3>
            <table className="widgetLgTable">
                <tbody>
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://i.pravatar.cc/200" alt="" className="widgetLgImg" />
                        <span className="widgetLgUserName">Sams Karol</span>
                    </td>
                    <td className="widgetLgDate">
                        25 September, 2022
                    </td>
                    <td className="widgetLgAmount">
                        51 000 DZD
                    </td>
                    <td className="widgetLgStatus">
                        <Button type="Approved"/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://i.pravatar.cc/200" alt="" className="widgetLgImg" />
                        <span className="widgetLgUserName">Sams Karol</span>
                    </td>
                    <td className="widgetLgDate">
                        25 September, 2022
                    </td>
                    <td className="widgetLgAmount">
                        51 000 DZD
                    </td>
                    <td className="widgetLgStatus">
                        <Button type="Approved"/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://i.pravatar.cc/200" alt="" className="widgetLgImg" />
                        <span className="widgetLgUserName">Sams Karol</span>
                    </td>
                    <td className="widgetLgDate">
                        25 September, 2022
                    </td>
                    <td className="widgetLgAmount">
                        51 000 DZD
                    </td>
                    <td className="widgetLgStatus">
                        <Button type="Pending"/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://i.pravatar.cc/200" alt="" className="widgetLgImg" />
                        <span className="widgetLgUserName">Sams Karol</span>
                    </td>
                    <td className="widgetLgDate">
                        25 September, 2022
                    </td>
                    <td className="widgetLgAmount">
                        51 000 DZD
                    </td>
                    <td className="widgetLgStatus">
                        <Button type="Declined"/>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
