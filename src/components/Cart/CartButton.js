import { useDispatch, useSelector } from "react-redux";

import { toggle } from "../../store/ui-slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();

   const cartTotal = useSelector((state) => state.cart.cartTotal);
  const toggleCartHandler = () => {
    dispatch(toggle());
  };
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartTotal}</span>
    </button>
  );
};

export default CartButton;
