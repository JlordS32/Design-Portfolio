import styles from "../styles/modules/arrow.module.scss";
import { ArrowType } from "../types/modules/Buttons";

const Arrow = ({
   direction = "left",
   buttonType = "primary",
   onClick = () => {
      alert("Button is clicked");
   },
}: ArrowType) => {
   const imageSrc = "/arrow.svg";

   return (
      <div
         className={`${styles.arrow} ${styles[buttonType]}`}
         onClick={onClick}
         data-direction={`${direction}`}
      >
         <img src={imageSrc} alt="allow left" />
      </div>
   );
};

export default Arrow;
