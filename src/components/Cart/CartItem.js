import classes from "./CartItem.module.css";
import { currencyFormatter } from "../../util/formatting";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart-slice";
const CartItem = (props) => {
  console.log(props)
  const { title, quantity,price } = props.item;

  const dispatch = useDispatch();

  const addItemToCartHandler = () => {
    dispatch(addItemToCart({item:props.cartData}));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          {currencyFormatter.format(price * quantity)}
          <span className={classes.itemprice}>
            ({currencyFormatter.format(price)}/item)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button>-</button>
          <button onClick={addItemToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
