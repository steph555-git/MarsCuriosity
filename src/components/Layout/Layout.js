import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'

const Layout = (props) => {

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 700);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <Navbar />
            <main style={isSmallScreen ? { margin: 'auto' } : { width: '1200px', margin: 'auto' }}>
                {
                    props.children

                }
            </main>

        </>
    )
}

export default Layout