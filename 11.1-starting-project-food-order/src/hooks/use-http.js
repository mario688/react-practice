import { useState, useCallback } from "react";

export default function useHttp(httpRequest) {
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSend, setSend] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = useCallback(async () => {
    setSend(true);
    try {
      const response = await fetch(httpRequest.url, {
        method: httpRequest.method ? httpRequest.method : "GET",
        headers: httpRequest.header ? httpRequest.header : {},
        body: httpRequest.body ? httpRequest.body : null,
      });
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
      setFetchedData(listOfdata);
      setIsLoading(false);
      setSend(false);
    } catch (error) {
      setError(error.message);
    }
  }, [
    httpRequest.url,
    httpRequest.method,
    httpRequest.header,
    httpRequest.body,
  ]);

  return { fetchedData, isLoading, isSend, error, fetchData };
}
