import React from "react";
import styles from "./ImagesMosaic.module.css";

const ImagesMosaic = ({ marsRoverPhotos }) => {
  return (
    <>
      <div style={{ marginTop: 10 }} className={styles.grid}>
        {marsRoverPhotos.length ? (
          marsRoverPhotos.map((photo, i) => (
            <div key={i}>
              <img
                className={styles.gridItem}
                src={photo.img_src}
                alt={photo.camera.full_name}
              />
            </div>
          ))
        ) : (
          <div>No data</div>
        )}
      </div>
    </>
  );
};

export default ImagesMosaic;