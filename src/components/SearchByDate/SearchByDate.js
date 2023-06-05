import React, { useRef } from 'react'

import styles from './SearchByDate.module.css'

const SearchByDate = ({ setCurrentInputDate }) => {
    const currentInputDate = useRef(null)

    const handleSearch = () => {
        const selectedDate = currentInputDate.current.value;
        console.log('selectedDate', selectedDate)
        setCurrentInputDate(selectedDate);
    };


    return (
        <>
            <label htmlFor="">Earth date : </label>
            <input
                className={styles.inputDate}
                type='text'
                placeholder='Please enter date YYYY-MM-DD'
                ref={currentInputDate} />

            <button className={styles.searchButton} onClick={handleSearch}>Search
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256" style={{ marginLeft: 10, position: 'relative', top: 5 }}>
                    <g fill="#b4b4b4" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(8,8)"><path d="M19,3c-5.51172,0 -10,4.48828 -10,10c0,2.39453 0.83984,4.58984 2.25,6.3125l-7.96875,7.96875l1.4375,1.4375l7.96875,-7.96875c1.72266,1.41016 3.91797,2.25 6.3125,2.25c5.51172,0 10,-4.48828 10,-10c0,-5.51172 -4.48828,-10 -10,-10zM19,5c4.42969,0 8,3.57031 8,8c0,4.42969 -3.57031,8 -8,8c-4.42969,0 -8,-3.57031 -8,-8c0,-4.42969 3.57031,-8 8,-8z"></path></g></g>
                </svg>
            </button>

        </>
    )
}

export default SearchByDate