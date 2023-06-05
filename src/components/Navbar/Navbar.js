import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navModule} style={{ width: '100%' }}>
            <div style={{ width: '1200px', margin: '0 auto', display: 'flex' }}>
                <span className={styles.spanModule}><Link to="/">Curosity Project</Link></span>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Link className={styles.navBarLink} to="/">HOME</Link>
                    <Link className={styles.navBarLink} to="/images">IMAGES</Link>
                    <Link className={styles.navBarLink} to="/weather">WEATHER</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar