import styles from "../styles/modules/button.module.scss";
import { ButtonType } from "../types/Buttons";

const Button = ({
   buttonType = "primary",
   onClick = () => {},
   text = "Button",
}: ButtonType) => {
   return (
      <button
         className={`${styles.btn} 
            ${styles[buttonType]}`}
         onClick={onClick}
      >
         <span>{text}</span>
      </button>
   );
};

export default Button;
