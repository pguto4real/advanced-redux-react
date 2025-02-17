import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartData = useSelector((state) => state.cart.items);
  
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartData.map(({id,title,quantity,price}) => (
          <CartItem key={id}
            item={{ title: title, quantity: quantity, price: price }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
