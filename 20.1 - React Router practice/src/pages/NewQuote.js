import React, { useEffect } from "react";
import { useHistory } from "react-router";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
export default function NewQuote() {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);
  const saveQuoteHandler = (quteData) => {
    sendRequest(quteData);
    console.log(quteData);
  };

  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={saveQuoteHandler} />
  );
}
