import React, { useContext } from "react";
import { useSelector } from "react-redux";

import ProductItem from "../components/Products/ProductItem";
import "./Products.css";
import { useStore } from "../hooks-store/store";
import { ProductsContext } from "../context/products-context";
const Products = (props) => {
  const state = useStore()[0];
  const ProductsCtx = useContext(ProductsContext);
  //const productList = useSelector((state) => state.shop.products);
  return (
    <ul className="products-list">
      {state.products.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
