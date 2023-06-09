import React, { useState } from 'react'

import styles from './AboutSlider.module.css'

const AboutSlider = ({ slides }) => {
    const [index, setIndex] = useState(0);

    const pics = slides.map((pic, i) => (
        <img key={i} src={pic.img_src} className={styles.image} alt='images-slider' />
    ))

    return (
        <>
            <div className={styles.parent}>
                <button className={styles.leftArrowStyle} onClick={() => setIndex(preValue => --preValue)} disabled={index === 0}>≪</button>
                <div className={styles.window}>
                    <div className={styles.row} style={{ transform: `translateX(-${index * 1100}px)` }}>{pics}</div>
                </div>
                <button className={styles.rightArrowStyle} onClick={() => setIndex(preValue => ++preValue)} disabled={pics.length === index + 1}>≫</button>
            </div >
            <div className={styles.pager}>Page {index}/25</div>
        </>
    )
}

export default AboutSlider