import React, { useEffect, useState } from 'react'

import AboutDescription from '../../components/AboutDescription/AboutDescription';
import AboutSlider from '../../components/AboutSlider/AboutSlider'

const About = () => {
    const [marsRoverPhotos, setMarsRoverPhotos] = useState([]);

    const getYesterdayDate = () => {
        const today = new Date();
        const yesterday = new Date(today);


        const year = String(yesterday.getFullYear() - 1);
        const month = String(yesterday.getMonth() + 1);
        const day = String(yesterday.getDate());

        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate;
    }
    const lastYearDate = getYesterdayDate();

    useEffect(() => {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${lastYearDate}&api_key=8S0Zp1SfdyLGBP92bA30026ljWwX4XKaIgsXpHOx&page=1`)
            .then(resp => resp.json())
            .then(resp => setMarsRoverPhotos(resp.photos))
            .catch(error => console.log('data access error'))
    }, [lastYearDate])
    const containerStyles = {
        width: '500px',
        height: '280px',
        margin: '0 auto'
    }

    return (
        <div style={{ marginBottom: '20px' }}>
            <h2>About The Program</h2>
            <AboutDescription />
            <h2>Curiosity rover images <span style={{ color: '#ded6c9' }}>from last year</span></h2>
            <div style={containerStyles}>
                <AboutSlider slides={marsRoverPhotos} />
            </div>
        </div>
    )
}

export default About