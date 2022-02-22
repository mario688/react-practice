import React, { useReducer, useState } from "react";

const reducer = (prevState, action) => {
  switch (action.type) {
    case "FETCHDATA":
      return {
        fetchedData: action.value,
        isLoading: prevState.isLoading,
        error: prevState.error,
      };
    case "ERROR":
      return {
        fetchData: prevState.value,
        isLoading: prevState.isLoading,
        error: action.error,
      };
    case "LOADING":
      return {
        fetchData: prevState.value,
        isLoading: action.isLoading,
        error: prevState.error,
      };
    default:
      return {
        fetchData: [],
        isLoading: true,
        error: null,
      };
  }
};

export default function useHttp(url) {
  const [dataFetch, setDataFetch] = useState([]);
  const [state, dispatch] = useReducer(reducer, {
    fetchData: [],
    isLoading: true,
    error: null,
  });
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong ! :C");
      }
      const transformedData = await response.json();
      let listOfdata = [];
      for (const key in transformedData) {
        listOfdata.push({
          id: key,
          key: key,
          name: transformedData[key].name,
          desc: transformedData[key].description,
          price: transformedData[key].price,
        });
      }
      setDataFetch(listOfdata);
      dispatch({ type: "FETCHDATA", value: dataFetch });
      //setFetchedData(listOfdata);
      //setIsLoading(false);
      dispatch({ type: "LOADING", isLoading: false });
      console.log(state.value);
    } catch (error) {
      dispatch({ type: "ERROR", error: error.message });
      //setError(error.message);
    }
  };

  return {
    fetchedData: state.fetchedData,
    isLoading: state.isLoading,
    error: state.error,
    fetchData,
  };
}
