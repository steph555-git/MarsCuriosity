import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './Pagination.module.css'

const Pagination = ({ imagePerPage, totalImages, paginate }) => {
    const [activePage, setActivePage] = useState(null)

    const handleClick = (number) => {
        setActivePage(number);
        paginate(number);
    };

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalImages / imagePerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <ul className={styles.pagination}>
            {pageNumbers.map(number => (
                <li
                    key={number}
                    className={`${styles.liModule} ${activePage === number ? styles.active : ''}`}

                >
                    <Link
                        onClick={() => handleClick(number)}
                        to='#'
                        style={{ color: `${activePage === number ? 'white' : '#a1a0a0'}` }}
                        id={styles.pageLink}
                    >
                        {number}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default Pagination