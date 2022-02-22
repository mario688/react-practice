import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const products = [
    {
      id: "p1",
      title: "Ziemnioki",
      price: 31.21,
      description: "Ziemniaki zapiekane",
      quantity: 1,
      total: 31.21,
    },
    {
      id: "p2",
      title: "Placki",
      price: 11.35,
      description: "Placki z jagodami",
      quantity: 1,
      total: 11.35,
    },
    {
      id: "p3",
      title: "Monitor",
      price: 111.21,
      description: "Monitor 4k",
      quantity: 1,
      total: 111.21,
    },
  ];

  const productsMapped = products.map((element) => {
    return (
      <ProductItem
        key={element.title}
        id={element.id}
        title={element.title}
        price={element.price}
        quantity={element.quantity}
        total={element.total}
        description={element.description}
      ></ProductItem>
    );
  });
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{productsMapped}</ul>
    </section>
  );
};

export default Products;
