import styles from "../css/button.module.scss";

type ButtonType = {
   buttonType?: "primary" | "secondary";
   onClick?: () => void;
};

const Button = ({ buttonType, onClick }: ButtonType) => {
   return (
      <div className={styles.btn} onClick={onClick}>
         <span>Button</span>
      </div>
   );
};

export default Button;
