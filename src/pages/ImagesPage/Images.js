import React, { useState } from "react";
import { getImages } from "../../services/api";
import SearchByDate from "../../components/SearchByDate/SearchByDate";
import ImagesMosaic from "./ImagesMosaic/ImagesMosaic";
import Pagination from "../../components/Pagination/Pagination";

const Images = () => {

  const [images, setImages] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [imagePerPage] = useState(15);

  const indexOfLastImage = currentPage * imagePerPage;
  const indexOfFirstImage = indexOfLastImage - imagePerPage;

  const currentMarsRoverImages = images?.slice(
    indexOfFirstImage,
    indexOfLastImage
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearch = async (date) => {
    const images = await getImages(date);
    setImages(images ?? []);
  };

  return (
    <>
      <h2>Mars Images By Date</h2>
      <SearchByDate cb={handleSearch} />
      {!images ? (
        <div>Search images!!!</div>
      ) : (
        <>
          <ImagesMosaic marsRoverPhotos={currentMarsRoverImages} />
          <div style={{ textAlign: "right" }}>
            <Pagination
              imagePerPage={imagePerPage}
              totalImages={images.length}
              paginate={paginate}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Images;