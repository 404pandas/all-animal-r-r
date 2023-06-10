// todo- build this out
import React from "react";
import ProductList from "../components/ProductList/index.js";
import CategoryMenu from "../components/CategoryMenu/index.js";
import Cart from "../components/Cart/index.js";

export default function Donate() {
  return (
    <div id='donation-container'>
      <CategoryMenu />
      <div id='product-list'>
        <ProductList />
      </div>
      <Cart />
    </div>
  );
}
