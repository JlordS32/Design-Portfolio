import styles from "../styles/modules/Hero.module.scss";

const Hero = () => {
   return (
      <section className={styles.hero}>
         <div className={styles.title}>
            <h1>Design solutions made easy</h1>
            <p>
               With over ten years of experience in various design disciplines,
               I’m your one-stop shop for your design needs.
            </p>
         </div>

         <div className={styles.graphics}>
            <div className={styles.gridWrapper}>
               <div data-content="Graphic Design">
                  <span>Graphic Design</span>
               </div>
            </div>
            <div className={styles.gridWrapper}>
               <div data-content="UI/UX">
                  <span>UI/UX</span>
               </div>
            </div>
            <div className={styles.gridWrapper}>
               <div data-content="Apps">
                  <span>Apps</span>
               </div>
            </div>
            <div className={styles.gridWrapper}>
               <div data-content="Photography">
                  <span>Photography</span>
               </div>
            </div>
            <div className={styles.gridWrapper}>
               <div data-content="Illustrations">
                  <span>Illustrations</span>
               </div>
            </div>
            <div className={styles.gridWrapper}>
               <div data-content="Motion graphics">
                  <span>Motion graphics</span>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Hero;
