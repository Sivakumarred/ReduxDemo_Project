import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'My First Book',
    description: 'The First Book I ever Wrote',

  },
  {
    id: 'p2',
    price: 5,
    title: 'My Second Book',
    description: 'The Second Book I ever Wrote',

  },
  {
    id: 'p3',
    price: 10,
    title: 'My third Book',
    description: 'The third Book I ever Wrote',

  },
];

const Products = (props) => {

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            key={product.id}
          />))};
      </ul>
    </section>
  );
};

export default Products;
