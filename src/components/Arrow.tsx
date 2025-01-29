import styles from "../styles/modules/Arrow.module.scss";
import { ArrowType } from "../types/Buttons";

const Arrow = ({ direction = "left", onClick = () => {} }: ArrowType) => {
   const imageSrc = "/arrow.svg";

   return (
      <button
         className={`${styles.arrow}`}
         onClick={onClick}
         data-direction={`${direction}`}
      >
         <img src={imageSrc} alt="allow left" />
      </button>
   );
};

export default Arrow;
