import React, { useState } from "react";

export const ProductsContext = React.createContext({
  products: [],
  setFavorite: (id) => {},
});

export default (props) => {
  const [productsList, setProductsList] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);

  const setFavorite = (productId) => {
    setProductsList((currentState) => {
      const favElementIndex = currentState.findIndex((e) => e.id === productId);

      const newFav = !currentState[favElementIndex].isFavorite;
      const updatedList = [...currentState];
      updatedList[favElementIndex].isFavorite = newFav;

      return updatedList;
    });
  };

  return (
    <ProductsContext.Provider
      value={{ products: productsList, toggleFav: setFavorite }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};
