import Button from "./Button";
import styles from "../styles/modules/Navbar.module.scss";

const Navbar = () => {
   return (
      <nav className={`${styles.navbar}`}>
         <div className={styles.wrapper}>
            <img src="logo.svg" alt="logo" />

            <Button text="Free Consultation" buttonType="primary" />
         </div>
      </nav>
   );
};

export default Navbar;
