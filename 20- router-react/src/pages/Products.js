import React from "react";
import { Link } from "react-router-dom";
export default function Products() {
  return (
    <section>
      <h2>Products Page</h2>
      <ul>
        <li>
          <Link to="/products/p1">A book</Link>
        </li>
        <li>
          <Link to="/products/p2">A car</Link>
        </li>
        <li>
          <Link to="/products/p3">A tv</Link>
        </li>
      </ul>
    </section>
  );
}
