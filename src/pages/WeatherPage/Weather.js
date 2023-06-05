import React, { useState, useEffect } from 'react'

//import SearchByDate from '../../components/SearchByDate/SearchByDate'
import ChartsWeather from '../../components/ChartsWeather/ChartsWeather';

const Weather = () => {
    //const [currentInputDate, setCurrentInputDate] = useState('');
    const [weatherAllData, setWeatherAllData] = useState([]);

    useEffect(() => {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=19d2956476524ba387d91946231002&q=32.0618402,35.0531672&lang=en&days=3`)
            .then(resp => resp.json())
            .then(resp => {
                setWeatherAllData(resp)
            })
            .catch(error => console.log('API data access error'))
    }, [])

    return (
        <>
            <h2>Mars Weather</h2>
            {/*<SearchByDate setCurrentInputDate={setCurrentInputDate} />*/}
            <ChartsWeather weatherAllData={weatherAllData} />
        </>
    )
}

export default Weather