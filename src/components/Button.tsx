import styles from "../styles/modules/button.module.scss";

type ButtonType = {
   buttonType?: "primary" | "secondary";
   onClick?: () => void;
   text?: string;
};

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
