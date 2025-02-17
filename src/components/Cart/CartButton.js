import { toggle } from "../../store/ui-slice";
import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";
const CartButton = (props) => {
  const dispatch = useDispatch();

  // const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
  const toggleCartHandler = () => {
    dispatch(toggle());
  };
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
