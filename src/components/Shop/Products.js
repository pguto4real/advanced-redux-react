import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { DUMMY_PRODUCTS } from "../../data";
console.log(DUMMY_PRODUCTS);
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(({ id, name, price, description, image }) => (
          <ProductItem
            key={id}
            title={name}
            price={price}
            description={description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
