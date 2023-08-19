import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { ADD_ORDER } from "../utils/mutations.js";
import { idbPromise } from "../utils/helpers.js";

// MUI imports
import Typography from "@mui/material/Typography";

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise("cart", "get");
      const products = cart.map((item) => item._id);

      if (products.length) {
        const { data } = await addOrder({ variables: { products } });
        const productData = data.addOrder.products;

        productData.forEach((item) => {
          idbPromise("cart", "delete", item);
        });
      }

      setTimeout(() => {
        window.location.assign("/");
      }, 3000);
    }

    saveOrder();
  }, [addOrder]);

  return (
    <div>
      <Typography variaant='h4'>Success!</Typography>
      <Typography variant='h5'>Thank you for your donation!</Typography>
      <Typography variable='h5'>
        You will now be redirected to the home page
      </Typography>
    </div>
  );
}

export default Success;
