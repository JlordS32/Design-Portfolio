import styles from "../styles/modules/button.module.scss";
import { ButtonType } from "../types/modules/Buttons";

const Button = ({
   buttonType = "primary",
   onClick = () => {alert("Button is clicked")},
   text = "Button",
}: ButtonType) => {
   return (
      <div
         className={`${styles.btn} 
            ${styles[buttonType]}`}
         onClick={onClick}
      >
         <span>{text}</span>
      </div>
   );
};

export default Button;
