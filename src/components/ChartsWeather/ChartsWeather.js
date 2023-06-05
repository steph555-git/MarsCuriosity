import React, { useState, useEffect } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'

const ChartsWeather = ({ weatherAllData }) => {
    console.log(weatherAllData)
    const [dateWeather, setDateWeather] = useState([])

    useEffect(() => {
        if (weatherAllData && weatherAllData.forecast) {
            const forcastData = weatherAllData.forecast.forecastday
            const tranformData = forcastData?.map(temp => ({ 'date': temp.date, 'temp': temp.day.avgtemp_c }))
            setDateWeather(tranformData)
        }
    }, [weatherAllData])

    return (
        <div style={{ margin: 100 }}>
            <LineChart width={800} height={300} data={dateWeather} margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
                <Line type="monotone" dataKey="temp" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="4" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    )
}

export default ChartsWeather