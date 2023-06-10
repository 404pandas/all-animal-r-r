import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../../utils/queries.js";
import { idbPromise } from "../../utils/helpers.js";
import CartItem from "../CartItem/index.js";
import Auth from "../../utils/auth.js";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../../utils/actions.js";
import "./style.css";

// MUI imports
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography/index.js";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

export default function Cart() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise("cart", "get");
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  if (!state.cartOpen) {
    return (
      <div className='cart-closed' id='shopping-cart-icon' onClick={toggleCart}>
        <ShoppingCartOutlinedIcon id='mui-icon' />
      </div>
    );
  }

  return (
    <div className='cart'>
      <div className='close' onClick={toggleCart}>
        [close]
      </div>
      <Typography variant='h3'>Shopping Cart</Typography>
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

          <div className='flex-row space-between'>
            <strong>Total: ${calculateTotal()}</strong>

            {Auth.loggedIn() ? (
              <Button onClick={submitCheckout}>Checkout</Button>
            ) : (
              <span>(log in to check out)</span>
            )}
          </div>
        </div>
      ) : (
        <Typography variant='h4'>
          <span role='img' aria-label='shocked'>
            😱
          </span>
          You haven't added anything to your cart yet!
        </Typography>
      )}
    </div>
  );
}
