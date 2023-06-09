// todo- build this out
import React from "react";
import ProductList from "../components/ProductList/index.js";
import CategoryMenu from "../components/CategoryMenu/index.js";
import Cart from "../components/Cart/index.js";

export default function Donate() {
  return (
    <>
      <CategoryMenu />
      <ProductList />
      <Cart />
    </>
  );
}
