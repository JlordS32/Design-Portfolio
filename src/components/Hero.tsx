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
                  <img src="/images/graphic-design.svg" alt="Graphic Design" />
               </div>
            </div>
            <div className={styles.gridWrapper}>
               <div data-content="UI/UX">
                  <span>UI/UX</span>
                  <img src="/images/ui-ux.svg" alt="UI/UX" />
               </div>
            </div>
            <div className={styles.gridWrapper}>
               <div data-content="Apps">
                  <span>Apps</span>
                  <img src="/images/apps.svg" alt="Apps" />
               </div>
            </div>
            <div className={styles.gridWrapper}>
               <div data-content="Photography">
                  <span>Photography</span>
                  <img src="/images/photography.svg" alt="Photography" />
               </div>
            </div>
            <div className={styles.gridWrapper}>
               <div data-content="Illustrations">
                  <span>Illustrations</span>
                  <img src="/images/illustrations.svg" alt="Illustrations" />
               </div>
            </div>
            <div className={styles.gridWrapper}>
               <div data-content="Motion graphics">
                  <span>Motion graphics</span>
                  <img
                     src="/images/motion-graphics.svg"
                     alt="Motion Graphics Image"
                  />
               </div>
            </div>
         </div>
      </section>
   );
};

export default Hero;
