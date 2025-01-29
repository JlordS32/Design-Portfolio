import styles from "../styles/modules/Contact.module.scss";
import Button from "./Button";

const Contact = () => {
   return (
      <section className={styles.contact}>
         <div className={styles.container}>
            <div className={styles.booking}>
               <h2>Book a call with me</h2>
               <p>
                  I’d love to have a chat to see how I can help you. The best
                  first step is for us to discuss your project during a free
                  consultation. Then we can move forward from there.
               </p>
            </div>

            <div className={styles.clickToAction}>
               <Button text="Free Consultation" buttonType="secondary" />
            </div>
         </div>
      </section>
   );
};

export default Contact;
