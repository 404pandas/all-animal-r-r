import React, { useEffect } from "react";

// external imports
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@apollo/client";

// local imports
import { QUERY_PRODUCTS } from "../../utils/queries.js";
import { idbPromise } from "../../utils/helpers.js";
import PawprintSpinner from "../Spinner/index.js";
import ProductItem from "../ProductItem/index.js";
import { UPDATE_PRODUCTS } from "../../utils/actions.js";
import "./style.css";

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
      {state.products.length ? (
        <Box id='products-flex'>
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
