import React from 'react'
import Chart from '../../chart/Chart'
import FeatureadInfo from '../../featuredInfo/FeatureadInfo'
import './home.css'
import { salesData } from '../../../dummyData'
import WidgetLarge from '../../widgets/widgetLarge/WidgetLarge'
import WidgetSmall from '../../widgets/widgetSmall/WidgetSmall'


export default function Home() {
    return (
        <div className="home">
            <FeatureadInfo/>
            <Chart data={salesData} title="Sales Analytics" dataKey="sales" grid/>
            <div className="homeWidgets" >
                <WidgetSmall/>
                <WidgetLarge/>
            </div>
        </div>
    )
}
