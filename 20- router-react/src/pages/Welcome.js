import React from "react";
import { Route } from "react-router-dom";
export default function Welcome() {
  return (
    <section>
      <h1>The welcome Page</h1>
      <Route path="/welcome/new-user">
        <h3>Welcome new user !</h3>
      </Route>
    </section>
  );
}
