import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { currencyFormatter } from '../../../../food-app/src/util/formatting.js'; 

const ProductItem = (props) => {
  const { title, price, description } = props;

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>{currencyFormatter.format(price)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
