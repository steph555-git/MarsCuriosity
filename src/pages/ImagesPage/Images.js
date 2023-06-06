import React, { useState, useEffect } from 'react'
import SearchByDate from '../../components/SearchByDate/SearchByDate'
import ImagesMosaic from '../../components/ImagesMosaic/ImagesMosaic'
import Pagination from '../../components/Pagination/Pagination'

const Images = () => {
    const [currentInputDate, setCurrentInputDate] = useState('');
    const [allDataFromAPIMarsRover, setAllDataFromAPIMarsRover] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [imagePerPage] = useState(15);

    const indexOfLastImage = currentPage * imagePerPage
    const indexOfFirstImage = indexOfLastImage - imagePerPage
    const currentMarsRoverImages = allDataFromAPIMarsRover.slice(indexOfFirstImage, indexOfLastImage)

    const paginate = pageNumber => setCurrentPage(pageNumber)

    useEffect(() => {
        if (currentInputDate !== '') {

            fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${currentInputDate}&api_key=8S0Zp1SfdyLGBP92bA30026ljWwX4XKaIgsXpHOx&page=1`)
                .then(resp => resp.json())
                .then(resp => {
                    setAllDataFromAPIMarsRover(resp.photos)
                })
                .catch(error => console.log('data access error'))
        }
    }, [currentInputDate])

    useEffect(() => console.log('allDataFromAPIMarsRover', allDataFromAPIMarsRover), [allDataFromAPIMarsRover])

    return (
        <>
            <h2>Mars Images By Date</h2>
            <SearchByDate setCurrentInputDate={setCurrentInputDate} />
            {/*allDataFromAPIMarsRover === [] ? <div style={{ color: 'red' }}>No data at this date...</div> : <ImagesMosaic marsRoverPhotos={currentMarsRoverImages} />*/}
            <ImagesMosaic marsRoverPhotos={currentMarsRoverImages} />
            <div style={{ textAlign: 'right' }}>
                <Pagination
                    imagePerPage={imagePerPage}
                    totalImages={allDataFromAPIMarsRover.length}
                    paginate={paginate} />
            </div>
        </>
    )
}

export default Images