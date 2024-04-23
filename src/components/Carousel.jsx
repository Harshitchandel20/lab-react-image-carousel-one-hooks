import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
  const [image, setImage] = useState(0);

  const handleNavigation = (val) => {
    if (val === "left") {
        if (image === 0) {
          setImage(images.length - 1);
        } else {
          setImage(image - 1);
        }
      } else {
        if (image === images.length - 1) {
          setImage(0);
        } else {
          setImage(image + 1);
        }
      }
}




  return (
    <div className="main_container">
      <div className="image">
        <div className="arrow left" onClick={()=> {handleNavigation("left")}}><ArrowBackIosIcon /></div>
        <h1 className="title">{images[image].title}</h1>
        <img 
        src={images[image].img} alt=''
        />
        <h3 className="text">{images[image].subtitle}</h3>
        <div className="arrow right" onClick={() => {handleNavigation("right")}}><ArrowForwardIosIcon /></div>
      </div>
    </div>
  );

}

export default Carousel;