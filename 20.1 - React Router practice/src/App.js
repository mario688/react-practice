import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import AllQuote from "./pages/AllQuote";
import QuoteDetals from "./pages/QuoteDetals";

import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
function App() {
  return (
    <>
      <Layout>
        <Suspense
          fallback={
            <div className="centered">
              <LoadingSpinner></LoadingSpinner>
            </div>
          }
        >
          <Switch>
            <Route path="/" exact>
              <Redirect to="/quotes" />
            </Route>
            <Route path="/quotes" exact>
              <AllQuote />
            </Route>
            <Route path="/quotes/:idQuote">
              <QuoteDetals />
            </Route>
            <Route path="/new-quote">
              <NewQuote />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
