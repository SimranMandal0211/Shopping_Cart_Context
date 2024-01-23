import {Link, React} from "react";
import styles from "../styles/Navbar.module.css";
import { useValue } from "../itemContext";
// import { totalContext } from "../totalContext";

function Navbar(){
  const {total, item, setItem, setTotal, reset, toggle} = useValue();
  // console.log(itemValue);

  // const totalValue = useContext(totalContext);
  // console.log(totalValue);

  // const reset = () => {
  //   setItem(0);
  //   setTotal(0);
  // };

  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
  
      <div className={styles.buttonsWrapper}>
        <button className={styles.button} onClick={toggle}>Cart</button>
        <button  className={styles.button} onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Navbar;
