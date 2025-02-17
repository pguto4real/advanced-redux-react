import classes from "./CartItem.module.css";
import { currencyFormatter } from "../../util/formatting";
const CartItem = (props) => {
  const { title, quantity,price } = props.item;

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
          <button>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
