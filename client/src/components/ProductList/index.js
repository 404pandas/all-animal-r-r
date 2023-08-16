import React, { useEffect } from "react";
import ProductItem from "../ProductItem/index.js";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_PRODUCTS } from "../../utils/actions.js";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries.js";
import { idbPromise } from "../../utils/helpers.js";
import PawprintSpinner from "../Spinner/index.js";

// MUI imports
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
function ProductList() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    } else if (!loading) {
      idbPromise("products", "get").then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  return (
    <div className='my-2' id='our-products'>
      <Typography variant='h5'>Our Products:</Typography>
      {state.products.length ? (
        <Box>
          {filterProducts().map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              description={product.description}
            />
          ))}
        </Box>
      ) : (
        <Typography variant='h4'>
          You haven't added any products yet!
        </Typography>
      )}
      {loading ? <PawprintSpinner /> : null}
    </div>
  );
}

export default ProductList;
