import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { currencyFormatter } from "../../util/formatting";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart-slice";

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const addItemToCartHandler = () => {
    dispatch(addItemToCart({item:props}));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{props.title}</h3>
          <div className={classes.price}>
            {currencyFormatter.format(props.price)}
          </div>
        </header>
        <p>{props.description}</p>
        <div className={classes.actions}>
          <button onClick={addItemToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
