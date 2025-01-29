import { useState } from "react";
import styles from "../styles/modules/ImageSlider.module.scss";
import Arrow from "./Arrow";
import { ImageSliderType } from "../types/ImageSlider";

const ImageSlider = ({ images }: ImageSliderType) => {
   const [imageIndex, setImageIndex] = useState(0);

   const showNextImage = () => {
      setImageIndex((index) => {
         if (index === images.length - 1) return 0;
         return index + 1;
      });
   };

   const showPreviousImage = () => {
      setImageIndex((index) => {
         if (index === 0) return images.length - 1;
         return index - 1;
      });
   };

   return (
      <>
         <div className={styles.container}>
            <div className={styles.slider}>
               {images.map((image, index) => {
                  return (
                     <img
                        src={`/images/${image}`}
                        key={index}
                        alt={`Slider Image ${index + 1}`}
                        style={{
                           translate: `${imageIndex * -100}%`,
                        }}
                     />
                  );
               })}
            </div>
         </div>
         <div className={styles.arrows}>
            <Arrow direction="left" onClick={showPreviousImage} />
            <Arrow direction="right" onClick={showNextImage} />
         </div>
      </>
   );
};

export default ImageSlider;
