// todo- build this out
import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

export default function Home() {
  return (
    <>
      <CategoryMenu />
      <ProductList />
      <Cart />
    </>
  );
}
