import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions.js";
import { idbPromise } from "../../utils/helpers.js";

// MUI import
import Button from "@mui/material/Button";

// local import
import "./style.css";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const { image, name, _id, price, description } = item;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    <Card className='product-cards'>
      <div className='price'>
        <span>${price}</span>{" "}
      </div>
      <img alt={name} src={`/images/${image}`} className='donate-icons' />
      <p>{name}</p>
      <div>
        <Typography variant='body2'>{description}</Typography>
      </div>
      <Button onClick={addToCart}>Add to cart</Button>
    </Card>
  );
}

export default ProductItem;
