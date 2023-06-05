import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './AboutDescription.module.css'
import imgCuriosity from './Curiosity.jpg'

const AboutDescription = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 600);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const navToImage = () => {
        navigate('/images');
    };
    const navToWeather = () => {
        navigate('/weather');
    };

    return (
        <div className={styles.container} style={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row' }}>
            <div style={isSmallScreen ? { width: '100%' } : { flex: 1 }} className={styles.imageCuriosity}>
                <img src={imgCuriosity} className={styles.imgModule} alt="Curiosity in mission" />
            </div>
            <div style={isSmallScreen ? { width: '100%' } : { flex: 1 }} className={styles.descMission}>
                <p>Part of NASA's Mars Science Laboratory mission, Curiosity is the largest and most capable rover ever sent to Mars. It launched Nov. 26, 2011 and landed on Mars at 10:32 p.m. PDT on Aug. 5, 2012 (1:32 a.m. EDT on Aug. 6, 2012).

                    Curiosity set out to answer the question: Did Mars ever have the right environmental conditions to support small life forms called microbes? Early in its mission, Curiosity's scientific tools found chemical and mineral evidence of past habitable environments on Mars. It continues to explore the rock record from a time when Mars could have been home to microbial life.</p>
                <button className={styles.otherViewButton} onClick={navToImage}>View Images By Date</button>
                <button className={styles.otherViewButton} onClick={navToWeather}>View Weather</button>
            </div>

        </div>
    )
}

export default AboutDescription