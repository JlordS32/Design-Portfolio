import styles from "../styles/modules/Portfolio.module.scss";
import ImageSlider from "./ImageSlider";

const Portfolio = () => {
   const images = [
      "work-1.png",
      "work-2.png",
      "work-3.png",
      "work-4.png",
      "work-5.png",
   ];

   return (
      <section className={styles.portfolio}>
         <h3>My Work</h3>
         <ImageSlider images={images} />
      </section>
   );
};

export default Portfolio;
