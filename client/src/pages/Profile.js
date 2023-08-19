import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";

import Cart from "../components/Cart/index.js";
import PawprintSpinner from "../components/Spinner/index.js";
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from "../utils/actions.js";
import { QUERY_PRODUCTS, QUERY_USER } from "../utils/queries.js";
import { idbPromise } from "../utils/helpers.js";

// MUI imports
import Typography from "@mui/material/Typography";

function Profile() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const { dataUser } = useQuery(QUERY_USER);
  const userData = dataUser?.user || {};
  const { products, cart } = state;

  useEffect(() => {
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise("products", "get").then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });

    idbPromise("cart", "delete", { ...currentProduct });
  };
  console.log(currentProduct);
  return (
    <>
      {userData ? (
        <>
          <Typography variant='h4'>Welcome, {userData.firstName}</Typography>
        </>
      ) : null}
      {currentProduct && cart ? (
        <div className='container my-1' id='cart-list'>
          <Link to='/donate'>← Back to Donation Options</Link>

          <Typography variant='h2'>{currentProduct.name}</Typography>

          <Typography variant='body1'>{currentProduct.description}</Typography>

          <Typography variant='body1' id='cart-details'>
            <div>
              <strong>Price: </strong>${currentProduct.price}
            </div>
            <div id='cart-buttons'>
              <button onClick={addToCart}>Add to Cart</button>
              <button
                disabled={!cart.find((p) => p._id === currentProduct._id)}
                onClick={removeFromCart}
              >
                Remove from Cart
              </button>
            </div>
          </Typography>
        </div>
      ) : null}
      {loading ? <PawprintSpinner /> : null}
      <Typography variant='body1'>
        This will be home to user data. This user data will be used for a Search
        & Rescue app that is currently being developed.
      </Typography>
      <Cart />
    </>
  );
}

export default Profile;
