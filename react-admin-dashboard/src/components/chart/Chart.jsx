import React from 'react';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import './chart.css';



export default function Chart({title, data, dataKey, grid}) {
    return (
        <div className="chart">
            <h3 className="chartTitle">
                {title}
            </h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550BD"/>
                    <Line type="monotone" dataKey={dataKey} stroke="darkblue" />
                    <Tooltip/>
                    {grid && <CartesianGrid stroke="#F0F0F7" strokeDasharray="6 4"/>}
                    </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
