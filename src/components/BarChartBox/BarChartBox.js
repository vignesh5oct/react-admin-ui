import React from 'react'
import "./barChartBox.scss"
import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts'

const BarChartBox = (props) => {
  return (
    <div className='barChartBox'>
      <h1>{props.title}</h1>
      <div className='chart'>
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: 'none' }} />
            <Bar dataKey={props.dataKey} fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default BarChartBox
