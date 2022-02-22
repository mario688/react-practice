import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { ProductsContext } from "../context/products-context";
import FavoriteItem from "../components/Favorites/FavoriteItem";
import "./Products.css";
import { useStore } from "../hooks-store/store";
const Favorites = (props) => {
  // const favoriteProducts = useSelector(state =>
  //   state.shop.products.filter(p => p.isFavorite)
  // );
  const context = useContext(ProductsContext).products;
  const state = useStore()[0];
  const favoriteProducts = state.products.filter((e) => e.isFavorite);
  const filteredFavProducts = context.filter((e) => e.isFavorite);

  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map((prod) => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
