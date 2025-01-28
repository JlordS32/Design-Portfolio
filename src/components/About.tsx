import styles from "../styles/modules/About.module.scss";
import Button from "./Button";

const About = () => {
   return (
      <section className={styles.about}>
         <div className={styles.imgWrapper}>
            <div>
               <img src="/images/person.png" alt="Amy" />
               <img src="/images/ui-ux.svg" alt="UI UX" />
               <img src="/images/apps-2.svg" alt="Apps" />
            </div>
         </div>
         <div className={styles.wrapper}>
            <h2>I’m Amy, and I’d love to work on your next project</h2>
            <p>
               I love working with others to create beautiful design solutions.
               I’ve designed everything from brand illustrations to complete
               mobile apps. I’m also handy with a camera!
            </p>
            <Button text="Free Consultation" buttonType="secondary" />
         </div>
      </section>
   );
};

export default About;
