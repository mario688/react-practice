import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
export default function QuoteDetals() {
  let dataQuotes = [];
  const param = useParams();
  const match = useRouteMatch();
  const { idQuote } = param;
  const { sendRequest, status, data, error } = useHttp(getSingleQuote, true);
  useEffect(() => {
    sendRequest(idQuote);
  }, [sendRequest, idQuote]);
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered focused">{error}</p>;
  }
  if (!data.text) {
    return <p className="centered focused">not found</p>;
  }

  return (
    <div>
      <h2>Qoute details</h2>
      <HighlightedQuote text={data.text} author={data.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </div>
  );
}
