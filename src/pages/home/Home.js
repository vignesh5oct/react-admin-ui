import React from 'react'
import "./home.scss"
import TopBox from '../../components/topBox/TopBox'
import ChartBox from '../../components/chartBox/ChartBox'
import { chartBoxUser, chartBoxConversion, chartBoxProduct, chartBoxRevenue } from '../../utils/ConfigBoxItems'
import BarChartBox from '../../components/BarChartBox/BarChartBox'

const Home = () => {
  return (
    <div className='home'>
      <div className='box box1'><TopBox /></div>
      <div className='box box2'><ChartBox {...chartBoxUser} /></div>
      <div className='box box3'><ChartBox  {...chartBoxProduct} /></div>
      <div className='box box4'></div>
      <div className='box box5'><ChartBox  {...chartBoxConversion} /></div>
      <div className='box box6'><ChartBox  {...chartBoxRevenue} /></div>
      <div className='box box7'><BarChartBox/></div>
      <div className='box box8'>box8</div>
      <div className='box box9'>box9</div>
    </div>
  )
}

export default Home
