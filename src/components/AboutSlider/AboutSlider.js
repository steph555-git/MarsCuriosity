import React, { useState } from "react";

const AboutSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const leftArrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0,-50%)",
    left: "-50px",
    fontSize: "45px",
    color: "#000",
    zIndex: 1,
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const rightArrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0,-50%)",
    right: "-50px",
    fontSize: "45px",
    color: "#000",
    zIndex: 1,
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const toPrevious = () => {
    const ifFirstSlide = currentIndex === 0;
    const newIndex = ifFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const toNext = () => {
    const ifLastSlide = currentIndex === slides.length - 1;
    const newIndex = ifLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div style={{ height: "100%", position: "relative" }}>
        <div style={leftArrowStyle} onClick={toPrevious}>
          ≪
        </div>
        <div style={rightArrowStyle} onClick={toNext}>
          ≫
        </div>
        <div
          className="row"
          style={{ transform: `translateX(-${currentIndex * 100}px)` }}
        ></div>
        <div
          style={{
            backgroundImage: `url(${slides[currentIndex]?.img_src})`,
            width: "100%",
            height: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      {/*
                slides?.map((photo, i) => (
                    <img src={photo.img_src} key={i} alt='curiosity' />
                ))

                /*https://www.youtube.com/watch?v=SK9AlIbexOE*/}
    </>
  );
};

export default AboutSlider;

// const Sandbox = () => {
// 	useDatoriosPageTitle('Sandbox');
// 	const [index, setIndex] = useState(0);

// 	const [value, setValue] = useState<string | undefined>();

// 	const pics = [1, 2, 3, 4, 5].map(pic => (
// 		<div key={pic} className="image">
// 			{pic}
// 		</div>
// 	));

// 	return (
// 		<Wrapper $index={index}>
// 			<button onClick={() => setIndex(preValue => --preValue)} disabled={index === 0}>{`<<`}</button>
// 			<div className="window">
// 				<div className="row">{pics}</div>
// 			</div>
// 			<button
// 				onClick={() => setIndex(preValue => ++preValue)}
// 				disabled={pics.length === index + 1}
// 			>{`>>`}</button>
// 			<div>{index}</div>
// 		</Wrapper>
// 	);
// };
